import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "./index.css";

const Register = () => {
  const [showPwReg1, setShowPwReg1] = useState(false);
  const [showPwReg2, setShowPwReg2] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const password = watch("password", "");
  
  // Các biến xử lý chuyển trang và lỗi
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  const onRegister = async (data) => {
    try {
      setErrorMessage(""); 
      
      const response = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: data.name, // Lấy ô Tên hiển thị (name) tương ứng với ô username của API
          email: data.email,
          password: data.password
        }),
      });

      const result = await response.json();

      if (response.ok) {
        alert("Đăng ký tài khoản thành công! Mời bạn đăng nhập.");
        navigate("/login"); // Đá sang trang đăng nhập ngay lập tức
      } else {
        setErrorMessage(result.message || "Đăng ký thất bại do lỗi dữ liệu.");
      }
    } catch (error) {
      setErrorMessage("Máy chủ hiện không phản hồi. Bạn vui lòng bật lại Server backend.");
      console.error("Lỗi kĩ thuật đăng ký:", error);
    }
  };

  return (
    <div className="form-page auto-style-96">
      {/* Left Banner */}
      <div className="form-left auto-style-97">
        <div className="form-left-bg auto-style-98"></div>
        <div className="form-left-overlay auto-style-99"></div>
        <div className="form-left-content auto-style-100">
          <div className="form-left-logo auto-style-101">
            <svg width="32" height="24" viewBox="0 0 40 32">
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
        </div>
      </div>

      {/* Right Form Area */}
      <div className="form-right auto-style-119">
        <div className="form-box auto-style-120">
          {/* REGISTER luôn hiển thị */}
          <div className="tab-content active" id="form-register">
            <h2 className="auto-style-140">Tạo tài khoản mới</h2>
            <p className="auto-style-141">
              Đăng ký để bắt đầu thuê xe trên MYOTO
            </p>

            <form onSubmit={handleSubmit(onRegister)}>
              
              {/* KHU VỰC HIỂN THỊ LỖI (Ví dụ: Trùng email) */}
              {errorMessage && (
                <div style={{ padding: "10px", marginBottom: "15px", backgroundColor: "#ffebee", color: "red", borderRadius: "5px", fontSize: "14px", fontWeight: "bold", textAlign: "center" }}>
                  {errorMessage}
                </div>
              )}

              {/* PHONE ĐÃ BỊ XÓA */}

              <div className="form-group auto-style-142">
                <label className="auto-style-143">
                  <i className="bi bi-envelope-fill"></i> Email
                </label>
                <div className="input-wrap auto-style-144">
                  <i className="bi bi-envelope lead-icon auto-style-145"></i>
                  <input
                    type="email"
                    placeholder="Nhập email"
                    {...register("email", {
                      required: "Vui lòng nhập email",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Email không hợp lệ",
                      },
                    })}
                    style={{
                      width: "100%",
                      border: errors.email
                        ? "1.5px solid red"
                        : "1.5px solid #e5e7eb",
                      borderRadius: "10px",
                      padding: "13px 16px 13px 42px",
                    }}
                  />
                </div>
                {errors.email && (
                  <p style={{ color: "red", fontSize: "13px", marginTop: "4px", marginBottom: "0", fontWeight: "bold" }}>{errors.email.message}</p>
                )}
              </div>

              {/* NAME */}
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
                    }}
                  />
                </div>
                {errors.name && (
                  <p style={{ color: "red", fontSize: "13px", marginTop: "4px", marginBottom: "0", fontWeight: "bold" }}>{errors.name.message}</p>
                )}
              </div>

              {/* PASSWORD */}
              <div className="form-group auto-style-152">
                <label className="auto-style-153">
                  <i className="bi bi-lock-fill"></i> Mật khẩu
                </label>
                <div className="input-wrap auto-style-154">
                  <i className="bi bi-lock lead-icon auto-style-155"></i>
                  <input
                    type={showPwReg1 ? "text" : "password"}
                    {...register("password", {
                      required: "Vui lòng tạo mật khẩu",
                      minLength: {
                        value: 8,
                        message: "Mật khẩu ít nhất 8 ký tự",
                      },
                    })}
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
                  <p style={{ color: "red", fontSize: "13px", marginTop: "4px", marginBottom: "0", fontWeight: "bold" }}>{errors.password.message}</p>
                )}
              </div>

              {/* CONFIRM */}
              <div className="form-group auto-style-158">
                <label className="auto-style-159">
                  <i className="bi bi-lock-fill"></i> Xác nhận mật khẩu
                </label>
                <div className="input-wrap auto-style-160">
                  <i className="bi bi-lock-fill lead-icon auto-style-161"></i>
                  <input
                    type={showPwReg2 ? "text" : "password"}
                    {...register("confirmPassword", {
                      required: "Vui lòng xác nhận mật khẩu",
                      validate: (value) =>
                        value === password || "Mật khẩu không khớp",
                    })}
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
                  <p style={{ color: "red", fontSize: "13px", marginTop: "4px", marginBottom: "0", fontWeight: "bold" }}>{errors.confirmPassword.message}</p>
                )}
              </div>

              <button type="submit" className="submit-btn auto-style-177">
                <i className="bi bi-person-check-fill"></i> Đăng ký
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
