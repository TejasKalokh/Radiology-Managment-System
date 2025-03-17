// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App"; // ✅ Make sure this is correctly imported
// import './index.css'; // Tailwind and global styles
// import './styles.css'; // Custom styles (header, card, button, etc.)

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./styles.css";  // ✅ Import global styles
import "./index.css";  // ✅ Import global styles
import "@fortawesome/fontawesome-free/css/all.min.css";



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
