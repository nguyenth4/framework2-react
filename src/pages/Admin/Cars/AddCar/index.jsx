import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "./index.css";

const AddCar = () => {
  const navigate = useNavigate();
  const [cars, setCars] = useState([]); // lưu xe vừa thêm

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    const newCar = { id: cars.length + 1, ...data };
    setCars([...cars, newCar]);
    alert("Thêm xe thành công!");
    reset();
  };

  return (
    <div className="admin-content">
      <h4 className="page-title">
        <i className="bi bi-car-front-fill"></i> Quản lý xe
      </h4>

      <div className="flex-container">
        {/* FORM BÊN TRÁI */}
        <div className="form-panel">
          <h5>Thêm xe mới</h5>
          <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label>Tên xe</label>
              <input
                type="text"
                className="form-control"
                {...register("name", { required: "Không được bỏ trống" })}
              />
              {errors.name && <span className="form-error">{errors.name.message}</span>}
            </div>

            <div className="form-group">
              <label>Loại xe</label>
              <select
                className="form-control"
                {...register("type", { required: "Chọn loại xe" })}
              >
                <option value="">-- Chọn --</option>
                <option value="Số sàn">Số sàn</option>
                <option value="Tự động">Tự động</option>
              </select>
              {errors.type && <span className="form-error">{errors.type.message}</span>}
            </div>

            <div className="form-group">
              <label>Số chỗ</label>
              <input
                type="number"
                className="form-control"
                {...register("seats", {
                  required: "Nhập số chỗ",
                  min: { value: 2, message: "Ít nhất 2 chỗ" },
                })}
              />
              {errors.seats && <span className="form-error">{errors.seats.message}</span>}
            </div>

            <button type="submit" className="btn-submit">
              <i className="bi bi-check"></i> Lưu
            </button>
          </form>
        </div>

        {/* BẢNG / PHẦN BÊN PHẢI */}
        <div className="preview-panel">
          <h5>Danh sách xe vừa thêm</h5>
          {cars.length === 0 ? (
            <div className="empty-box">
              <i className="bi bi-info-circle"></i> Chưa có xe nào được thêm
            </div>
          ) : (
            <table className="table-admin">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Tên xe</th>
                  <th>Loại</th>
                  <th>Số chỗ</th>
                </tr>
              </thead>
              <tbody>
                {cars.map((car) => (
                  <tr key={car.id}>
                    <td>{car.id}</td>
                    <td>{car.name}</td>
                    <td>{car.type}</td>
                    <td>{car.seats}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddCar;