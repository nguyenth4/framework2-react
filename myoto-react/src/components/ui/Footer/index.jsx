import React from "react";
import { Link } from "react-router-dom";

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

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer-top">
        <div>
          <Link
            to="/"
            className="logo footer-brand"
            style={{ marginBottom: "16px" }}
          >
            {LOGO_SVG} MYOTO
          </Link>
          <div className="footer-contact">
            <strong>1900 9217</strong>
            <br />
            Tổng đài hỗ trợ: 7AM - 10PM
            <br />
            <br />
            <strong>contact@MYOTO.vn</strong>
            <br />
            Gửi mail cho MYOTO
          </div>
          <div className="footer-social">
            <a className="social-btn" href="#/">
              <i className="bi bi-facebook"></i>
            </a>
            <a className="social-btn" href="#/">
              <i className="bi bi-tiktok"></i>
            </a>
            <a className="social-btn" href="#/">
              <i className="bi bi-chat-dots-fill"></i>
            </a>
          </div>
        </div>
        <div className="footer-col">
          <h4>Chính Sách</h4>
          <ul>
            <li>
              <a href="#/">Chính sách & quy định</a>
            </li>
            <li>
              <a href="#/">Quy chế hoạt động</a>
            </li>
            <li>
              <a href="#/">Chính sách bảo mật</a>
            </li>
            <li>
              <a href="#/">Giải quyết khiếu nại</a>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Tìm Hiểu Thêm</h4>
          <ul>
            <li>
              <a href="#/">Hướng dẫn chung</a>
            </li>
            <li>
              <a href="#/">Hướng dẫn đặt xe</a>
            </li>
            <li>
              <a href="#/">Hướng dẫn thanh toán</a>
            </li>
            <li>
              <a href="#/">Hỏi và trả lời</a>
            </li>
            <li>
              <Link to="/about">Về MYOTO</Link>
            </li>
            <li>
              <a href="#/">MYOTO Blog</a>
            </li>
            <li>
              <a href="#/">Tuyển dụng</a>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Đối Tác</h4>
          <ul>
            <li>
              <Link to="/host">Đăng ký chủ xe MYOTO</Link>
            </li>
            <li>
              <a href="#/">Đăng ký GPS MITRACK 4G</a>
            </li>
            <li>
              <a href="#/">Đăng ký cho thuê xe dài hạn MICARRO</a>
            </li>
          </ul>
        </div>
      </div>
      <hr className="footer-divider" />
      <div className="footer-bottom">
        <div className="footer-legal">
          © Công ty Cổ phần MYOTO Asia &nbsp;|&nbsp; Số GCNĐKKD: 0317307544
          &nbsp;|&nbsp; Ngày cấp: 24-05-22 &nbsp;|&nbsp; Nơi cấp: Sở Kế hoạch và
          Đầu tư TPHCM
        </div>
        <div className="payment-methods">
          <span>Phương thức thanh toán:</span>
          <span className="pay-icon pay-momo">MoMo</span>
          <span className="pay-icon pay-vnpay">VnPay</span>
          <span className="pay-icon">AioPay</span>
          <span className="pay-icon pay-visa">VISA</span>
          <span className="pay-icon pay-zalo">ZaloPay</span>
          <span
            className="pay-icon"
            style={{ background: "#e74c3c", color: "#fff" }}
          >
            Viettel
          </span>
        </div>
      </div>
      <hr className="footer-divider" />
      <div style={{ fontSize: "12px", color: "var(--gray)", lineHeight: 1.8 }}>
        Địa chỉ: Văn phòng 01, Tầng 09, Tòa nhà Pearl Plaza, Số 561A Điện Biên
        Phủ, Phường Thạnh Mỹ Tây, TP. Hồ Chí Minh &nbsp;|&nbsp; Tên TK: CT CP
        MYOTO ASIA &nbsp;|&nbsp; Số TK: 102-989-1989 &nbsp;|&nbsp; Ngân hàng
        Vietcombank - CN Tân Định
      </div>
    </footer>
  );
};

export default Footer;
