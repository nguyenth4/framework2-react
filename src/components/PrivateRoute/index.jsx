import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = ({ requiredRole }) => {
    // 1. Phác hoạ thẻ thông tin Token + Quyền ở ngăn Local Storage
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');

    // 2. Màng lọc Thép: Trốn vé / Chưa đăng nhập? => Sút thẳng về trang Login
    if (!token) {
        return <Navigate to="/login" replace />;
    }

    // 3. Màng lọc VIP: Cần quyền Admin nhưng vé lại là của Khách Lẻ? => Tiễn về đi xem xe (Trang chủ)
    if (requiredRole && role !== requiredRole) {
        return <Navigate to="/" replace />;
    }

    // Tất cả hợp rệ, xin mời ngài đi qua.
    return <Outlet />;
};

export default PrivateRoute;
