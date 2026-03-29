import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
const CarDetail = () => {
  return (
    <div className="detail-container">
      <div className="gallery-grid">
        <img
          src="https://images.unsplash.com/photo-1619767886558-efdc259b6e09?w=1200&q=80"
          alt="Car"
          className="main-img"
        />
        <div className="side-imgs">
          <div className="side-img-wrapper">
            <img
              src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=600&q=80"
              alt="Interior"
            />
            <div className="auto-style-47">Hoàn tiền đổ xăng dư...</div>
          </div>
          <div className="side-img-wrapper">
            <img
              src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=600&q=80"
              alt="Interior 2"
            />
          </div>
          <div className="side-img-wrapper">
            <img
              src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=600&q=80"
              alt="Exterior"
            />
            <button className="more-photos-btn">
              <i className="bi bi-images"></i> Xem tất cả ảnh
            </button>
          </div>
        </div>
      </div>

      <div className="content-grid">
        <div className="left-col">
          <div className="detail-panel">
            <div className="car-header">
              <h1 className="car-title">HYUNDAI I10 2022</h1>
              <div className="action-btns">
                <button className="icon-btn">
                  <i className="bi bi-share"></i>
                </button>
                <button className="icon-btn">
                  <i className="bi bi-heart"></i>
                </button>
              </div>
            </div>
            <div className="car-meta">
              <span>
                <i className="bi bi-star-fill"></i> 5.0
              </span>
              <span>
                <i className="bi bi-briefcase-fill auto-style-48"></i> 13 chuyến
              </span>
              <span>
                <i className="bi bi-geo-alt-fill"></i> Phường 8, Quận Gò Vấp
              </span>
            </div>
            <div className="auto-style-49">
              <span className="tag-green primary">
                <i className="bi bi-shield-check"></i> Miễn thế chấp
              </span>
            </div>

            <h3 className="section-heading">Đặc điểm</h3>
            <div className="specs-grid">
              <div className="spec-item">
                <i className="bi bi-diagram-3 spec-icon auto-style-50"></i>
                <div>
                  <div className="spec-label">Truyền động</div>
                  <div className="spec-value">Số tự động</div>
                </div>
              </div>
              <div className="spec-item">
                <i className="bi bi-people spec-icon auto-style-51"></i>
                <div>
                  <div className="spec-label">Số ghế</div>
                  <div className="spec-value">5 chỗ</div>
                </div>
              </div>
              <div className="spec-item">
                <i className="bi bi-droplet spec-icon auto-style-52"></i>
                <div>
                  <div className="spec-label">Nhiên liệu</div>
                  <div className="spec-value">Xăng</div>
                </div>
              </div>
              <div className="spec-item">
                <i className="bi bi-speedometer2 spec-icon auto-style-53"></i>
                <div>
                  <div className="spec-label">Tiêu hao</div>
                  <div className="spec-value">6L/100km</div>
                </div>
              </div>
            </div>
          </div>

          <div className="detail-panel">
            <h3 className="section-heading">Mô tả</h3>
            <div className="desc-text">
              - Ngoài các ưu đãi về giá MYOTO còn hỗ trợ thêm cho Quý Khách hàng
              các Chính sách như sau:
              <br />
              * Hoàn tiền đổ xăng dư.
              <br />
              * Miễn phí vượt dưới 1h.
              <br />
              * Miễn phí vượt dưới 10Km.
              <br />- Hyundai i10 là mẫu xe hatchback/sedan hạng A, nổi bật với
              thiết kế nhỏ gọn, trẻ trung, rất phù hợp di chuyển trong đô thị.
            </div>
            <span className="link-green">Xem thêm</span>
          </div>

          <div className="detail-panel">
            <h3 className="section-heading">Các tiện nghi khác</h3>
            <div className="amenities-grid">
              <div className="amenity-item">
                <i className="bi bi-bluetooth"></i> Bluetooth
              </div>
              <div className="amenity-item">
                <i className="bi bi-geo-alt"></i> Định vị GPS
              </div>
              <div className="amenity-item">
                <i className="bi bi-usb-drive"></i> Khe cắm USB
              </div>
              <div className="amenity-item">
                <i className="bi bi-ticket-detailed"></i> ETC
              </div>
            </div>
          </div>

          <div className="detail-panel">
            <h3 className="section-heading">
              Giấy tờ thuê xe{" "}
              <i className="bi bi-info-circle text-gray auto-style-54"></i>
            </h3>
            <div className="warning-box">
              <i className="bi bi-info-circle-fill"></i>
              <div>
                <div className="auto-style-55">Chọn 1 trong 2 hình thức</div>
                <div className="auto-style-56">
                  <i className="bi bi-person-vcard auto-style-57"></i> GPLX (đối
                  chiếu) & Passport (giữ lại)
                </div>
                <div className="auto-style-58">
                  <i className="bi bi-person-vcard auto-style-59"></i> GPLX (đối
                  chiếu) & CCCD (đối chiếu VNeID)
                </div>
              </div>
            </div>

            <h3 className="section-heading">
              Tài sản thế chấp{" "}
              <i className="bi bi-info-circle text-gray auto-style-60"></i>
            </h3>
            <div className="auto-style-61">
              Không yêu cầu khách thuê thế chấp Tiền mặt hoặc Xe máy
            </div>

            <h3 className="section-heading">Điều khoản</h3>
            <div className="desc-text auto-style-62">
              Quy định khác:
              <br />
              - Sử dụng xe đúng mục đích.
              <br />
              - Không sử dụng xe thuê vào mục đích phi pháp, trái pháp luật.
              <br />
              - Không sử dụng xe thuê để cầm cố, thế chấp.
              <br />- Không hút thuốc, nhả kẹo cao su, xả rác trong xe.
            </div>
            <span className="link-green">Xem thêm</span>
          </div>

          <div className="detail-panel">
            <h3 className="section-heading">Chính sách hủy chuyến</h3>
            <table className="policy-table">
              <thead>
                <tr>
                  <th>Thời Điểm Hủy Chuyến</th>
                  <th>Phí Hủy Chuyến</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Trong Vòng 1h Sau Giữ Chỗ</td>
                  <td>
                    <i className="bi bi-check-circle-fill status-ok"></i>
                    <br />
                    Miễn phí
                  </td>
                </tr>
                <tr>
                  <td>
                    Trước Chuyến Đi &gt; 7 Ngày
                    <br />
                    <span className="auto-style-63">(Sau 1h Giữ Chỗ)</span>
                  </td>
                  <td>
                    <i className="bi bi-check-circle-fill status-ok"></i>
                    <br />
                    10% giá trị chuyến đi
                  </td>
                </tr>
                <tr>
                  <td>
                    Trong Vòng 7 Ngày Trước Chuyến Đi
                    <br />
                    <span className="auto-style-64">(Sau 1h Giữ Chỗ)</span>
                  </td>
                  <td>
                    <i className="bi bi-x-circle-fill status-bad"></i>
                    <br />
                    40% giá trị chuyến đi
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="auto-style-65">
              * Chính sách hủy chuyến áp dụng chung cho cả khách thuê và chủ xe.
              <br />* Khách thuê không nhận xe sẽ mất phí hủy chuyến (40% giá
              trị chuyến đi).
            </div>
          </div>

          <div className="detail-panel">
            <h3 className="section-heading">Vị trí xe</h3>
            <div className="auto-style-66">
              <div className="auto-style-67">
                <i className="bi bi-geo-alt-fill text-gray"></i> Phường 8, Quận
                Gò Vấp
              </div>
              <span className="link-green auto-style-68">
                <i className="bi bi-map"></i> Xem bản đồ &gt;
              </span>
            </div>
            <div className="auto-style-69">
              Địa chỉ cụ thể sẽ được hiển thị sau khi thanh toán đặt chỗ
            </div>
          </div>

          <div className="detail-panel">
            <h3 className="section-heading">Chủ xe</h3>
            <div className="owner-panel">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&q=80"
                alt="Owner"
                className="owner-avatar"
              />
              <div className="owner-info">
                <h4>MYOTO TP Hồ Chí Minh</h4>
                <div className="auto-style-70">
                  <span>
                    <i className="bi bi-star-fill auto-style-71"></i> 5.0
                  </span>
                  <span>
                    <i className="bi bi-briefcase-fill"></i> 100+ chuyến
                  </span>
                </div>
              </div>
              <div className="owner-stats auto-style-72">
                <span>
                  Tỉ lệ phản hồi <strong>100%</strong>
                </span>
                <span>
                  Phản hồi trong <strong>5 phút</strong>
                </span>
                <span>
                  Tỉ lệ đồng ý <strong>100%</strong>
                </span>
              </div>
            </div>

            <div className="auto-style-73">
              <i className="bi bi-shield-check-fill auto-style-74"></i> Quản lý
              và vận hành bởi MYOTO Quang Trung - Hệ thống đối tác của MYOTO.
            </div>

            <div className="auto-style-75">
              <strong className="auto-style-76">
                <i className="bi bi-star-fill auto-style-77"></i> 5.0
              </strong>{" "}
              <span className="text-gray auto-style-78">· 12 đánh giá</span>
              <div className="review-card">
                <div className="review-header">
                  <div className="reviewer">
                    <img
                      src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&q=80"
                      alt="User"
                    />
                    <div>
                      <div className="rev-name">Nguyễn Ngân</div>
                      <div className="stars">
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                      </div>
                    </div>
                  </div>
                  <div className="rev-date">26/03/2026</div>
                </div>
              </div>
            </div>
            <div className="auto-style-79">
              <button className="icon-btn auto-style-80">Xem thêm</button>
            </div>
          </div>
        </div>

        <div className="right-col">
          <div className="insurance-box">
            <i className="bi bi-shield-check-fill ins-icon"></i>
            <div className="ins-info">
              <h4 className="auto-style-81">Bảo hiểm thuê xe</h4>
              <p>
                Chuyến đi có mua bảo hiểm. Khách thuê bồi thường tối đa
                2.000.000 VNĐ trong trường hợp có sự cố ngoài ý muốn.
              </p>
              <span className="link-green auto-style-82">Xem thêm &gt;</span>
            </div>
          </div>

          <div className="sidebar-panel">
            <div className="price-header">
              <div className="price-old">
                585K <span className="badge-discount">-20%</span>
              </div>
              <div className="price-current">
                <strong>485K</strong>/ngày
              </div>
            </div>

            <div className="date-pickers">
              <div className="date-box">
                <label>Nhận xe</label>
                <div className="date-value">
                  26/03/2026 <span>21:00</span>
                </div>
              </div>
              <div className="date-box">
                <label>Trả xe</label>
                <div className="date-value">
                  27/03/2026 <span>20:00</span>
                </div>
              </div>
            </div>

            <div className="location-picker">
              <h4 className="auto-style-83">Địa điểm giao nhận xe</h4>
              <label className="loc-option">
                <input type="radio" name="loc" defaultChecked />
                <div className="loc-text">
                  <strong>Tôi tự đến lấy xe</strong>
                  <span>Phường 8, Quận Gò Vấp</span>
                </div>
                <div className="loc-price">Miễn phí</div>
              </label>
              <div className="divider auto-style-84"></div>
              <label className="loc-option auto-style-85">
                <input type="radio" name="loc" disabled />
                <div className="loc-text">
                  <strong>Tôi muốn được giao xe tận nơi</strong>
                  <span>Rất tiếc, chủ xe không hỗ trợ giao xe tận nơi</span>
                </div>
              </label>
            </div>

            <div className="price-breakdown">
              <div className="price-row">
                <span>
                  Đơn giá thuê <i className="bi bi-info-circle"></i>
                </span>
                <strong>585.480 /ngày</strong>
              </div>
              <div className="price-row">
                <span>
                  Bảo hiểm thuê xe <i className="bi bi-info-circle"></i>
                </span>
                <strong>57.630 /ngày</strong>
              </div>
              <div className="divider"></div>
              <div className="auto-style-86">Bảo hiểm bổ sung</div>
              <label className="loc-option auto-style-87">
                <input type="checkbox" />
                <div className="loc-text">
                  <span className="auto-style-88">
                    Bảo hiểm người trên xe <i className="bi bi-info-circle"></i>
                  </span>
                </div>
              </label>
              <div className="divider"></div>
              <div className="price-row">
                <span>Tổng cộng</span>
                <strong>643.110 x 1 ngày</strong>
              </div>
              <div className="price-row green">
                <span>
                  <i className="bi bi-ticket-perforated-fill"></i> Chương trình
                  giảm giá
                </span>
                <strong>-100.000</strong>
              </div>
              <div className="price-row green auto-style-89">
                <span>
                  <i className="bi bi-tag-fill"></i> Mã khuyến mãi
                </span>
                <strong>&gt;</strong>
              </div>
              <div className="divider"></div>
              <div className="total-row">
                <span>Thành tiền</span>
                <span>543.110đ</span>
              </div>
            </div>

            <button className="btn-book">
              <i className="bi bi-lightning-charge-fill"></i> CHỌN THUÊ
            </button>
          </div>

          <div className="surcharge-box">
            <h4 className="auto-style-90">Phụ phí có thể phát sinh</h4>

            <div className="surcharge-item">
              <div className="sur-header">
                <strong>
                  <i className="bi bi-info-circle"></i> Phí vượt giới hạn
                </strong>
                <span className="sur-price">3.000đ /km</span>
              </div>
              <div className="sur-desc">
                Phụ phí phát sinh nếu lộ trình vượt quá 350km khi thuê xe 1 ngày
              </div>
            </div>

            <div className="surcharge-item">
              <div className="sur-header">
                <strong>
                  <i className="bi bi-info-circle"></i> Phí quá giờ
                </strong>
                <span className="sur-price">70.000đ /giờ</span>
              </div>
              <div className="sur-desc">
                Phụ phí phát sinh nếu hoàn trả xe trễ giờ. Trường hợp trễ quá 3
                giờ, phụ phí thêm 1 ngày thuê
              </div>
            </div>

            <div className="surcharge-item">
              <div className="sur-header">
                <strong>
                  <i className="bi bi-info-circle"></i> Phí vệ sinh
                </strong>
                <span className="sur-price">70.000đ</span>
              </div>
              <div className="sur-desc">
                Phụ phí phát sinh khi xe hoàn trả không đảm bảo vệ sinh (nhiều
                vết bẩn, bùn cát, sinh lầy...)
              </div>
            </div>

            <div className="auto-style-91">
              <span className="link-green auto-style-92">
                <i className="bi bi-flag"></i> Báo cáo xe này
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CarDetail;
