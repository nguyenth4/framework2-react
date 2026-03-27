import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const About = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-bg"></div>
        <div className="about-hero-overlay"></div>
        <div className="about-hero-content">
          <h1>
            Hành Trình Của <span>MYOTO</span>
          </h1>
          <p>
            Nền tảng chia sẻ ô tô trực tuyến lớn nhất Việt Nam, kết nối hàng
            ngàn chủ xe và khách hàng có nhu cầu thuê xe trên toàn quốc.
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="about-intro">
        <div className="intro-grid">
          <div className="intro-text">
            <h2
              className="section-title"
              style={{ textAlign: "left", marginBottom: "24px" }}
            >
              Về Chúng Tôi
            </h2>
            <p>
              Được thành lập với sứ mệnh mang lại sự tiện lợi và an toàn cho mọi
              chuyến đi, <strong>MYOTO</strong> là ứng dụng tiên phong trong
              việc cung cấp giải pháp thuê xe tự lái và có tài xế đa dạng.
            </p>
            <p>
              Chúng tôi hiểu rằng một chuyến đi hoàn hảo bắt đầu từ một chiếc xe
              ưng ý. Do đó, MYOTO luôn nỗ lực mở rộng mạng lưới, nâng cao chất
              lượng dịch vụ và đưa ra những chính sách hỗ trợ tốt nhất cho cả
              Chủ xe lẫn Khách thuê.
            </p>
            <ul className="intro-list">
              <li>
                <i className="bi bi-check-circle-fill"></i> Nhanh chóng & Tiện
                lợi
              </li>
              <li>
                <i className="bi bi-check-circle-fill"></i> Minh bạch trong mọi
                chi phí
              </li>
              <li>
                <i className="bi bi-check-circle-fill"></i> Dịch vụ hỗ trợ khách
                hàng 24/7
              </li>
            </ul>
          </div>
          <div className="intro-image-wrapper">
            <img
              src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80"
              alt="Về MYOTO"
              className="intro-img"
            />
            <div className="intro-stats-box">
              <div className="stat-item">
                <div className="stat-num">10.000+</div>
                <div className="stat-label">Xe Đang Hoạt Động</div>
              </div>
              <div className="stat-item">
                <div className="stat-num">100.000+</div>
                <div className="stat-label">Khách Hàng Tin Dùng</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="core-values">
        <div className="section-title">
          <h2>Giá Trị Cốt Lõi</h2>
          <p>Những nguyên tắc làm kim chỉ nam cho mọi hoạt động của MYOTO</p>
        </div>
        <div className="values-grid">
          <div className="value-card">
            <div className="value-icon">
              <i className="bi bi-shield-check"></i>
            </div>
            <h3>An Toàn</h3>
            <p>
              Tất cả các chuyến đi trên MYOTO đều được hỗ trợ gói bảo hiểm vật
              chất và thân vỏ, giúp bạn hoàn toàn an tâm.
            </p>
          </div>
          <div className="value-card">
            <div className="value-icon">
              <i className="bi bi-phone"></i>
            </div>
            <h3>Tiện Lợi</h3>
            <p>
              Ứng dụng công nghệ hiện đại, đặt xe chỉ với vài thao tác vuốt
              chạm. Nhận xe linh hoạt theo nhu cầu.
            </p>
          </div>
          <div className="value-card">
            <div className="value-icon">
              <i className="bi bi-people"></i>
            </div>
            <h3>Cộng Đồng</h3>
            <p>
              Xây dựng cộng đồng chia sẻ xe văn minh, thân thiện. Đánh giá hai
              chiều giữa chủ xe và khách thuê.
            </p>
          </div>
          <div className="value-card">
            <div className="value-icon">
              <i className="bi bi-cash-coin"></i>
            </div>
            <h3>Tiết Kiệm</h3>
            <p>
              Mức giá hợp lý, cạnh tranh. Nhiều mã giảm giá hấp dẫn vào dịp cuối
              tuần và lễ tết.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <div className="about-cta-content">
          <h2>Bắt Đầu Hành Trình Ngay Hôm Nay!</h2>
          <p>
            Dù bạn muốn thuê xe đi du lịch hay đăng tải xe để kiếm thêm thu
            nhập, MYOTO đều sẵn sàng đồng hành cùng bạn.
          </p>
          <div className="cta-actions">
            <Link to="/cars" className="btn-green">
              <i className="bi bi-search"></i> Tìm Xe Ngay
            </Link>
            <Link to="/host" className="btn-outline-white">
              <i className="bi bi-car-front-fill"></i> Đăng Ký Chủ Xe
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
