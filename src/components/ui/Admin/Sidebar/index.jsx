import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./index.css";

const Sidebar = () => {
  const { pathname } = useLocation();

  return (
    <div className="sidebar">
      <div className="sidebar-logo">MYOTO ADMIN</div>

      <ul className="sidebar-menu">
        <li className={pathname === "/admin" ? "active" : ""}>
          <Link to="/admin">
            <i className="bi bi-speedometer2"></i> Dashboard
          </Link>
        </li>

        <li className={pathname.includes("cars") ? "active" : ""}>
          <Link to="/admin/cars">
            <i className="bi bi-car-front"></i> Quản lý xe
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;