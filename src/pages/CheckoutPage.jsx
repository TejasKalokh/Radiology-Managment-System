import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { QRCodeSVG } from 'qrcode.react';

const CheckoutPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { appointment } = location.state || {};
    const [paymentProcessing, setPaymentProcessing] = useState(false);
    const [showQRCode, setShowQRCode] = useState(false);
    const [paymentMethod, setPaymentMethod] = useState('card');
    const [paymentLink, setPaymentLink] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [testCharges, setTestCharges] = useState({});

    // Fetch test charges from the API
    useEffect(() => {
        const fetchTestCharges = async () => {
            try {
                console.log("Fetching test charges from API");
                const response = await fetch(`${process.env.REACT_APP_API_URL}/api/reception/getalltests`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    credentials: 'include'
                });

                if (!response.ok) {
                    throw new Error(`Failed to fetch test charges: ${response.status}`);
                }

                const data = await response.json();
                console.log("Received test data:", data);

                // Create a mapping of test names to their charges
                const chargesMap = {};
                data.forEach(test => {
                    if (test.testname && test.testcharge) {
                        chargesMap[test.testname] = test.testcharge;
                    }
                });

                console.log("Test charges map:", chargesMap);
                setTestCharges(chargesMap);
            } catch (error) {
                console.error("Error fetching test charges:", error);
                setError(`Failed to load test charges: ${error.message}`);
            }
        };

        fetchTestCharges();
    }, []);

    // Check if appointment data is available
    useEffect(() => {
        console.log("CheckoutPage mounted with appointment data:", appointment);
        if (!appointment) {
            console.error("No appointment data found in navigation state");
            setError("No appointment data found. Please return to the dashboard and try again.");
        }
    }, [appointment]);

    useEffect(() => {
        if (showQRCode && paymentMethod === 'qr') {
            generatePaymentLink();
        }
    }, [showQRCode, paymentMethod]);

    const generatePaymentLink = async () => {
        if (!appointment) {
            setError("Cannot generate payment link: No appointment data available");
            return;
        }

        setLoading(true);
        try {
            console.log("Generating payment link for appointment:", appointment);
            
            // Calculate the amount based on the test type
            const amount = calculateAmount(appointment.test_type);
            console.log("Calculated amount:", amount);
            
            // Determine the test type and related fields based on appointment type
            const testDetails = {
                testname: appointment.test_type || appointment.testname || '',
                sub_testname: appointment.subTestType || appointment.sub_testname || '',
                sub_sub_testname: appointment.additionalSubTestType || appointment.sub_sub_testname || '',
                testcharge: amount // Add the calculated amount to the request
            };

            console.log("Sending test details:", testDetails);

            const response = await fetch(`${process.env.REACT_APP_API_URL}/api/reception/createpayment`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                credentials: 'include',
                body: JSON.stringify(testDetails)
            });

            if (!response.ok) {
                const errorText = await response.text();
                console.error("Payment link generation failed:", response.status, errorText);
                throw new Error(`Failed to generate payment link: ${response.status} - ${errorText}`);
            }

            // Log the response headers and content type
            console.log("Response headers:", Object.fromEntries(response.headers.entries()));
            console.log("Content-Type:", response.headers.get('content-type'));

            // Get the response data
            const contentType = response.headers.get('content-type');
            let responseData;
            
            if (contentType && contentType.includes('application/json')) {
                // Parse as JSON
                responseData = await response.json();
                console.log("Received JSON data:", responseData);
                
                // Check for the PaymentResponse format
                if (responseData.qrCodeBase64) {
                    console.log("Found QR code in response:", responseData.qrCodeBase64.substring(0, 50) + "...");
                    setPaymentLink(responseData.qrCodeBase64);
                    setShowQRCode(true);
                    return;
                }
                
                // Check for the base64Image property
                if (responseData.base64Image) {
                    console.log("Found base64Image in response");
                    setPaymentLink(responseData.base64Image);
                    setShowQRCode(true);
                    return;
                }
            } else {
                // Parse as text
                const textData = await response.text();
                console.log("Received text data (first 100 chars):", textData.substring(0, 100));
                
                // Try to parse the text as JSON
                try {
                    const parsedData = JSON.parse(textData);
                    console.log("Successfully parsed text as JSON:", parsedData);
                    
                    if (parsedData.qrCodeBase64) {
                        console.log("Found QR code in parsed text:", parsedData.qrCodeBase64.substring(0, 50) + "...");
                        setPaymentLink(parsedData.qrCodeBase64);
                        setShowQRCode(true);
                        return;
                    }
                    
                    if (parsedData.base64Image) {
                        console.log("Found base64Image in parsed text");
                        setPaymentLink(parsedData.base64Image);
                        setShowQRCode(true);
                        return;
                    }
                } catch (parseError) {
                    console.log("Could not parse text as JSON:", parseError);
                }
                
                // Check if the text data looks like base64
                if (textData.match(/^[A-Za-z0-9+/=]+$/)) {
                    console.log("Text appears to be base64 data");
                    setPaymentLink(textData);
                    setShowQRCode(true);
                    return;
                }
            }
            
            // If we get here, we couldn't process the response
            throw new Error("Received invalid data format from server");
        } catch (error) {
            console.error('Error generating payment link:', error);
            setError(`Failed to generate payment link: ${error.message}`);
            setShowQRCode(false);
        } finally {
            setLoading(false);
        }
    };

    const handlePayment = async () => {
        if (!appointment) {
            setError("Cannot process payment: No appointment data available");
            return;
        }

        if (paymentMethod === 'qr') {
            setShowQRCode(true);
            return;
        }

        setPaymentProcessing(true);
        try {
            // Simulate payment processing
            await new Promise(resolve => setTimeout(resolve, 2000));

            // Generate bill after successful payment
            generateBill(appointment, 'online');

            // Navigate back to dashboard
            navigate('/reception-dashboard');
        } catch (error) {
            console.error('Payment failed:', error);
            setError(`Payment failed: ${error.message}`);
        } finally {
            setPaymentProcessing(false);
        }
    };

    const handleGenerateBill = () => {
        if (!appointment) {
            setError("Cannot generate bill: No appointment data available");
            return;
        }

        // Generate bill
        generateBill(appointment, paymentMethod);
        
        // Navigate back to dashboard
        navigate('/reception-dashboard');
    };

    const generateBill = (appointment, paymentMethod) => {
        if (!appointment) {
            setError("Cannot generate bill: No appointment data available");
            return;
        }

        const patientName = appointment.name || 
            `${appointment.patient_first_name || ''} ${appointment.patient_middle_name || ''} ${appointment.patient_last_name || ''}`.trim() || 
            "Unknown Patient";

        const billData = {
            patientName: patientName,
            patientId: appointment.patient_id || "N/A",
            testType: appointment.test_type || "N/A",
            amount: calculateAmount(appointment.test_type),
            paymentMethod: paymentMethod,
            date: new Date().toLocaleDateString(),
            time: new Date().toLocaleTimeString()
        };
        console.log('Generating bill:', billData);
        alert('Bill generated successfully!');
    };

    const calculateAmount = (testType) => {
        // If we have the test charge from the API, use it
        if (testCharges[testType]) {
            console.log(`Using API charge for ${testType}: ${testCharges[testType]}`);
            return testCharges[testType];
        }
        
        // Fallback to hardcoded values if API data is not available
        console.log(`No API charge found for ${testType}, using fallback values`);
        const prices = {
            'X-Ray': 500,
            'MRI': 5000,
            'CT Scan': 3000,
            'Ultrasound': 1000,
            'Blood Test': 300
        };
        return prices[testType] || 0;
    };

    // If there's an error, show error message
    if (error) {
        return (
            <div className="min-h-screen bg-gray-100 py-8">
                <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-6">
                    <h2 className="text-2xl font-bold mb-6 text-center text-red-600">Error</h2>
                    <div className="bg-red-50 p-6 rounded-lg mb-6">
                        <p className="text-red-700">{error}</p>
                    </div>
                    <div className="flex justify-center">
                        <button
                            onClick={() => navigate('/reception-dashboard')}
                            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
                        >
                            Return to Dashboard
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    // If no appointment data, show loading or error
    if (!appointment) {
        return (
            <div className="min-h-screen bg-gray-100 py-8">
                <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-6">
                    <h2 className="text-2xl font-bold mb-6 text-center">Loading...</h2>
                    <div className="flex justify-center">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-100 py-8">
            <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-bold mb-6 text-center">Payment Checkout</h2>

                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                    <h3 className="text-xl font-semibold mb-4">Appointment Details</h3>
                    <div className="space-y-3">
                        <p className="flex justify-between">
                            <span className="font-medium">Patient Name:</span>
                            <span>{appointment.name || `${appointment.patient_first_name || ''} ${appointment.patient_middle_name || ''} ${appointment.patient_last_name || ''}`.trim() || "Unknown"}</span>
                        </p>
                        <p className="flex justify-between">
                            <span className="font-medium">Patient ID:</span>
                            <span>{appointment.patient_id || "N/A"}</span>
                        </p>
                        <p className="flex justify-between">
                            <span className="font-medium">Test Type:</span>
                            <span>{appointment.test_type || "N/A"}</span>
                        </p>
                        <p className="flex justify-between">
                            <span className="font-medium">Amount:</span>
                            <span className="font-bold">₹{calculateAmount(appointment.test_type)}</span>
                        </p>
                    </div>
                </div>

                {/* Payment Method Selection */}
                <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-4">Select Payment Method</h3>
                    <div className="flex gap-4">
                        <button
                            onClick={() => setPaymentMethod('card')}
                            className={`flex-1 py-3 rounded-lg ${
                                paymentMethod === 'card'
                                    ? 'bg-blue-600 text-white'
                                    : 'bg-gray-200 text-gray-700'
                            }`}
                        >
                            Card Payment
                        </button>
                        <button
                            onClick={() => setPaymentMethod('qr')}
                            className={`flex-1 py-3 rounded-lg ${
                                paymentMethod === 'qr'
                                    ? 'bg-blue-600 text-white'
                                    : 'bg-gray-200 text-gray-700'
                            }`}
                        >
                            QR Code Payment
                        </button>
                    </div>
                </div>

                {/* QR Code Display */}
                {showQRCode && (
                    <div className="mb-6 text-center">
                        {loading ? (
                            <div className="py-8">
                                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
                                <p className="mt-4 text-gray-600">Generating payment QR code...</p>
                            </div>
                        ) : paymentLink ? (
                            <>
                                <div className="bg-white p-4 rounded-lg inline-block">
                                    <img 
                                        src={`data:image/png;base64,${paymentLink}`} 
                                        alt="Payment QR Code" 
                                        className="w-64 h-64"
                                        onError={(e) => {
                                            console.error("Error loading QR code image");
                                            setError("Failed to load QR code image");
                                            setShowQRCode(false);
                                        }}
                                    />
                                </div>
                                <p className="mt-4 text-gray-600">
                                    Scan this QR code with your UPI app to complete the payment
                                </p>
                                <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
                                    <button
                                        onClick={() => setShowQRCode(false)}
                                        className="bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700"
                                    >
                                        Back
                                    </button>
                                    <button
                                        onClick={generatePaymentLink}
                                        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
                                    >
                                        Refresh
                                    </button>
                                    <button
                                        onClick={handleGenerateBill}
                                        className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700"
                                    >
                                        Generate Bill
                                    </button>
                                </div>
                            </>
                        ) : (
                            <div className="text-red-600">
                                Failed to generate QR code. Please try again.
                            </div>
                        )}
                    </div>
                )}

                {/* Action Buttons */}
                {!showQRCode && (
                    <div className="flex flex-col sm:flex-row gap-3">
                        <button
                            onClick={() => navigate('/reception-dashboard')}
                            className="flex-1 bg-gray-600 text-white py-3 rounded-lg hover:bg-gray-700"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={handlePayment}
                            disabled={paymentProcessing}
                            className="flex-1 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 disabled:bg-gray-400"
                        >
                            {paymentProcessing ? 'Processing Payment...' : 'Proceed to Pay'}
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CheckoutPage;