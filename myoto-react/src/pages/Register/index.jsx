import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./index.css";
const Register = () => {
  const [activeTab, setActiveTab] = useState("register");
  const [showPwLogin, setShowPwLogin] = useState(false);
  const [showPwReg1, setShowPwReg1] = useState(false);
  const [showPwReg2, setShowPwReg2] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const password = watch("password", "");
  const onRegister = (data) => {
    console.log("Register data:", data);
    alert("Đăng ký thành công!");
  };
  const onLogin = (e) => {
    e.preventDefault();
    alert("Đăng nhập...");
  };
  return (
    <div className="form-page auto-style-96">
      {/* Left Banner */}
      <div className="form-left auto-style-97">
        <div className="form-left-bg auto-style-98"></div>
        <div className="form-left-overlay auto-style-99"></div>
        <div className="form-left-content auto-style-100">
          <div className="form-left-logo auto-style-101">
            <svg
              width="32"
              height="24"
              viewBox="0 0 40 32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 26 C4 26 12 6 20 6 C28 6 36 26 36 26"
                className="auto-style-102"
              />
              <path
                d="M10 26 C10 26 15 14 20 14 C25 14 30 26 30 26"
                className="auto-style-103"
              />
            </svg>
            <span className="auto-style-104">MYOTO</span>
          </div>
          <h2 className="auto-style-105">
            Cùng bạn trên
            <br />
            <em className="auto-style-106">mọi hành trình</em>
          </h2>
          <p className="auto-style-107">
            Tham gia cộng đồng hơn 100.000 người dùng đang trải nghiệm dịch vụ
            thuê xe thông minh, an toàn và tiện lợi nhất Việt Nam.
          </p>
          <div className="form-left-stats auto-style-108">
            <div className="form-stat auto-style-109">
              <div className="form-stat-num auto-style-110">10.000+</div>
              <div className="form-stat-label auto-style-111">
                Xe đang hoạt động
              </div>
            </div>
            <div className="form-stat auto-style-112">
              <div className="form-stat-num auto-style-113">100.000+</div>
              <div className="form-stat-label auto-style-114">
                Khách hàng tin dùng
              </div>
            </div>
            <div className="form-stat auto-style-115">
              <div className="form-stat-num auto-style-116">
                4.95
                <i className="bi bi-star-fill auto-style-117"></i>
              </div>
              <div className="form-stat-label auto-style-118">
                Điểm đánh giá
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Form Area */}
      <div className="form-right auto-style-119">
        <div className="form-box auto-style-120">
          <div className="form-tabs auto-style-121">
            <button
              className={`form-tab ${activeTab === "login" ? "active" : ""}`}
              onClick={() => setActiveTab("login")}
              style={{
                flex: 1,
                background: activeTab === "login" ? "#fff" : "none",
                border: "none",
                padding: "11px",
                fontFamily: "inherit",
                fontSize: "14px",
                fontWeight: 700,
                cursor: "pointer",
                borderRadius: "10px",
                color: activeTab === "login" ? "var(--black)" : "var(--gray)",
                boxShadow:
                  activeTab === "login" ? "0 2px 8px rgba(0,0,0,0.1)" : "none",
              }}
            >
              Đăng nhập
            </button>
            <button
              className={`form-tab ${activeTab === "register" ? "active" : ""}`}
              onClick={() => setActiveTab("register")}
              style={{
                flex: 1,
                background: activeTab === "register" ? "#fff" : "none",
                border: "none",
                padding: "11px",
                fontFamily: "inherit",
                fontSize: "14px",
                fontWeight: 700,
                cursor: "pointer",
                borderRadius: "10px",
                color:
                  activeTab === "register" ? "var(--black)" : "var(--gray)",
                boxShadow:
                  activeTab === "register"
                    ? "0 2px 8px rgba(0,0,0,0.1)"
                    : "none",
              }}
            >
              Đăng ký
            </button>
          </div>

          {/* LOGIN */}
          {activeTab === "login" && (
            <div className="tab-content active" id="form-login">
              <h2 className="auto-style-122">Chào mừng trở lại!</h2>
              <p className="auto-style-123">
                Đăng nhập để tiếp tục hành trình cùng MYOTO
              </p>
              <form onSubmit={onLogin}>
                <div className="form-group auto-style-124">
                  <label className="auto-style-125">
                    <i className="bi bi-telephone-fill"></i> Số điện thoại
                  </label>
                  <div className="input-wrap auto-style-126">
                    <i className="bi bi-telephone lead-icon auto-style-127"></i>
                    <input
                      type="tel"
                      placeholder="Nhập số điện thoại"
                      className="auto-style-128"
                    />
                  </div>
                </div>
                <div className="form-group auto-style-129">
                  <label className="auto-style-130">
                    <i className="bi bi-lock-fill"></i> Mật khẩu
                  </label>
                  <div className="input-wrap auto-style-131">
                    <i className="bi bi-lock lead-icon auto-style-132"></i>
                    <input
                      type={showPwLogin ? "text" : "password"}
                      placeholder="Nhập mật khẩu"
                      className="auto-style-133"
                    />
                    <button
                      type="button"
                      className="eye-btn auto-style-134"
                      onClick={() => setShowPwLogin(!showPwLogin)}
                    >
                      <i
                        className={
                          showPwLogin ? "bi bi-eye-slash" : "bi bi-eye"
                        }
                      ></i>
                    </button>
                  </div>
                </div>
                <div className="auto-style-135">
                  <a href="#/" className="auto-style-136">
                    <i className="bi bi-question-circle"></i> Quên mật khẩu?
                  </a>
                </div>
                <button type="submit" className="submit-btn auto-style-137">
                  <i className="bi bi-box-arrow-in-right"></i> Đăng nhập
                </button>
              </form>
              <p className="member-link auto-style-138">
                Bạn chưa là thành viên?{" "}
                <span
                  onClick={() => setActiveTab("register")}
                  className="auto-style-139"
                >
                  Đăng ký ngay
                </span>
              </p>
            </div>
          )}

          {/* REGISTER */}
          {activeTab === "register" && (
            <div className="tab-content active" id="form-register">
              <h2 className="auto-style-140">Tạo tài khoản mới</h2>
              <p className="auto-style-141">
                Đăng ký để bắt đầu thuê xe trên MYOTO
              </p>
              <form onSubmit={handleSubmit(onRegister)}>
                <div className="form-group auto-style-142">
                  <label className="auto-style-143">
                    <i className="bi bi-telephone-fill"></i> Số điện thoại
                  </label>
                  <div className="input-wrap auto-style-144">
                    <i className="bi bi-telephone lead-icon auto-style-145"></i>
                    <input
                      type="tel"
                      placeholder="Nhập số điện thoại"
                      {...register("phone", {
                        required: "Vui lòng nhập số điện thoại",
                        pattern: {
                          value: /^[0-9]{10,11}$/,
                          message: "Số điện thoại không hợp lệ",
                        },
                      })}
                      style={{
                        width: "100%",
                        border: errors.phone
                          ? "1.5px solid red"
                          : "1.5px solid #e5e7eb",
                        borderRadius: "10px",
                        padding: "13px 16px 13px 42px",
                        fontFamily: "inherit",
                        fontSize: "15px",
                        outline: "none",
                        boxSizing: "border-box",
                      }}
                    />
                  </div>
                  {errors.phone && (
                    <div className="auto-style-146">{errors.phone.message}</div>
                  )}
                </div>

                <div className="form-group auto-style-147">
                  <label className="auto-style-148">
                    <i className="bi bi-person-fill"></i> Tên hiển thị
                  </label>
                  <div className="input-wrap auto-style-149">
                    <i className="bi bi-person lead-icon auto-style-150"></i>
                    <input
                      type="text"
                      placeholder="Nhập tên hiển thị"
                      {...register("name", {
                        required: "Vui lòng nhập tên hiển thị",
                      })}
                      style={{
                        width: "100%",
                        border: errors.name
                          ? "1.5px solid red"
                          : "1.5px solid #e5e7eb",
                        borderRadius: "10px",
                        padding: "13px 16px 13px 42px",
                        fontFamily: "inherit",
                        fontSize: "15px",
                        outline: "none",
                        boxSizing: "border-box",
                      }}
                    />
                  </div>
                  {errors.name && (
                    <div className="auto-style-151">{errors.name.message}</div>
                  )}
                </div>

                <div className="form-group auto-style-152">
                  <label className="auto-style-153">
                    <i className="bi bi-lock-fill"></i> Mật khẩu
                  </label>
                  <div className="input-wrap auto-style-154">
                    <i className="bi bi-lock lead-icon auto-style-155"></i>
                    <input
                      type={showPwReg1 ? "text" : "password"}
                      placeholder="Tạo mật khẩu (ít nhất 8 ký tự)"
                      {...register("password", {
                        required: "Vui lòng tạo mật khẩu",
                        minLength: {
                          value: 8,
                          message: "Mật khẩu ít nhất 8 ký tự",
                        },
                      })}
                      style={{
                        width: "100%",
                        border: errors.password
                          ? "1.5px solid red"
                          : "1.5px solid #e5e7eb",
                        borderRadius: "10px",
                        padding: "13px 44px 13px 42px",
                        fontFamily: "inherit",
                        fontSize: "15px",
                        outline: "none",
                        boxSizing: "border-box",
                      }}
                    />
                    <button
                      type="button"
                      className="eye-btn auto-style-156"
                      onClick={() => setShowPwReg1(!showPwReg1)}
                    >
                      <i
                        className={showPwReg1 ? "bi bi-eye-slash" : "bi bi-eye"}
                      ></i>
                    </button>
                  </div>
                  {errors.password && (
                    <div className="auto-style-157">
                      {errors.password.message}
                    </div>
                  )}
                </div>

                <div className="form-group auto-style-158">
                  <label className="auto-style-159">
                    <i className="bi bi-lock-fill"></i> Xác nhận mật khẩu
                  </label>
                  <div className="input-wrap auto-style-160">
                    <i className="bi bi-lock-fill lead-icon auto-style-161"></i>
                    <input
                      type={showPwReg2 ? "text" : "password"}
                      placeholder="Nhập lại mật khẩu"
                      {...register("confirmPassword", {
                        required: "Vui lòng xác nhận mật khẩu",
                        validate: (value) =>
                          value === password || "Mật khẩu không khớp",
                      })}
                      style={{
                        width: "100%",
                        border: errors.confirmPassword
                          ? "1.5px solid red"
                          : "1.5px solid #e5e7eb",
                        borderRadius: "10px",
                        padding: "13px 44px 13px 42px",
                        fontFamily: "inherit",
                        fontSize: "15px",
                        outline: "none",
                        boxSizing: "border-box",
                      }}
                    />
                    <button
                      type="button"
                      className="eye-btn auto-style-162"
                      onClick={() => setShowPwReg2(!showPwReg2)}
                    >
                      <i
                        className={showPwReg2 ? "bi bi-eye-slash" : "bi bi-eye"}
                      ></i>
                    </button>
                  </div>
                  {errors.confirmPassword && (
                    <div className="auto-style-163">
                      {errors.confirmPassword.message}
                    </div>
                  )}
                </div>

                <div className="form-group auto-style-164">
                  <label className="auto-style-165">
                    <i className="bi bi-gift-fill"></i> Mã giới thiệu{" "}
                    <span className="auto-style-166">(nếu có)</span>
                  </label>
                  <div className="input-wrap auto-style-167">
                    <i className="bi bi-gift lead-icon auto-style-168"></i>
                    <input
                      type="text"
                      placeholder="Nhập mã giới thiệu"
                      {...register("referralCode")}
                      className="auto-style-169"
                    />
                  </div>
                </div>

                <div className="agree-row auto-style-170">
                  <input
                    type="checkbox"
                    id="agree1"
                    {...register("agree", {
                      required: "Bạn chưa đồng ý với điều khoản",
                    })}
                    className="auto-style-171"
                  />
                  <div className="auto-style-172">
                    <label htmlFor="agree1" className="auto-style-173">
                      Tôi đã đọc và đồng ý với{" "}
                      <a href="#/" className="auto-style-174">
                        Chính sách & quy định
                      </a>{" "}
                      và{" "}
                      <a href="#/" className="auto-style-175">
                        Chính sách bảo vệ dữ liệu cá nhân
                      </a>{" "}
                      của MYOTO.
                    </label>
                    {errors.agree && (
                      <div className="auto-style-176">
                        {errors.agree.message}
                      </div>
                    )}
                  </div>
                </div>

                <button type="submit" className="submit-btn auto-style-177">
                  <i className="bi bi-person-check-fill"></i> Đăng ký
                </button>
              </form>
              <p className="member-link auto-style-178">
                Đã có tài khoản?{" "}
                <span
                  onClick={() => setActiveTab("login")}
                  className="auto-style-179"
                >
                  Đăng nhập
                </span>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Register;
