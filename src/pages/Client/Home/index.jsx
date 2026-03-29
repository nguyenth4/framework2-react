import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./index.css";
const Home = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(1);
  return (
    <>
      <section className="hero auto-style-1">
        <div className="hero-bg"></div>
        <div className="hero-content">
          <h1>
            MYOTO - Cùng Bạn Trên
            <br />
            Mọi Hành Trình
          </h1>
          <p>
            Trải nghiệm sự khác biệt từ <span>hơn 10.000</span> xe gia đình đời
            mới khắp Việt Nam
          </p>
          <div className="search-wrapper">
            <div className="search-tabs">
              <button
                className={`tab-btn ${activeTab === 1 ? "active" : ""}`}
                onClick={() => setActiveTab(1)}
              >
                <i className="bi bi-car-front-fill"></i> Xe tự lái
              </button>
              <button
                className={`tab-btn ${activeTab === 2 ? "active" : ""}`}
                onClick={() => setActiveTab(2)}
              >
                <i className="bi bi-person-badge"></i> Xe có tài xế
              </button>
              <button
                className={`tab-btn ${activeTab === 3 ? "active" : ""}`}
                onClick={() => setActiveTab(3)}
              >
                <i className="bi bi-calendar-range"></i> Thuê xe dài hạn
              </button>
            </div>
            <div className="search-box">
              {activeTab === 1 && (
                <div className="tab-pane tab1-content active auto-style-2">
                  <div className="search-field">
                    <label>
                      <i className="bi bi-geo-alt-fill"></i> Địa điểm
                    </label>
                    <select>
                      <option>TP. Hồ Chí Minh</option>
                      <option>Hà Nội</option>
                      <option>Đà Nẵng</option>
                      <option>Cần Thơ</option>
                      <option>Bình Dương</option>
                    </select>
                  </div>
                  <div className="search-field">
                    <label>
                      <i className="bi bi-calendar3"></i> Thời gian thuê
                    </label>
                    <input
                      type="text"
                      value="21:00, 25/03/2026 — 20:00, 26/03/2026"
                      readOnly
                    />
                  </div>
                  <button
                    className="search-btn"
                    onClick={() => navigate("/cars")}
                  >
                    <i className="bi bi-search"></i> Tìm Xe
                  </button>
                </div>
              )}

              {activeTab === 2 && (
                <div className="tab-pane tab2-content active auto-style-3">
                  <div className="auto-style-4">Lộ trình</div>
                  <div className="radio-group auto-style-5">
                    <label className="radio-label auto-style-6">
                      <input
                        type="radio"
                        name="lotrinh"
                        defaultChecked
                        className="auto-style-7"
                      />
                      <span className="radio-custom auto-style-8"></span> Nội
                      thành
                    </label>
                    <label className="radio-label auto-style-9">
                      <input
                        type="radio"
                        name="lotrinh"
                        className="auto-style-10"
                      />
                      <span className="radio-custom auto-style-11"></span> Liên
                      tỉnh
                    </label>
                  </div>
                  <div className="help-text auto-style-12">
                    Di chuyển nội thành hoặc lân cận, lộ trình tự do.{" "}
                    <i className="bi bi-question-circle"></i>
                  </div>

                  <div className="auto-style-13">
                    <i className="bi bi-geo-alt auto-style-14"></i>
                    <input
                      type="text"
                      placeholder="Tôi muốn đón tại..."
                      className="auto-style-15"
                    />
                    <i className="bi bi-chevron-down auto-style-16"></i>
                  </div>

                  <div className="auto-style-17">
                    <div className="auto-style-18">
                      <div className="auto-style-19">Thời gian</div>
                      <div className="auto-style-20">
                        <i className="bi bi-calendar3 auto-style-21"></i>
                        <input
                          type="text"
                          value="08:00, 27/03/2026 - 10:00, 27/03/2026"
                          readOnly
                          className="auto-style-22"
                        />
                        <i className="bi bi-chevron-down auto-style-23"></i>
                      </div>
                    </div>
                    <button
                      className="search-btn auto-style-24"
                      onClick={() => navigate("/cars")}
                    >
                      Tìm Xe
                    </button>
                  </div>
                </div>
              )}

              {activeTab === 3 && (
                <div className="tab-pane tab3-content active auto-style-25">
                  <i className="bi bi-geo-alt auto-style-26"></i>
                  <div className="auto-style-27">
                    <span className="auto-style-28">
                      Địa điểm áp dụng hiện tại
                    </span>
                    <span className="auto-style-29">TP. Hồ Chí Minh</span>
                  </div>
                  <button
                    className="search-btn auto-style-30"
                    onClick={() => navigate("/cars")}
                  >
                    Tìm Xe
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="promos">
        <div className="section-title">
          <h2>Chương Trình Khuyến Mãi</h2>
          <p>Nhận nhiều ưu đãi hấp dẫn từ MYOTO</p>
        </div>
        <div className="promo-grid">
          <div className="promo-card pc1">
            <div className="promo-inner">
              <span className="promo-badge">
                <i className="bi bi-stars"></i> Lễ hội
              </span>
              <h3>
                Đặt Sớm Xe Tốt
                <br />
                Sẵn Sàng Đón Lễ
              </h3>
              <p>Ưu đãi đặc biệt mùa lễ hội</p>
            </div>
          </div>
          <div className="promo-card pc2">
            <div className="promo-inner">
              <span className="promo-badge">
                <i className="bi bi-tag-fill"></i> Mã TULAI
              </span>
              <h3>
                Chọn Xe Đúng Gu
                <br />
                Vi Vu Đúng Mood
              </h3>
              <p>Giảm ngay 8% — Áp dụng đến 31/03/2026</p>
            </div>
          </div>
          <div className="promo-card pc3">
            <div className="promo-inner">
              <span className="promo-badge">
                <i className="bi bi-clock-fill"></i> 48H giảm 10%
              </span>
              <h3>
                Cần Xe Đúng Lúc
                <br />
                Chọn Đúng Khung Giờ
              </h3>
              <p>Nhập mã 48H — Giảm ngay 10%</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cars">
        <div className="section-title">
          <h2>Xe Dành Cho Bạn</h2>
        </div>
        <div className="cars-grid">
          {[
            {
              id: 1,
              name: "TOYOTA INNOVA 2018",
              cp: "cp1",
              drop: "Giảm 15%",
              price: "789K/ngày",
              oldPrice: "999K",
              type: "Số sàn",
              places: "8 chỗ",
              fuel: "Xăng",
            },
            {
              id: 2,
              name: "BMW X6 2009",
              cp: "cp2",
              drop: "Giảm 9%",
              price: "1.459K/ngày",
              oldPrice: "1.579K",
              type: "Số tự động",
              places: "4 chỗ",
              fuel: "Xăng",
            },
            {
              id: 3,
              name: "MITSUBISHI XPANDER CROSS 2023",
              cp: "cp3",
              drop: "Giảm 11%",
              price: "1.161K/ngày",
              oldPrice: "1.281K",
              type: "Số tự động",
              places: "7 chỗ",
              fuel: "Xăng",
            },
            {
              id: 4,
              name: "VINFAST VF5 2025",
              cp: "cp4",
              drop: "Giảm 12%",
              hot: true,
              price: "876K/ngày",
              oldPrice: "976K",
              type: "Số tự động",
              places: "5 chỗ",
              fuel: "Điện",
            },
          ].map((car) => (
            <div
              className="car-card"
              key={car.id}
              onClick={() => navigate("/cars/" + car.id)}
            >
              <div className="car-img">
                <div className={`car-placeholder ${car.cp}`}>
                  <i className="bi bi-car-front"></i>
                </div>
                {car.hot && <span className="hot-badge">Hot</span>}
                <span className="discount-badge">{car.drop}</span>
              </div>
              <div className="car-tags">
                <span className="tag tag-green">
                  <i className="bi bi-shield-check"></i> Miễn thế chấp
                </span>
                <span className="tag tag-gray">
                  <i className="bi bi-geo-alt"></i> Giao tận nơi
                </span>
              </div>
              <div className="car-info">
                <div className="car-name">{car.name}</div>
                <div className="car-specs">
                  <span>
                    <i className="bi bi-gear"></i> {car.type}
                  </span>
                  <span>
                    <i className="bi bi-people"></i> {car.places}
                  </span>
                  <span>
                    <i
                      className={
                        car.fuel === "Điện"
                          ? "bi bi-lightning"
                          : "bi bi-droplet"
                      }
                    ></i>{" "}
                    {car.fuel}
                  </span>
                </div>
                <div className="car-location">
                  <i className="bi bi-geo-alt-fill"></i> Phường 17, Quận Bình
                  Thạnh
                </div>
                <div className="car-price-row">
                  <span className="rating">
                    <i className="bi bi-star-fill"></i> 4.5 · 3 chuyến
                  </span>
                  <div>
                    <span className="price-old">{car.oldPrice}</span>{" "}
                    <span className="price">{car.price}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-grid">
          <div className="cta-card cta-green">
            <div>
              <div className="cta-icon">
                <i className="bi bi-info-circle-fill"></i>
              </div>
              <h3>Bạn muốn biết thêm về MYOTO?</h3>
              <p>
                MYOTO kết nối khách hàng có nhu cầu thuê xe với hàng ngàn chủ xe
                trên toàn quốc. Hướng đến xây dựng cộng đồng người dùng ô tô văn
                minh & uy tín tại Việt Nam.
              </p>
              <div className="cta-btns">
                <Link to="/about" className="btn-green auto-style-31">
                  <i className="bi bi-arrow-right-circle"></i> Tìm hiểu thêm
                </Link>
              </div>
            </div>
            <div className="cta-img cta-img-1">
              <i className="bi bi-person-arms-up"></i>
            </div>
          </div>
          <div className="cta-card cta-blue">
            <div>
              <div className="cta-icon">
                <i className="bi bi-car-front-fill"></i>
              </div>
              <h3>Bạn muốn cho thuê xe?</h3>
              <p>
                Hơn 10.000 chủ xe đang cho thuê hiệu quả trên MYOTO. Đăng ký trở
                thành đối tác ngay hôm nay để gia tăng thu nhập hàng tháng.
              </p>
              <div className="cta-btns">
                <Link to="/host" className="btn-outline auto-style-32">
                  <i className="bi bi-book"></i> Tìm hiểu ngay
                </Link>
                <Link to="/host" className="btn-dark auto-style-33">
                  <i className="bi bi-plus-circle"></i> Đăng ký xe
                </Link>
              </div>
            </div>
            <div className="cta-img cta-img-2">
              <i className="bi bi-moon-stars-fill"></i>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Home;
