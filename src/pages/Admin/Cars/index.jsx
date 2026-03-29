import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const Cars = () => {
  const cars = [
    { id: 1, name: "BMW X6", type: "Tự động", seats: 4 },
    { id: 2, name: "Innova", type: "Số sàn", seats: 7 },
  ];

  return (
    <div className="admin-content">
      <div className="page-header">
        <h4>Quản lý xe</h4>
        <Link to="/admin/cars/add" className="btn-add">
          <i className="bi bi-plus-circle"></i> Thêm xe
        </Link>
      </div>

      <div className="table-wrapper">
        <table className="table-admin">
          <thead>
            <tr>
              <th>#</th>
              <th>Xe</th>
              <th>Loại</th>
              <th>Số chỗ</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {cars.map((car) => (
              <tr key={car.id}>
                <td>{car.id}</td>

                <td className="car-name">
                  <i className="bi bi-car-front-fill"></i> {car.name}
                </td>

                <td>
                  <span className="badge-type">{car.type}</span>
                </td>

                <td>
                  <i className="bi bi-people"></i> {car.seats}
                </td>

                <td className="action-buttons">
                  {/* Nút Xem */}
                  <Link
                    to={`/admin/cars/view/${car.id}`}
                    className="btn-action view"
                    title="Xem chi tiết"
                  >
                    <i className="bi bi-eye"></i>
                  </Link>

                  {/* Nút Sửa */}
                  <Link
                    to={`/admin/cars/edit/${car.id}`}
                    className="btn-action edit"
                    title="Sửa"
                  >
                    <i className="bi bi-pencil-square"></i>
                  </Link>

                  {/* Nút Xóa */}
                  <button
                    className="btn-action delete"
                    title="Xóa"
                  >
                    <i className="bi bi-trash"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cars;