import React from "react";
import Header from "../components/Header";
import AppointmentForm from "../components/AppointmentForm";
import Reports from "../components/Reports";
import Feedback from "../components/Feedback";

const PatientDashboard = () => {
  return (
    <div className="w-full min-h-screen bg-gray-100 overflow-x-hidden">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className="flex flex-col justify-start min-h-screen">
        <div className="space-y-10">
          <AppointmentForm />
          <Reports />
          <Feedback />
        </div>
      </div>
    </div>
  );
};

export default PatientDashboard;
