// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage.jsx";
import PatientDashboard from "./pages/PatientDashboard.jsx";
import DoctorDashboard from "./pages/DoctorDashboard.jsx";
import ReceptionDashboard from "./pages/ReceptionDashboard";  // Import the Reception Dashboard
import SignUp from "./pages/signUp.jsx"; // Import your Sign In page
import SignIn from "./pages/signIn.jsx"; // Import your Sign In page
import DiagnosticUi from "./components/DiagnosticUi.jsx";
import SonographyPage from "./pages/SonographyPage";
import USGPelvisPage from "./pages/USGPelvisPage";
import USGSmallParts from "./pages/USGSmallParts.jsx";
import USGAbdomenPelvis from "./pages/USGAbdomenPelvis.jsx"
import USGObsPage from "./pages/USGObsPgae.jsx" 
import USGUpperAbdomen from './pages/USGUpperAbdomen.jsx';
import USGProstatePage from "./pages/USGProstatePage.jsx";
import USGKUBMale  from "./pages/USGKUBMale.jsx";
import USGKUBFemale  from "./pages/USGKUBFemale.jsx";
import USGPVR  from "./pages/USGPVR.jsx";
import USGPrePostVoid from "./pages/USGPrePostVoid.jsx";
import DigitalXrayPage from './pages/DigitalXrayPage.jsx';
import ECGPage from "./pages/ECGPage.jsx";
import ColorDopplerPage from "./pages/ColorDopplerPage.jsx";
import DopplerUpperLimbPage from './pages/DopplerUpperLimbPage.jsx';
import DopplerLowerLimbPage from './pages/DopplerLowerLimbPage.jsx';
import CarotidDopplerPage from './pages/CarotidDopplerPage.jsx';
import RenalDopplerPage from './pages/RenalDopplerPage.jsx';
import ScrotumDopplerPage from './pages/ScrotumDopplerPage.jsx';
import ObsPregnancyDopplerPage from './pages/ObsPregnancyDopplerPage.jsx';

import './index.css'; // Tailwind and global styles
import './styles.css'; // Custom styles (header, card, button, etc.)

// const App = () => {
//   const [notificationCount] = useState(3); // You can adjust this dynamically based on the data

//   return (
//     <div>
//       <Header notificationCount={notificationCount} />
//       <main className="mt-24">
//         {/* Appointment Section */}
//         <Appointment />

//         {/* Reports Section */}
//         <Reports />

//         {/* Feedback Section */}
//         <Feedback />
//       </main>
//     </div>
//   );
// };

// export default App;

// // 




function App() {
  return (
    
      <Routes>
        <Route path="/Diagnosis" element={<DiagnosticUi />} />
        <Route path="/usg-obs" element={<USGObsPage />} />
        <Route path="carotid-doppler" element={<CarotidDopplerPage />} />
        <Route path="scrotum-doppler" element={<ScrotumDopplerPage />} />
        <Route path="renal-doppler" element={<RenalDopplerPage />} />
        <Route path="obsPregnancy-doppler" element={<ObsPregnancyDopplerPage />} />
        <Route path="/usg-prostate" element={<USGProstatePage />} />
        <Route path="/usg-kub-male" element={<USGKUBMale />} />
        <Route path="/usg-prepost-void" element={<USGPrePostVoid />} />
        <Route path="/usg-pvr" element={<USGPVR />} />
        <Route path="/doppler-upper" element={<DopplerUpperLimbPage />} />
        <Route path="/doppler-lower" element={<DopplerLowerLimbPage />} />
        <Route path="/ColorDoppler" element={<ColorDopplerPage />} />
        <Route path="/usg-kub-female" element={<USGKUBFemale />} />
        <Route path="/usg-upper-abd" element={<USGUpperAbdomen/>}/>
        <Route path="/usg-pelvis" element={<USGPelvisPage />} />
        <Route path="/usg-small" element={<USGSmallParts />} />
        <Route path="/usg-abd-pelvis" element={<USGAbdomenPelvis />} />
        <Route path="/sonography" element={<SonographyPage />} />
        <Route path="/X-Ray" element={<DigitalXrayPage />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/ECG" element={<ECGPage />} />
        <Route path="/patient-dashboard" element={<PatientDashboard />} />
        <Route path="/doctor-dashboard" element={<DoctorDashboard />} />
        <Route path="/reception-dashboard" element={<ReceptionDashboard />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
      </Routes>
    
  );
}
export default App;

