const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// 1. Nhập file cấu hình DB đã tạo từ cPanel/1Panel
const pool = require('./db.js');

const app = express();

// 2. Cấu hình các Middleware
app.use(cors());          // Cho phép phía ReactJS gọi API mà không bị chặn lỗi CORS
app.use(express.json());  // Cho phép Node.js hiểu được dữ liệu JSON gửi lên từ Cilent

// Secret key dùng để mã hoá/giải mã token vòng quay
const JWT_SECRET = 'my_super_secret_key_fpt_123'; 

// 3. Hàm tự động tạo bảng Users trên Database của iNet nếu chưa tồn tại
async function initDatabase() {
    try {
        const createTableQuery = `
            CREATE TABLE IF NOT EXISTS users (
                id INT AUTO_INCREMENT PRIMARY KEY,
                username VARCHAR(100),
                email VARCHAR(100) UNIQUE NOT NULL,
                password VARCHAR(255) NOT NULL,
                role VARCHAR(50) DEFAULT 'user',
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        `;
        await pool.query(createTableQuery);
        console.log('✅ Bảng "users" đã sẵn sàng trên Database Remote (Đã kiểm tra/Tạo tự động).');
    } catch (err) {
        console.error('❌ Lỗi khi khởi tạo bảng users trên Database:', err.message);
    }
}
// Kích hoạt việc kiểm tra/tạo bảng khi Server vừa khởi động
initDatabase();


// ==================================================
// API 1: ĐĂNG KÝ TÀI KHOẢN KÈM HASH PASS (REGISTER)
// ==================================================
app.post('/api/register', async (req, res) => {
    try {
        const { username, email, password, role = 'user' } = req.body;

        // Validation - Bắt buộc nhập
        if (!email || !password) {
            return res.status(400).json({ message: 'Vui lòng cung cấp đầy đủ email và password!' });
        }

        // A. Kiểm tra email đã được ai dùng chưa
        const [existingUsers] = await pool.execute('SELECT * FROM users WHERE email = ?', [email]);
        if (existingUsers.length > 0) {
            return res.status(400).json({ message: 'Email này đã tồn tại trong hệ thống!' });
        }

        // B. Mã hóa (Băm/Hash) mật khẩu bằng Bcrypt
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        // C. Thêm User vào Database với mật khẩu siêu bảo mật (hash)
        const [result] = await pool.execute(
            'INSERT INTO users (username, email, password, role) VALUES (?, ?, ?, ?)',
            [username, email, hashedPassword, role]
        );

        return res.status(201).json({ 
            message: 'Đăng ký tài khoản thành công!', 
            userId: result.insertId 
        });

    } catch (error) {
        console.error('Lỗi trong chức năng Đăng ký:', error);
        return res.status(500).json({ message: 'Máy chủ đang gặp sự cố, thử lại sau nhé!' });
    }
});


// ==================================================
// API 2: ĐĂNG NHẬP (LOGIN & CẤP JWT TOKEN)
// ==================================================
app.post('/api/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: 'Vui lòng cung cấp email và password!' });
        }

        // A. Lọc và lấy thông tin người dùng dựa vào Email nhập vào
        const [users] = await pool.execute('SELECT * FROM users WHERE email = ?', [email]);
        const user = users[0];

        if (!user) { // Không tìm thấy User nào có email như thế
            return res.status(401).json({ message: 'Tài khoản hoặc mật khẩu không chính xác!' });
        }

        // B. So sánh chuỗi mật khẩu gốc (Client) với đoạn mật khẩu Hash đã lưu trong CSDL
        const isPasswordValid = await bcrypt.compare(password, user.password);
        
        if (!isPasswordValid) { // Sai mật khẩu
            return res.status(401).json({ message: 'Tài khoản hoặc mật khẩu không chính xác!' });
        }

        // C. Tổ chức chuỗi dữ liệu nhét vào Token
        const payloadData = { 
            id: user.id, 
            role: user.role 
        };

        // D. Xuất mã Token kèm định thời gian sử dụng
        const token = jwt.sign(
            payloadData, 
            JWT_SECRET, 
            { expiresIn: '3h' } // Token này sống 3 tiếng rồi chết
        );

        // Trả kết quả cuối
        return res.status(200).json({ 
            message: 'Đăng nhập thành công!', 
            token: token,
            role: user.role
        });

    } catch (error) {
        console.error('Lỗi trong chức năng Đăng Nhập:', error);
        return res.status(500).json({ message: 'Máy chủ đang gặp sự cố, thử lại sau nhé!' });
    }
});

// Chạy và Bắt đầu lắng nghe
// NOTE: Chạy cổng 5000 để tách biệt và không bị đụng cổng với Node React đang chạy ở :3000
const PORT = 5000; 
app.listen(PORT, () => {
    console.log(`🚀 NodeJS Backend Server khởi động thành công ở: http://localhost:${PORT}`);
});
