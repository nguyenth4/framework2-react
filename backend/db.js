const mysql = require('mysql2/promise');

// Cấu hình Database dựa trên hình ảnh 1Panel và iNet của bạn
const dbConfig = {
    host: 'onehost-webhn072403.000nethost.com', // Lấy từ phần Thông tin Host trong ảnh
    port: 3306,                                 // Cổng mặc định của MySQL
    user: 'uxjyooqvhosting_user_react',         // Tên user trong ảnh
    password: 'vX2hg:S8b^_dB8T',                // Mật khẩu bạn đã tạo ở bước trước
    database: 'uxjyooqvhosting_csdl_react'      // Tên Database trong ảnh
};

// Khởi tạo Pool kết nối (quản lý kết nối tự động tối ưu)
const pool = mysql.createPool(dbConfig);

// Hàm kiểm tra tự động xem server đã kết nối vào Database chưa
pool.getConnection()
    .then(connection => {
        console.log('✅ KẾT NỐI THÀNH CÔNG TỚI DATABASE TRÊN Hosting 1Panel!');
        connection.release();
    })
    .catch(err => {
        console.error('❌ LỖI KẾT NỐI DATABASE:', err.message);
    });

module.exports = pool;
