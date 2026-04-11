import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const LOGO_SVG = (
  <svg
    width="32"
    height="24"
    viewBox="0 0 40 32"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4 26 C4 26 12 6 20 6 C28 6 36 26 36 26"
      style={{
        stroke: "#2ecc71",
        strokeWidth: 4,
        fill: "none",
        strokeLinecap: "round",
      }}
    />
    <path
      d="M10 26 C10 26 15 14 20 14 C25 14 30 26 30 26"
      style={{
        stroke: "#2ecc71",
        strokeWidth: 4,
        fill: "none",
        strokeLinecap: "round",
      }}
    />
  </svg>
);

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const path = location.pathname;

  // Lấy token để kiểm tra trạng thái đăng nhập
  const token = localStorage.getItem("token");

  // Hàm xử lý đăng xuất
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/login"); // Đẩy về trang đăng nhập
  };

  return (
    <nav id="navbar">
      <Link to="/" className="logo">
        {LOGO_SVG} MYOTO
      </Link>
      <ul className="nav-links">
        <li>
          <Link to="/about" className={path === "/about" ? "nav-active" : ""}>
            Về MYOTO
          </Link>
        </li>
        <li>
          <Link to="/host" className={path === "/host" ? "nav-active" : ""}>
            Trở thành chủ xe
          </Link>
        </li>
      </ul>
      <div className="nav-btns">
        {token ? (
          /* NẾU ĐÃ LOGIN: Hiện nút Đăng xuất */
          <button
            onClick={handleLogout}
            className="btn-green"
            style={{
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              boxSizing: "border-box",
              border: "none",
              cursor: "pointer",
              background: "#ff4d4f", /* Màu đỏ mờ cảnh báo */
              color: "white"
            }}
          >
            Đăng xuất
          </button>
        ) : (
          /* NẾU CHƯA LOGIN: Hiện 2 nút Đăng nhập & Đăng ký */
          <>
            <Link
              to="/login"
              className="btn-green"
              style={{
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                boxSizing: "border-box",
              }}
            >
              Đăng nhập
            </Link>
            <Link
              to="/register"
              className="btn-green"
              style={{
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                boxSizing: "border-box",
              }}
            >
              Đăng ký
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Header;
