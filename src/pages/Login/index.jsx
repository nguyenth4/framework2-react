import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./index.css";

const Login = () => {
  const [showPwLogin, setShowPwLogin] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onLogin = (data) => {
    console.log("Login data:", data);
    alert("Đăng nhập thành công!");
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
              
              {/* PHONE */}
              <div className="form-group auto-style-124">
                <label className="auto-style-125">
                  Số điện thoại
                </label>

                <div className="input-wrap auto-style-126">
                  <input
                    type="tel"
                    placeholder="Nhập số điện thoại"
                    className="auto-style-128"
                    {...register("phone", {
                      required: "Vui lòng nhập số điện thoại",
                      pattern: {
                        value: /^[0-9]{10,11}$/,
                        message: "Số điện thoại không hợp lệ",
                      },
                    })}
                    style={{
                      border: errors.phone ? "1.5px solid red" : "",
                    }}
                  />
                </div>

                {errors.phone && (
                  <p style={{ color: "red", fontSize: "12px" }}>
                    {errors.phone.message}
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