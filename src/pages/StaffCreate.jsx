import React from "react";
import "./Styles.css";

const StaffCreate = () => {
  return (
    <div className="form-container">
      <h2>New Staff Registration</h2>
      <form className="staff-form">
        
        <div className="form-row">
          <div className="form-group">
            <label>Staff Name</label>
            <input type="text" placeholder="Enter Full Name" />
          </div>
          <div className="form-group">
            <label>Upload Photo</label>
            <input type="file" />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Staff Password</label>
            <input type="password" placeholder="Enter Password" />
          </div>
          <div className="form-group">
            <label>Staff ID</label>
            <input type="text" value="AR0219" disabled />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Staff Branch</label>
            <select>
              <option value="">Select Branch</option>
              <option value="Dubai">Dubai</option>
              <option value="Abu Dhabi">Abu Dhabi</option>
              <option value="Sharjah">Sharjah</option>
            </select>
          </div>
          <div className="form-group">
            <label>Staff Email</label>
            <input type="email" placeholder="Enter Email" />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Staff Status</label>
            <select>
              <option value="">Select Status</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>
          <div className="form-group">
            <label>Staff Role</label>
            <select>
              <option value="">Select Role</option>
              <option value="Super Admin">Super Admin</option>
              <option value="Admin">Admin</option>
              <option value="Manager">Manager</option>
              <option value="Staff">Staff</option>
            </select>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Visa Expiry Date</label>
            <input type="date" />
          </div>
          <div className="form-group">
            <label>Date of Appointment</label>
            <input type="date" />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Document Type</label>
            <select>
              <option value="">Select</option>
              <option value="Passport">Passport</option>
              <option value="ID Card">ID Card</option>
              <option value="License">License</option>
            </select>
          </div>
          <div className="form-group">
            <label>Type of Visa</label>
            <select>
              <option value="">Select</option>
              <option value="Employment">Employment</option>
              <option value="Visit">Visit</option>
              <option value="Residence">Residence</option>
            </select>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Upload Document</label>
            <input type="file" />
          </div>
          <div className="form-group">
            <label>Visa Status</label>
            <select>
              <option value="Active">Active</option>
              <option value="Expired">Expired</option>
            </select>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group full-width">
            <label>Document ID</label>
            <input type="text" placeholder="Enter Document ID" />
          </div>
        </div>

        <div className="form-actions">
          <button type="button" className="btn btn-submit">Submit</button>
          <button type="button" className="btn btn-cancel">Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default StaffCreate;
