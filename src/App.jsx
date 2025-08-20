import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import StaffPanel from "./pages/StaffPanel"; // Import staff page
import NewStaffForm from "./pages/StaffCreate";
import StaffView from "./pages/StaffView";
import SenderView from "./pages/SenderReceiver/SenderView";
import SenderCreate from "./pages/SenderReceiver/SenderCreate";
import ReceiverView from "./pages/SenderReceiver/ReceiverView";
import ReceiverCreate from "./pages/SenderReceiver/ReceiverCreate";
import VisaTypeList from "./pages/Visa/VisaTypeList";
import VisaTypeCreate from "./pages/Visa/VisaTypeCreate";


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
        <Route path="senderview" element={<SenderView/>} />
        <Route path="sendercreate" element={<SenderCreate/>} />
        <Route path="receiverview" element={<ReceiverView/>} />
        <Route path="receivercreate" element={<ReceiverCreate/>} />
        <Route path="visatypelist" element={<VisaTypeList/>} />
        <Route path="visatypecreate" element={<VisaTypeCreate/>} />

        </Route>

        {/* Staff Panel outside Layout */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
