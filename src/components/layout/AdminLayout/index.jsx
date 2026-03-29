import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../ui/Admin/Sidebar";
import HeaderAdmin from "../../ui/Admin/HeaderAdmin";
import "./index.css";

const AdminLayout = () => {
  return (
    <div className="admin-layout">
      <Sidebar />
      <div className="admin-main">
        <HeaderAdmin />
        <div className="admin-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;