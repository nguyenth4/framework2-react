import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./index.css";
const CarList = () => {
  const navigate = useNavigate();
  return (
    <div className="page-container auto-style-34">
      <div className="filter-bar auto-style-35">
        <div className="filter-top auto-style-36">
          <Link to="/" className="btn-circle auto-style-37">
            <i className="bi bi-chevron-left"></i>
          </Link>
          <div className="location-title auto-style-38">
            <i className="bi bi-geo-alt"></i> TP. Hồ Chí Minh
          </div>
        </div>
        <div className="filter-bottom auto-style-39">
          <button className="btn-circle auto-style-40">
            <i className="bi bi-arrow-repeat"></i>
          </button>
          <div className="filter-options auto-style-41">
            <button className="btn-filter auto-style-42">
              <i className="bi bi-sort-down"></i> Sắp xếp
            </button>
            <button className="btn-filter auto-style-43">
              <i className="bi bi-diagram-3"></i> Truyền động
            </button>
            <button className="btn-filter auto-style-44">
              <i className="bi bi-car-front"></i> Loại xe
            </button>
            <button className="btn-filter auto-style-45">
              <i className="bi bi-globe"></i> Hãng xe
            </button>
          </div>
          <div className="auto-style-46"></div>
        </div>
      </div>

      <div className="list-grid">
        <div className="list-card" onClick={() => navigate("/cars/1")}>
          <div className="card-name">KIA MORNING</div>
          <div className="card-specs">
            <div className="spec-items">
              <span>
                <i className="bi bi-diagram-3"></i> Số tự động
              </span>
              <span>
                <i className="bi bi-droplet"></i> Xăng
              </span>
            </div>
            <div className="badge-stock">
              <i className="bi bi-car-front-fill"></i> 3 xe có sẵn
            </div>
          </div>
          <img
            src="https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=600&q=80"
            alt="Kia Morning"
            className="card-img"
          />
          <div className="card-bottom">
            <div className="price-info">
              <span className="price-old">8.000K</span>
              <span className="price-new">
                7.840K<small>/tháng</small>
              </span>
              <span className="promo-text">
                Ưu đãi <strong>2%</strong> khi thuê từ <strong>3 tháng</strong>{" "}
                trở lên
              </span>
            </div>
            <button className="btn-select">Chọn xe</button>
          </div>
        </div>

        <div className="list-card" onClick={() => navigate("/cars/2")}>
          <div className="card-name">VINFAST FADIL</div>
          <div className="card-specs">
            <div className="spec-items">
              <span>
                <i className="bi bi-diagram-3"></i> Số tự động
              </span>
              <span>
                <i className="bi bi-droplet"></i> Xăng
              </span>
            </div>
            <div className="badge-stock">
              <i className="bi bi-car-front-fill"></i> 2 xe có sẵn
            </div>
          </div>
          <img
            src="https://images.unsplash.com/photo-1616422285623-13ff0162193c?w=600&q=80"
            alt="Vinfast Fadil"
            className="card-img"
          />
          <div className="card-bottom">
            <div className="price-info">
              <span className="price-old">9.500K</span>
              <span className="price-new">
                9.310K<small>/tháng</small>
              </span>
              <span className="promo-text">
                Ưu đãi <strong>2%</strong> khi thuê từ <strong>3 tháng</strong>{" "}
                trở lên
              </span>
            </div>
            <button className="btn-select">Chọn xe</button>
          </div>
        </div>

        <div className="list-card" onClick={() => navigate("/cars/3")}>
          <div className="card-name">HONDA CITY</div>
          <div className="card-specs">
            <div className="spec-items">
              <span>
                <i className="bi bi-diagram-3"></i> Số tự động
              </span>
              <span>
                <i className="bi bi-droplet"></i> Xăng
              </span>
            </div>
            <div className="badge-stock">
              <i className="bi bi-car-front-fill"></i> 4 xe có sẵn
            </div>
          </div>
          <img
            src="https://images.unsplash.com/photo-1550355291-bbee04a92027?w=600&q=80"
            alt="Honda City"
            className="card-img"
          />
          <div className="card-bottom">
            <div className="price-info">
              <span className="price-old">10.000K</span>
              <span className="price-new">
                9.800K<small>/tháng</small>
              </span>
              <span className="promo-text">
                Ưu đãi <strong>2%</strong> khi thuê từ <strong>3 tháng</strong>{" "}
                trở lên
              </span>
            </div>
            <button className="btn-select">Chọn xe</button>
          </div>
        </div>

        <div className="list-card" onClick={() => navigate("/cars/4")}>
          <div className="card-name">TOYOTA VIOS</div>
          <div className="card-specs">
            <div className="spec-items">
              <span>
                <i className="bi bi-diagram-3"></i> Số tự động
              </span>
              <span>
                <i className="bi bi-droplet"></i> Xăng
              </span>
            </div>
            <div className="badge-stock">
              <i className="bi bi-car-front-fill"></i> 4 xe có sẵn
            </div>
          </div>
          <img
            src="https://images.unsplash.com/photo-1590362891945-12f40c7ffec6?w=600&q=80"
            alt="Toyota Vios"
            className="card-img"
          />
          <div className="card-bottom">
            <div className="price-info">
              <span className="price-old">10.000K</span>
              <span className="price-new">
                9.800K<small>/tháng</small>
              </span>
              <span className="promo-text">
                Ưu đãi <strong>2%</strong> khi thuê từ <strong>3 tháng</strong>{" "}
                trở lên
              </span>
            </div>
            <button className="btn-select">Chọn xe</button>
          </div>
        </div>

        <div className="list-card" onClick={() => navigate("/cars/5")}>
          <div className="card-name">MAZDA 2</div>
          <div className="card-specs">
            <div className="spec-items">
              <span>
                <i className="bi bi-diagram-3"></i> Số tự động
              </span>
              <span>
                <i className="bi bi-droplet"></i> Xăng
              </span>
            </div>
            <div className="badge-stock">
              <i className="bi bi-car-front-fill"></i> 4 xe có sẵn
            </div>
          </div>
          <img
            src="https://images.unsplash.com/photo-1621007947382-bb3c3994e3fd?w=600&q=80"
            alt="Mazda 2"
            className="card-img"
          />
          <div className="card-bottom">
            <div className="price-info">
              <span className="price-old">11.000K</span>
              <span className="price-new">
                10.780K<small>/tháng</small>
              </span>
              <span className="promo-text">
                Ưu đãi <strong>2%</strong> khi thuê từ <strong>1 tháng</strong>{" "}
                trở lên
              </span>
            </div>
            <button className="btn-select">Chọn xe</button>
          </div>
        </div>

        <div className="list-card" onClick={() => navigate("/cars/6")}>
          <div className="card-name">MITSUBISHI ATTRAGE</div>
          <div className="card-specs">
            <div className="spec-items">
              <span>
                <i className="bi bi-diagram-3"></i> Số tự động
              </span>
              <span>
                <i className="bi bi-droplet"></i> Xăng
              </span>
            </div>
            <div className="badge-stock">
              <i className="bi bi-car-front-fill"></i> 2 xe có sẵn
            </div>
          </div>
          <img
            src="https://images.unsplash.com/photo-1617469767053-d3b523a0b982?w=600&q=80"
            alt="Mitsubishi Attrage"
            className="card-img"
          />
          <div className="card-bottom">
            <div className="price-info">
              <span className="price-old">10.800K</span>
              <span className="price-new">
                10.584K<small>/tháng</small>
              </span>
              <span className="promo-text">
                Ưu đãi <strong>2%</strong> khi thuê từ <strong>3 tháng</strong>{" "}
                trở lên
              </span>
            </div>
            <button className="btn-select">Chọn xe</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CarList;
