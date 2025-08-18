import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import TrackingBody from "./Tracking"; 
import "./layout.css";
import "@fontsource/montserrat"

const Layout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="app">
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
      <div className="main">
        <Header />
        <div className="content">
          {children ?? <TrackingBody />} {/* ✅ Show TrackingBody if no children */}
        </div>
      </div>
    </div>
  );
};

export default Layout;
