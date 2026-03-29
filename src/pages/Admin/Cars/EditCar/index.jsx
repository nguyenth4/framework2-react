import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import "./index.css";

const EditCar = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [currentCar, setCurrentCar] = useState({
    id,
    name: "BMW X6",
    type: "Tự động",
    seats: 4,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: currentCar });

  const onSubmit = (data) => {
    setCurrentCar({ id, ...data });
    alert(`Cập nhật xe #${id} thành công!`);
    navigate("/admin/cars");
  };

  return (
    <div className="admin-content">
      <h4 className="page-title">
        <i className="bi bi-pencil-square"></i> Sửa xe #{id}
      </h4>

      <div className="flex-container">
        {/* FORM BÊN TRÁI */}
        <div className="form-panel">
          <h5>Chỉnh sửa xe</h5>
          <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label>Tên xe</label>
              <input
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
              <i className="bi bi-check"></i> Cập nhật
            </button>
          </form>
        </div>

        {/* BÊN PHẢI - THÔNG TIN XE */}
        <div className="preview-panel">
          <h5>Thông tin xe hiện tại</h5>
          {currentCar ? (
            <table className="table-admin">
              <tbody>
                <tr>
                  <td><strong>ID</strong></td>
                  <td>{currentCar.id}</td>
                </tr>
                <tr>
                  <td><strong>Tên xe</strong></td>
                  <td>{currentCar.name}</td>
                </tr>
                <tr>
                  <td><strong>Loại xe</strong></td>
                  <td>{currentCar.type}</td>
                </tr>
                <tr>
                  <td><strong>Số chỗ</strong></td>
                  <td>{currentCar.seats}</td>
                </tr>
              </tbody>
            </table>
          ) : (
            <div className="empty-box">
              <i className="bi bi-info-circle"></i> Không có dữ liệu
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EditCar;