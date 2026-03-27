import React from "react";
import { Link, useLocation } from "react-router-dom";

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
  const path = location.pathname;

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
        <Link
          to="/register"
          className="btn-outline"
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
        <button className="btn-green">Đăng nhập</button>
      </div>
    </nav>
  );
};

export default Header;
