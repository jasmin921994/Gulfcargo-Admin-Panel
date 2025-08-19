import React, { useState } from "react";
import { FiMoreVertical } from "react-icons/fi";
import "./Styles.css";

const StaffPanel = () => {
  const [filter, setFilter] = useState({ name: "", email: "", status: "" });
  const [staff, setStaff] = useState([
    { id: 1, name: "Haile", email: "haileclassice@gmail.com", password: "123456", role: "Super Admin", status: "Active" },
    { id: 2, name: "John", email: "john@example.com", password: "abcdef", role: "Admin", status: "Inactive" },
    { id: 3, name: "Sarah", email: "sarah@example.com", password: "pass@123", role: "Manager", status: "Active" },
  ]);

  const [dropdownId, setDropdownId] = useState(null);

  // Filter logic
  const filteredStaff = staff.filter((user) => {
    return (
      (filter.name === "" || user.name.toLowerCase().includes(filter.name.toLowerCase())) &&
      (filter.email === "" || user.email.toLowerCase().includes(filter.email.toLowerCase())) &&
      (filter.status === "" || user.status === filter.status)
    );
  });

  const handleClear = () => {
    setFilter({ name: "", email: "", status: "" });
  };

  return (
    <div className="staff-panel">
      <h2>Staff Panel</h2>

      {/* Filter Section */}
      <div className="filter-section">
        <input
          type="text"
          placeholder="Filter by Name"
          value={filter.name}
          onChange={(e) => setFilter({ ...filter, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Filter by Email"
          value={filter.email}
          onChange={(e) => setFilter({ ...filter, email: e.target.value })}
        />
        <select
          value={filter.status}
          onChange={(e) => setFilter({ ...filter, status: e.target.value })}
        >
          <option value="">All Status</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
        <button onClick={handleClear} className="clear-btn">Clear</button>
      </div>

      {/* Staff Table */}
      <table className="staff-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Details</th>
            <th>Password</th>
            <th>Role</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredStaff.map((user, index) => (
            <tr key={user.id}>
              <td>{index + 1}</td>
              <td>
                <b>{user.name}</b> <br />
                <span>{user.email}</span>
              </td>
              <td>{user.password}</td>
              <td>{user.role}</td>
              <td>
                <span className={`status ${user.status.toLowerCase()}`}>
                  {user.status}
                </span>
              </td>
              <td className="actions">
                <div className="dropdown-wrapper">
                  <FiMoreVertical
                    className="menu-icon"
                    onClick={() =>
                      setDropdownId(dropdownId === user.id ? null : user.id)
                    }
                  />
                  {dropdownId === user.id && (
                    <div className="dropdown">
                      <button onClick={() => alert(`Editing ${user.name}`)}>Edit</button>
                      <button onClick={() => alert(`Deleting ${user.name}`)}>Delete</button>
                    </div>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StaffPanel;
