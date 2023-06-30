import App from "app/app";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const container = document.getElementById("root");

if (container) {
  const root = ReactDOM.createRoot(container);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error("Could not find container element with id 'root'");
}
