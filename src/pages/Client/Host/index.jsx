import React from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";
const Host = () => {
  const navigate = useNavigate();
  return (
    <>
      <section className="host-hero auto-style-93">
        <div className="host-hero-bg"></div>
        <div className="host-hero-overlay"></div>
        <div className="host-hero-box">
          <h1>
            <span>Cho Thuê Xe</span> Trên MYOTO
            <br />
            Để Gia Tăng Thu Nhập
            <br />
            Đến 10tr/Tháng!
          </h1>
          <p>
            MYOTO không thu phí khi bạn đăng xe. Bạn chỉ chia sẻ phí dịch vụ với
            MYOTO khi có giao dịch cho thuê thành công.
          </p>
          <p className="hotline">
            <i className="bi bi-telephone-fill"></i> Hotline:{" "}
            <a href="tel:19009217">1900 9217</a> (7AM - 10PM) &nbsp;|&nbsp; Hoặc
            để lại tin nhắn qua Fanpage
          </p>
          <button
            className="host-hero-cta"
            onClick={() => navigate("/register")}
          >
            <i className="bi bi-person-plus-fill"></i> Đăng ký ngay
          </button>
        </div>
      </section>

      <section className="why">
        <div className="section-title">
          <h2>Tại sao bạn nên cho thuê xe trên MYOTO?</h2>
        </div>
        <div className="why-grid">
          <div className="why-card">
            <div className="why-icon">
              <i className="bi bi-cash-coin"></i>
            </div>
            <div className="why-text">
              <h3>Thu nhập</h3>
              <p>
                Gia tăng thu nhập từ <strong>5-10 triệu/tháng</strong> chỉ với
                chiếc xe đang nhàn rỗi của bạn.
              </p>
            </div>
          </div>
          <div className="why-card">
            <div className="why-icon">
              <i className="bi bi-lightning-charge-fill"></i>
            </div>
            <div className="why-text">
              <h3>Nhanh chóng</h3>
              <p>
                Thủ tục đăng ký cho thuê <strong>ONLINE</strong> nhanh chóng
                trong <strong>10 phút</strong>.
              </p>
            </div>
          </div>
          <div className="why-card">
            <div className="why-icon">
              <i className="bi bi-calendar2-check-fill"></i>
            </div>
            <div className="why-text">
              <h3>Chủ động</h3>
              <p>
                Toàn quyền quyết định <strong>giá & thời gian</strong> cho thuê
                theo lịch của bạn.
              </p>
            </div>
          </div>
          <div className="why-card">
            <div className="why-icon">
              <i className="bi bi-shield-check-fill"></i>
            </div>
            <div className="why-text">
              <h3>Bảo hiểm</h3>
              <p>
                Hỗ trợ bảo hiểm mất cắp xe nguyên chiếc từ{" "}
                <strong>MIC & DBV (VNI)</strong>.
              </p>
            </div>
          </div>
          <div className="why-card">
            <div className="why-icon">
              <i className="bi bi-geo-alt-fill"></i>
            </div>
            <div className="why-text">
              <h3>GPS</h3>
              <p>
                Hỗ trợ cài đặt GPS với <strong>giá gốc</strong> để quản lí xe an
                toàn và yên tâm hơn.
              </p>
            </div>
          </div>
          <div className="why-card">
            <div className="why-icon">
              <i className="bi bi-headset"></i>
            </div>
            <div className="why-text">
              <h3>Chăm sóc đối tác</h3>
              <p>
                Đội ngũ MYOTO tư vấn chặt chẽ{" "}
                <strong>QUY TRÌNH & KINH NGHIỆM</strong> cho thuê chặt chẽ và an
                toàn.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="income">
        <div className="section-title">
          <h2>Thu nhập ước tính của chủ xe</h2>
          <p>
            MYOTO dựa trên dữ liệu thu nhập bình quân 6 tháng gần nhất của các
            chủ xe đang kinh doanh hiệu quả trên hệ thống và thống kê theo từng
            khu vực.
          </p>
        </div>
        <table className="income-table">
          <thead>
            <tr>
              <th>Khu vực</th>
              <th>
                Thu nhập /tháng
                <br />
                <small className="auto-style-94">
                  (Sau khi trừ phí dịch vụ)
                </small>
              </th>
              <th>Số ngày cho thuê/tháng</th>
            </tr>
          </thead>
          <tbody>
            <tr className="income-highlight">
              <td>TP.HCM (khu vực trung tâm)</td>
              <td>Từ 5 - 10 triệu</td>
              <td>Từ 6 - 12 ngày</td>
            </tr>
            <tr>
              <td>TP.HCM (khu vực ngoại thành)</td>
              <td>3 - 6 triệu</td>
              <td>4 - 8 ngày</td>
            </tr>
            <tr className="income-highlight">
              <td>Hà Nội (khu vực trung tâm)</td>
              <td>5 - 8 triệu</td>
              <td>6 - 10 ngày</td>
            </tr>
            <tr>
              <td>Hà Nội (khu vực ngoại thành)</td>
              <td>3 - 6 triệu</td>
              <td>4 - 8 ngày</td>
            </tr>
            <tr>
              <td>Đà Nẵng</td>
              <td>3 - 6 triệu</td>
              <td>4 - 8 ngày</td>
            </tr>
            <tr>
              <td>Bình Dương</td>
              <td>3 - 6 triệu</td>
              <td>4 - 8 ngày</td>
            </tr>
            <tr>
              <td>Biên Hòa</td>
              <td>3 - 6 triệu</td>
              <td>4 - 8 ngày</td>
            </tr>
            <tr>
              <td>Đà Lạt</td>
              <td>3 - 6 triệu</td>
              <td>4 - 8 ngày</td>
            </tr>
            <tr>
              <td>Hải Phòng</td>
              <td>3 - 6 triệu</td>
              <td>4 - 8 ngày</td>
            </tr>
            <tr>
              <td>Nha Trang</td>
              <td>2 - 5 triệu</td>
              <td>3 - 6 ngày</td>
            </tr>
            <tr>
              <td>Quy Nhơn</td>
              <td>2 - 5 triệu</td>
              <td>3 - 6 ngày</td>
            </tr>
            <tr>
              <td>TP khác</td>
              <td>2 - 5 triệu</td>
              <td>3 - 6 ngày</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="3">
                * Lưu ý: Thu nhập của chủ xe khi cho thuê trên MYOTO còn tùy
                thuộc vào nhiều yếu tố, bao gồm thời gian xe sẵn sàng cho thuê
                mỗi tháng, mức giá cho thuê và nhu cầu thuê xe ở khu vực của
                bạn.
              </td>
            </tr>
          </tfoot>
        </table>
      </section>

      <section className="host-steps">
        <div className="section-title">
          <h2>Ba bước đăng ký xe trên MYOTO</h2>
        </div>
        <div className="host-steps-grid">
          <div className="host-step">
            <div className="step-badge">1.</div>
            <i className="bi bi-phone-fill host-step-icon"></i>
            <h3>Tải app và điền thông tin</h3>
            <p>
              Cách 1: Tải app MYOTO, vào mục Quản lý cho thuê và đăng ký xe theo
              hướng dẫn.
              <br />
              <br />
              Cách 2: Điền thông tin theo mẫu để MYOTO hỗ trợ tư vấn quy trình
              đăng ký.{" "}
              <span
                onClick={() => navigate("/register")}
                className="auto-style-95"
              >
                (Mẫu đăng ký)
              </span>
            </p>
          </div>
          <div className="host-step">
            <div className="step-badge">2.</div>
            <i className="bi bi-check-circle-fill host-step-icon"></i>
            <h3>Xác nhận thông tin</h3>
            <p>
              Nhân viên MYOTO liên hệ chủ xe tư vấn thủ tục & quy trình cho thuê
              xe trong vòng 1 ngày sau khi nhận được thông tin.
            </p>
          </div>
          <div className="host-step">
            <div className="step-badge">3.</div>
            <i className="bi bi-car-front-fill host-step-icon"></i>
            <h3>Duyệt xe</h3>
            <p>
              Bắt đầu cho thuê xe trên MYOTO sau khi nhận thông báo xe đã được
              phê duyệt. Chào mừng bạn gia nhập cộng đồng chủ xe MYOTO!
            </p>
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="final-cta-bg"></div>
        <div className="final-cta-overlay"></div>
        <div className="final-cta-content">
          <h2>Trở thành đối tác chủ xe của MYOTO</h2>
          <p>
            Cho thuê xe trên MYOTO để gia tăng thu nhập hàng tháng và gặp gỡ
            nhiều bạn bè mới!
          </p>
          <button
            className="final-cta-btn"
            onClick={() => navigate("/register")}
          >
            <i className="bi bi-person-plus-fill"></i> Đăng ký ngay
          </button>
        </div>
      </section>
    </>
  );
};
export default Host;
