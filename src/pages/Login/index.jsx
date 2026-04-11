import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "./index.css";

const Login = () => {
  const [showPwLogin, setShowPwLogin] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  
  // Khởi tạo các hook và biến trạng thái (state) mới
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  const onLogin = async (data) => {
    try {
      setErrorMessage(""); // Xóa thông báo lỗi cũ hiển thị trên màn hình

      // Gọi vào API Node.js backend port 5000 do mình mới setup ở bài trước
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: data.email,      // Gửi email
          password: data.password // Gửi mật khẩu
        }),
      });

      // Bóc tách dữ liệu gửi về từ API
      const result = await response.json();

      if (response.ok) {
        // Đăng nhập thành công
        alert("Đăng nhập thành công!");
        localStorage.setItem("token", result.token);
        localStorage.setItem("role", result.role); // Ghi nhớ quyền quản trị viên hay User

        // TRẠM KIỂM SOÁT VÉ VÀ ĐIỀU CHUYỂN
        if (result.role === "admin") {
          navigate("/admin"); // Chạy vào cửa sau Admin
        } else {
          navigate("/"); // Đi vòng ra cửa trước Client
        }
      } else {
        // HTTP 400, 401...: Sai pass, sai tài khoản
        setErrorMessage(result.message || "Tài khoản hoặc mật khẩu không chính xác");
      }
    } catch (error) {
      setErrorMessage("Không thể kết nối đến máy chủ. Vui lòng bật lại Server nhé.");
      console.error("Lỗi kĩ thuật:", error);
    }
  };

  return (
    <div className="form-page auto-style-96">
      <div className="form-left auto-style-97">
        <div className="form-left-bg auto-style-98"></div>
        <div className="form-left-overlay auto-style-99"></div>

        <div className="form-left-content auto-style-100">
          <div className="form-left-logo auto-style-101">
            <span className="auto-style-104">MYOTO</span>
          </div>

          <h2 className="auto-style-105">
            Chào mừng quay lại <br />
            <em className="auto-style-106">MYOTO</em>
          </h2>

          <p className="auto-style-107">
            Đăng nhập để tiếp tục sử dụng dịch vụ thuê xe tiện lợi và an toàn.
          </p>
        </div>
      </div>

      <div className="form-right auto-style-119">
        <div className="form-box auto-style-120">
          <div className="tab-content active">
            <h2 className="auto-style-122">Chào mừng trở lại!</h2>
            <p className="auto-style-123">
              Đăng nhập để tiếp tục hành trình cùng MYOTO
            </p>

            <form onSubmit={handleSubmit(onLogin)}>
              
              {/* KHU VỰC HIỂN THỊ THÔNG BÁO LỖI TỪ SERVER TRẢ VỀ */}
              {errorMessage && (
                <div style={{ padding: "10px", marginBottom: "15px", backgroundColor: "#ffebee", color: "red", borderRadius: "5px", fontSize: "14px", fontWeight: "bold", textAlign: "center" }}>
                  {errorMessage}
                </div>
              )}

              {/* EMAIL */}
              <div className="form-group auto-style-124">
                <label className="auto-style-125">
                  Email
                </label>

                <div className="input-wrap auto-style-126">
                  <input
                    type="email"
                    placeholder="Nhập hộp thư email của bạn"
                    className="auto-style-128"
                    {...register("email", {
                      required: "Vui lòng nhập Email",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Email sai định dạng (Ví dụ: phuong@fpt.edu.vn)",
                      },
                    })}
                    style={{
                      border: errors.email ? "1.5px solid red" : "",
                    }}
                  />
                </div>

                {errors.email && (
                  <p style={{ color: "red", fontSize: "12px", marginTop: "5px" }}>
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* PASSWORD */}
              <div className="form-group auto-style-129">
                <label className="auto-style-130">
                  Mật khẩu
                </label>

                <div className="input-wrap auto-style-131">
                  <input
                    type={showPwLogin ? "text" : "password"}
                    placeholder="Nhập mật khẩu"
                    className="auto-style-133"
                    {...register("password", {
                      required: "Vui lòng nhập mật khẩu",
                      minLength: {
                        value: 6,
                        message: "Mật khẩu tối thiểu 6 ký tự",
                      },
                    })}
                    style={{
                      border: errors.password ? "1.5px solid red" : "",
                    }}
                  />

                  <button
                    type="button"
                    className="eye-btn auto-style-134"
                    onClick={() => setShowPwLogin(!showPwLogin)}
                  >
                    {showPwLogin ? "Ẩn" : "Hiện"}
                  </button>
                </div>

                {errors.password && (
                  <p style={{ color: "red", fontSize: "12px" }}>
                    {errors.password.message}
                  </p>
                )}
              </div>

              {/* BUTTON */}
              <button type="submit" className="submit-btn auto-style-137">
                Đăng nhập
              </button>
            </form>

            {/* LINK */}
            <p className="member-link auto-style-138">
              Bạn chưa là thành viên?{" "}
              <span className="auto-style-139">
                Đăng ký ngay
              </span>
            </p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;