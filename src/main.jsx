import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Filter } from "./component/index.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import './index.css'

ReactDOM.createRoot(document.getElementById("navigation")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/cari-mobil" element={<Filter />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
