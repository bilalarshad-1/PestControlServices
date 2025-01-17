import React from "react";
import ReactDOM from "react-dom/client"; // or ReactDOM from "react-dom" for older versions
import { BrowserRouter as Router } from "react-router-dom"; // Import BrowserRouter
import App from "./App"; // Import your App component
import './index.css'; 
const root = ReactDOM.createRoot(document.getElementById("root")); // For React 18+
root.render(
  <Router>
    <App />
  </Router>
);