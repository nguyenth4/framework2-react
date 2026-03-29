import React from "react";
import "./index.css";

const Dashboard = () => {
  return (
    <div className="admin-content">
      {/* STATS */}
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-card__icon text-primary">
            <i className="bi bi-car-front-fill"></i>
          </div>
          <div className="stat-card__label">Tổng số xe</div>
          <div className="stat-card__val">120</div>
          <div className="stat-card__change up">
            <i className="bi bi-arrow-up"></i> +12 xe
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-card__icon text-success">
            <i className="bi bi-check-circle-fill"></i>
          </div>
          <div className="stat-card__label">Lượt thuê</div>
          <div className="stat-card__val">342</div>
          <div className="stat-card__change up">
            <i className="bi bi-arrow-up"></i> +9%
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-card__icon text-info">
            <i className="bi bi-people-fill"></i>
          </div>
          <div className="stat-card__label">Người dùng</div>
          <div className="stat-card__val">1,284</div>
          <div className="stat-card__change up">
            <i className="bi bi-arrow-up"></i> +24%
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-card__icon text-warning">
            <i className="bi bi-clock-fill"></i>
          </div>
          <div className="stat-card__label">Xe đang thuê</div>
          <div className="stat-card__val">80</div>
          <div className="stat-card__change down">
            <i className="bi bi-arrow-down"></i> -3 xe
          </div>
        </div>
      </div>

      {/* CHART */}
      <div className="box">
        <div className="box__head">
          <div className="box__title">Lượt thuê theo tháng</div>
        </div>
        <div className="box__body">
          <div className="chart-bars">
            {[20, 35, 50, 65, 80, 95].map((h, i) => (
              <div className="chart-bar" key={i}>
                <div
                  className="chart-bar__bar"
                  style={{ height: h }}
                ></div>
                <div className="chart-bar__label">T{i + 1}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ACTIVITY */}
      <div className="box mt-4">
        <div className="box__head">
          <div className="box__title">Hoạt động gần đây</div>
        </div>
        <div className="box__body">
          <div className="activity-item">
            <div className="activity-icon bg-success">
              <i className="bi bi-check"></i>
            </div>
            <div>
              <div className="activity-text">
                Xe BMW X6 đã được thuê thành công
              </div>
              <div className="activity-time">5 phút trước</div>
            </div>
          </div>

          <div className="activity-item">
            <div className="activity-icon bg-primary">
              <i className="bi bi-person-plus"></i>
            </div>
            <div>
              <div className="activity-text">
                Người dùng mới vừa đăng ký
              </div>
              <div className="activity-time">10 phút trước</div>
            </div>
          </div>

          <div className="activity-item">
            <div className="activity-icon bg-warning">
              <i className="bi bi-clock"></i>
            </div>
            <div>
              <div className="activity-text">
                Đơn thuê xe đang chờ duyệt
              </div>
              <div className="activity-time">20 phút trước</div>
            </div>
          </div>

          <div className="activity-item">
            <div className="activity-icon bg-danger">
              <i className="bi bi-x-circle"></i>
            </div>
            <div>
              <div className="activity-text">
                Một đơn thuê xe đã bị hủy
              </div>
              <div className="activity-time">1 giờ trước</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;