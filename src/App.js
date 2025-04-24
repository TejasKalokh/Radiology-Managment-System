// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from './context/AuthContext';
import LandingPage from "./pages/LandingPage.jsx";
import PatientDashboard from "./pages/PatientDashboard.jsx";
import DoctorDashboard from "./pages/DoctorDashboard.jsx";
import ReceptionDashboard from "./pages/ReceptionDashboard";
import AdminDashboard from "./pages/AdminDashboard.jsx";
import SignUp from "./pages/signUp.jsx";
import SignIn from "./pages/signIn.jsx";
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
import PrivateRoute from './components/PrivateRoute.js';
import './index.css';
import './styles.css';

function AppContent() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route
          path="/reception-dashboard"
          element={
            <PrivateRoute requiredRole="RECEPTIONIST">
              <ReceptionDashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/patient-dashboard"
          element={
            <PrivateRoute requiredRole="PATIENT">
              <PatientDashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/doctor-dashboard"
          element={
            <PrivateRoute requiredRole="DOCTOR">
              <DoctorDashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin-dashboard"
          element={
            <PrivateRoute requiredRole="ADMIN">
              <AdminDashboard />
            </PrivateRoute>
          }
        />
        <Route path="/Diagnosis" element={<DiagnosticUi />} />
        <Route path="/usg-obs" element={<USGObsPage />} />
        <Route path="/carotid-doppler" element={<CarotidDopplerPage />} />
        <Route path="/scrotum-doppler" element={<ScrotumDopplerPage />} />
        <Route path="/renal-doppler" element={<RenalDopplerPage />} />
        <Route path="/obsPregnancy-doppler" element={<ObsPregnancyDopplerPage />} />
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
        <Route path="/ECG" element={<ECGPage />} />
      </Routes>
    </Router>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;

