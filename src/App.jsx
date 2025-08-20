import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import StaffPanel from "./pages/StaffPanel"; // Import staff page
import NewStaffForm from "./pages/StaffCreate";
import StaffView from "./pages/StaffView";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Dashboard with Layout */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
        <Route path="staffpanel" element={<StaffPanel />} />
        <Route path="staffcreate" element={<NewStaffForm />} />
        <Route path="staffview" element={<StaffView />} />

        </Route>

        {/* Staff Panel outside Layout */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
