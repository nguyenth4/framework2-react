import React from "react";
import "./index.css";

const HeaderAdmin = () => {
  return (
    <div className="admin-header">
      <h4>Dashboard</h4>

      <div className="header-right">
        <i className="bi bi-bell"></i>
        <i className="bi bi-person-circle"></i>
      </div>
    </div>
  );
};

export default HeaderAdmin;