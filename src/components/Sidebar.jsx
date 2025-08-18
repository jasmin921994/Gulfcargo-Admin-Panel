import React, { useState } from "react";
import {
  FaUsers,
  FaTruck,
  FaBox,
  FaBuilding,
  FaUser,
  FaMoneyBill,
  FaChartBar,
  FaCog
} from "react-icons/fa";
import { MdArrowForwardIos } from "react-icons/md";
import "./layout.css";

export default function Sidebar({ collapsed, setCollapsed }) {
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  const menuItems = [
    {
      key: "branch",
      icon: <FaBuilding />,
      label: "Branch Management",
      submenus: ["All Branches", "Add New Branch", "Branch Performance Report"]
    },
    {
      key: "hr",
      icon: <FaUsers />,
      label: "HR & Staff",
      submenus: [
        "Staff List",
        "Attendance & Leave",
        "Payroll & Salaries",
        "Performance Review"
      ]
    },
    {
      key: "fleet",
      icon: <FaTruck />,
      label: "Fleet & Drivers",
      submenus: [
        "Driver List",
        "Assign Driver to Shipment",
        "Vehicle Management",
        "Maintenance Schedule"
      ]
    },
    {
      key: "shipments",
      icon: <FaBox />,
      label: "Shipments",
      submenus: [
        "Create Shipment",
        "All Shipments",
        "Pending / In Transit / Delivered",
        "Shipment Tracking"
      ]
    },
    {
      key: "agency",
      icon: <FaUser />,
      label: "Agency & Partners",
      submenus: [
        "Partner Agencies",
        "Contracts & Agreements",
        "Agency Performance"
      ]
    },
    {
      key: "sender",
      icon: <FaUser />,
      label: "Sender / Receiver",
      submenus: [
        "Customer Database",
        "KYC & Verification",
        "Customer History"
      ]
    },
    {
      key: "finance",
      icon: <FaMoneyBill />,
      label: "Finance & Accounts",
      submenus: [
        "Invoices & Payments",
        "Expenses & Purchase Orders",
        "Outstanding Payments",
        "Financial Reports"
      ]
    },
    {
      key: "reports",
      icon: <FaChartBar />,
      label: "Reports & Analytics",
      submenus: [
        "Shipment Reports",
        "Revenue & Expense Reports",
        "Delivery Performance",
        "Branch-wise Analysis"
      ]
    },
    {
      key: "settings",
      icon: <FaCog />,
      label: "System Settings",
      submenus: [
        "User Roles & Permissions",
        "API Integrations",
        "System Preferences",
        "Notification Settings"
      ]
    }
  ];

  return (
    <aside className={`sidebar${collapsed ? " collapsed" : ""}`}>
      {/* Logo Section */}
      <div
        className="logo-section"
        onClick={() => {
          if (collapsed) setCollapsed(false); // expand when logo clicked in collapsed mode
        }}
        style={{ cursor: collapsed ? "pointer" : "default" }}
      >
        <img
          src={collapsed ? "/Logo-collapse.png" : "/Logo.png"}
          alt="Logo"
          style={{
            height: "40px",
            marginRight: collapsed ? 0 : "10px",
            transition: "all 0.3s ease"
          }}
        />

        {/* Arrow icon only in expanded mode */}
        {!collapsed && (
          <button
            className="toggle-btn"
            onClick={() => setCollapsed(true)}
            aria-label="Collapse menu"
          >
            <MdArrowForwardIos />
          </button>
        )}
      </div>

      {/* Menu List */}
      <ul className="menu-list">
        {menuItems.map(({ key, icon, label, submenus }) => (
          <li key={key}>
            <div
              className="menu-header"
              onClick={() => toggleMenu(key)}
              style={{ cursor: "pointer" }}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") toggleMenu(key);
              }}
            >
              <span className="menu-icon">{icon}</span>
              {!collapsed && <span>{label}</span>}
              {!collapsed && (
                <span style={{ marginLeft: "auto" }}>
                  {openMenu === key ? "▲" : "▼"}
                </span>
              )}
            </div>

            {/* Submenu */}
            {openMenu === key && !collapsed && (
              <ul className="submenu">
                {submenus.map((submenu) => (
                  <li key={submenu} className="submenu-item">
                    {submenu}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </aside>
  );
}
