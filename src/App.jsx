import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import StaffPanel from "./pages/StaffPanel"; // Import staff page

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Dashboard with Layout */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
        <Route path="/staffpanel" element={<StaffPanel />} />

        </Route>

        {/* Staff Panel outside Layout */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
