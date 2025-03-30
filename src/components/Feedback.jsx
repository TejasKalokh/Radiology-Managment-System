import React, { useState } from 'react';
import "../styles.css"; 

const FeedbackSection = () => {
    const [feedback, setFeedback] = useState('');

    const submitFeedback = () => {
        if (feedback.trim() === "") {
            alert("Please enter your feedback before submitting.");
            return;
        }
        alert("Thank you for your feedback!");
        setFeedback(""); // Clear feedback after submission
    };

    return (
        <section id="feedback" className="feedback-section">
            <h2 class="text-2xl font-bold">Feedback & Review</h2>
            <p>Share your experience with us:</p>
            <textarea
                id="feedback-text"
                rows="4"
                placeholder="Write your feedback here..."
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
            ></textarea>
            <button className="button" onClick={submitFeedback}>Submit Feedback</button>

            <p>Alternatively, you can provide feedback using our Google Form or leave a review on Google:</p>
            <a
                href="https://forms.gle/hTd8aPjywwK8reLZ8"
                target="_blank"
                rel="noopener noreferrer"
                className="feedback-link"
            >
                Fill out Google Form
            </a>
            <a
                href="https://www.google.com/search?sca_esv=81490bff7710e63a&hl=en-IN&sxsrf=AHTn8zqVOglfpbz6xFB_0AHLcDsLF9SzAw:1738917442647&si=APYL9bs7Hg2KMLB-4tSoTdxuOx8BdRvHbByC_AuVpNyh0x2KzThY7nDT7mE_-S4IVmcTlOYr-n8YmqyDh3NZM6mW0z1JKb1TMocHSdRgLUV_eBwaaTtJMaF3cyrmGtACj8NVx2frixIUmHMXYzsphmB1k_gM8-ySBbcMLUtF-m9q6U84gHzHSdA%3D&q=Reliable+Diagnostic+%26+Imaging+Centre+Reviews&sa=X&ved=2ahUKEwi2ttmjlLGLAxUaSWwGHfmaOkoQ0bkNegQIHRAD&biw=1536&bih=730&dpr=1.25#lrd=0x3be7bffa3d794477:0x3c1fe39b8015fd21,3,,,," 
                target="_blank"
                rel="noopener noreferrer"
                className="feedback-link"
            >
                Leave a Google Review
            </a>
        </section>
    );
};

export default FeedbackSection;
