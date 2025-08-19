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
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { BiSolidDashboard } from "react-icons/bi";
import { Link } from "react-router-dom";   // ⬅️ import Link
import "./layout.css";

export default function Sidebar({ collapsed, setCollapsed }) {
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  const menuItems = [
    {
      key: "dashboard",
      icon: <BiSolidDashboard />,
      label: "Dashboard",
      path: "/dashboard",  // ⬅️ add path
    },
    {
      key: "branch",
      icon: <FaBuilding />,
      label: "Branch Management",
      submenus: [
        { label: "All Branches", path: "/branches" },
        { label: "Add New Branch", path: "/branches/new" },
        { label: "Branch Performance Report", path: "/branches/report" }
      ]
    },
    {
      key: "hr",
      icon: <FaUsers />,
      label: "HR & Staff",
      submenus: [
        { label: "Staff List", path: "/StaffPanel" }, // ⬅️ Staff Panel route
        { label: "Attendance & Leave", path: "/attendance" },
        { label: "Payroll & Salaries", path: "/payroll" },
        { label: "Performance Review", path: "/performance" }
      ]
    },
    {
      key: "fleet",
      icon: <FaTruck />,
      label: "Fleet & Drivers",
      submenus: [
        { label: "Driver List", path: "/drivers" },
        { label: "Assign Driver to Shipment", path: "/drivers/assign" },
        { label: "Vehicle Management", path: "/vehicles" },
        { label: "Maintenance Schedule", path: "/maintenance" }
      ]
    },
    {
      key: "shipments",
      icon: <FaBox />,
      label: "Shipments",
      submenus: [
        { label: "Create Shipment", path: "/shipments/new" },
        { label: "All Shipments", path: "/shipments" },
        { label: "Pending / In Transit / Delivered", path: "/shipments/status" },
        { label: "Shipment Tracking", path: "/shipments/tracking" }
      ]
    },
    {
      key: "agency",
      icon: <FaUser />,
      label: "Agency & Partners",
      submenus: [
        { label: "Partner Agencies", path: "/agencies" },
        { label: "Contracts & Agreements", path: "/agencies/contracts" },
        { label: "Agency Performance", path: "/agencies/performance" }
      ]
    },
    {
      key: "sender",
      icon: <FaUser />,
      label: "Sender / Receiver",
      submenus: [
        { label: "Customer Database", path: "/customers" },
        { label: "KYC & Verification", path: "/customers/kyc" },
        { label: "Customer History", path: "/customers/history" }
      ]
    },
    {
      key: "finance",
      icon: <FaMoneyBill />,
      label: "Finance & Accounts",
      submenus: [
        { label: "Invoices & Payments", path: "/finance/invoices" },
        { label: "Expenses & Purchase Orders", path: "/finance/expenses" },
        { label: "Outstanding Payments", path: "/finance/outstanding" },
        { label: "Financial Reports", path: "/finance/reports" }
      ]
    },
    {
      key: "reports",
      icon: <FaChartBar />,
      label: "Reports & Analytics",
      submenus: [
        { label: "Shipment Reports", path: "/reports/shipments" },
        { label: "Revenue & Expense Reports", path: "/reports/revenue" },
        { label: "Delivery Performance", path: "/reports/performance" },
        { label: "Branch-wise Analysis", path: "/reports/branch" }
      ]
    },
    {
      key: "settings",
      icon: <FaCog />,
      label: "System Settings",
      submenus: [
        { label: "User Roles & Permissions", path: "/settings/roles" },
        { label: "API Integrations", path: "/settings/api" },
        { label: "System Preferences", path: "/settings/preferences" },
        { label: "Notification Settings", path: "/settings/notifications" }
      ]
    }
  ];

  return (
    <aside className={`sidebar${collapsed ? " collapsed" : ""}`}>
      {/* Logo Section */}
      <div
        className="logo-section"
        onClick={() => {
          if (collapsed) setCollapsed(false);
        }}
        style={{
          cursor: collapsed ? "pointer" : "default",
          display: "flex",
          alignItems: "center",
          padding: "16px"
        }}
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

        {!collapsed && (
          <button
            className="toggle-btn"
            onClick={() => setCollapsed(true)}
            aria-label="Collapse menu"
            style={{
              marginLeft: "auto",
              background: "none",
              border: "none",
              cursor: "pointer",
              display: "flex",
              alignItems: "center"
            }}
          >
            <MdKeyboardDoubleArrowLeft />
          </button>
        )}
      </div>

      {/* Menu List */}
      <ul className="menu-list" style={{ padding: 0, margin: 0 }}>
        {menuItems.map(({ key, icon, label, path, submenus }) => (
          <li key={key} style={{ listStyle: "none" }}>
            <div
              className="menu-header"
              onClick={() => submenus && toggleMenu(key)}
              style={{
                cursor: submenus ? "pointer" : "default",
                display: "flex",
                alignItems: "center",
                padding: "12px 20px"
              }}
            >
              <span className="menu-icon" style={{ minWidth: 24 }}>
                {icon}
              </span>

              {!collapsed && (
                path ? (
                  <Link to={path} style={{ flex: 1, marginLeft: "14px", textDecoration: "none", color: "inherit" }}>
                    {label}
                  </Link>
                ) : (
                  <span style={{ flex: 1, marginLeft: "14px" }}>{label}</span>
                )
              )}

              {!collapsed && submenus && (
                <span style={{ marginLeft: "auto" }}>
                  {openMenu === key ? "▲" : "▼"}
                </span>
              )}
            </div>

            {/* Submenu */}
            {submenus && openMenu === key && !collapsed && (
              <ul className="submenu" style={{ paddingLeft: 48 }}>
                {submenus.map((submenu) => (
                  <li
                    key={submenu.label}
                    className="submenu-item"
                    style={{ padding: "8px 0", fontSize: "14px" }}
                  >
                    <Link to={submenu.path} style={{ textDecoration: "none", color: "inherit" }}>
                      {submenu.label}
                    </Link>
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
