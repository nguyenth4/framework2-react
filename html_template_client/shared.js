// Shared components for all Mioto pages
const LOGO_SVG = `<svg width="32" height="24" viewBox="0 0 40 32" xmlns="http://www.w3.org/2000/svg">
  <path d="M4 26 C4 26 12 6 20 6 C28 6 36 26 36 26" style="stroke:#2ecc71;stroke-width:4;fill:none;stroke-linecap:round"/>
  <path d="M10 26 C10 26 15 14 20 14 C25 14 30 26 30 26" style="stroke:#2ecc71;stroke-width:4;fill:none;stroke-linecap:round"/>
</svg>`;

function renderNavbar(activePage) {
  const pages = [
    { href: 've-mioto.html', label: 'Về Mioto', key: 've-mioto' },
    { href: 'chu-xe.html', label: 'Trở thành chủ xe', key: 'chu-xe' },
  ];
  const links = pages.map(p => `
    <li><a href="${p.href}" class="${activePage === p.key ? 'nav-active' : ''}">${p.label}</a></li>
  `).join('');

  document.getElementById('navbar').innerHTML = `
    <a href="index.html" class="logo">${LOGO_SVG} MIOTO</a>
    <ul class="nav-links">${links}</ul>
    <div class="nav-btns">
      <button class="btn-outline" onclick="openModal('register')">Đăng ký</button>
      <button class="btn-green" onclick="openModal('login')">Đăng nhập</button>
    </div>
  `;
}

function renderFooter() {
  document.getElementById('footer').innerHTML = `
    <div class="footer-top">
      <div>
        <a href="index.html" class="logo footer-brand" style="margin-bottom:16px">${LOGO_SVG} MIOTO</a>
        <div class="footer-contact">
          <strong>1900 9217</strong><br/>Tổng đài hỗ trợ: 7AM - 10PM<br/><br/>
          <strong>contact@mioto.vn</strong><br/>Gửi mail cho Mioto
        </div>
        <div class="footer-social">
          <a class="social-btn" href="#">f</a>
          <a class="social-btn" href="#">♪</a>
          <a class="social-btn" href="#">z</a>
        </div>
      </div>
      <div class="footer-col">
        <h4>Chính Sách</h4>
        <ul>
          <li><a href="#">Chính sách & quy định</a></li>
          <li><a href="#">Quy chế hoạt động</a></li>
          <li><a href="#">Chính sách bảo mật</a></li>
          <li><a href="#">Giải quyết khiếu nại</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Tìm Hiểu Thêm</h4>
        <ul>
          <li><a href="#">Hướng dẫn chung</a></li>
          <li><a href="#">Hướng dẫn đặt xe</a></li>
          <li><a href="#">Hướng dẫn thanh toán</a></li>
          <li><a href="#">Hỏi và trả lời</a></li>
          <li><a href="ve-mioto.html">Về Mioto</a></li>
          <li><a href="#">Mioto Blog</a></li>
          <li><a href="#">Tuyển dụng</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Đối Tác</h4>
        <ul>
          <li><a href="chu-xe.html">Đăng ký chủ xe Mioto</a></li>
          <li><a href="#">Đăng ký GPS MITRACK 4G</a></li>
          <li><a href="#">Đăng ký cho thuê xe dài hạn MICARRO</a></li>
        </ul>
      </div>
    </div>
    <hr class="footer-divider"/>
    <div class="footer-bottom">
      <div class="footer-legal">© Công ty Cổ phần Mioto Asia &nbsp;|&nbsp; Số GCNĐKKD: 0317307544 &nbsp;|&nbsp; Ngày cấp: 24-05-22 &nbsp;|&nbsp; Nơi cấp: Sở Kế hoạch và Đầu tư TPHCM</div>
      <div class="payment-methods">
        <span>Phương thức thanh toán:</span>
        <span class="pay-icon pay-momo">MoMo</span>
        <span class="pay-icon pay-vnpay">VnPay</span>
        <span class="pay-icon">AioPay</span>
        <span class="pay-icon pay-visa">VISA</span>
        <span class="pay-icon pay-zalo">ZaloPay</span>
        <span class="pay-icon" style="background:#e74c3c;color:#fff">Viettel</span>
      </div>
    </div>
    <hr class="footer-divider"/>
    <div style="font-size:12px;color:var(--gray);line-height:1.8">
      Địa chỉ: Văn phòng 01, Tầng 09, Tòa nhà Pearl Plaza, Số 561A Điện Biên Phủ, Phường Thạnh Mỹ Tây, TP. Hồ Chí Minh &nbsp;|&nbsp;
      Tên TK: CT CP MIOTO ASIA &nbsp;|&nbsp; Số TK: 102-989-1989 &nbsp;|&nbsp; Ngân hàng Vietcombank - CN Tân Định
    </div>
  `;
}

function renderModal() {
  const el = document.createElement('div');
  el.innerHTML = `
  <div class="modal-overlay" id="modalOverlay" onclick="closeModal(event)">
    <div class="modal" onclick="event.stopPropagation()">
      <button class="modal-close" onclick="closeModal()">✕</button>
      <div class="modal-tabs">
        <button class="modal-tab" id="tab-login" onclick="switchTab('login')">Đăng nhập</button>
        <button class="modal-tab" id="tab-register" onclick="switchTab('register')">Đăng ký</button>
      </div>
      <div id="login-form">
        <h2>Chào mừng trở lại!</h2>
        <p>Đăng nhập để tiếp tục hành trình cùng Mioto</p>
        <div class="form-group">
          <label>Số điện thoại</label>
          <input type="tel" placeholder="Nhập số điện thoại" />
        </div>
        <div class="form-group">
          <label>Mật khẩu</label>
          <div style="position:relative">
            <input type="password" id="pw-login" placeholder="Nhập mật khẩu" style="padding-right:44px"/>
            <button onclick="togglePw('pw-login')" style="position:absolute;right:12px;top:50%;transform:translateY(-50%);background:none;border:none;cursor:pointer;color:var(--gray);font-size:16px">👁</button>
          </div>
        </div>
        <div style="text-align:right;margin-bottom:16px"><a href="#" style="color:var(--green-dark);font-size:13px;font-weight:600">Quên mật khẩu?</a></div>
        <button class="modal-btn">Đăng nhập</button>
        <p style="text-align:center;font-size:13px;color:var(--gray);margin:12px 0">Bạn chưa là thành viên? <a href="#" onclick="switchTab('register')" style="color:var(--green-dark);font-weight:700">Đăng ký ngay</a></p>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:8px">
          <button class="modal-btn" style="background:#fff;color:#1877f2;border:1.5px solid #e5e7eb;display:flex;align-items:center;justify-content:center;gap:8px">
            <svg width="18" height="18" viewBox="0 0 24 24"><path fill="#1877f2" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            Facebook
          </button>
          <button class="modal-btn" style="background:#fff;color:#333;border:1.5px solid #e5e7eb;display:flex;align-items:center;justify-content:center;gap:8px">
            <svg width="18" height="18" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
            Google
          </button>
        </div>
      </div>
      <div id="register-form" style="display:none">
        <h2>Tạo tài khoản mới</h2>
        <p>Đăng ký để bắt đầu thuê xe trên Mioto</p>
        <div class="form-group">
          <label>Số điện thoại</label>
          <input type="tel" placeholder="Nhập số điện thoại" />
        </div>
        <div class="form-group">
          <label>Tên hiển thị</label>
          <input type="text" placeholder="Nhập tên hiển thị" />
        </div>
        <div class="form-group">
          <label>Mật khẩu</label>
          <div style="position:relative">
            <input type="password" id="pw-reg1" placeholder="Tạo mật khẩu" style="padding-right:44px"/>
            <button onclick="togglePw('pw-reg1')" style="position:absolute;right:12px;top:50%;transform:translateY(-50%);background:none;border:none;cursor:pointer;color:var(--gray);font-size:16px">👁</button>
          </div>
        </div>
        <div class="form-group">
          <label>Xác nhận mật khẩu</label>
          <div style="position:relative">
            <input type="password" id="pw-reg2" placeholder="Nhập lại mật khẩu" style="padding-right:44px"/>
            <button onclick="togglePw('pw-reg2')" style="position:absolute;right:12px;top:50%;transform:translateY(-50%);background:none;border:none;cursor:pointer;color:var(--gray);font-size:16px">👁</button>
          </div>
        </div>
        <div class="form-group">
          <label>Mã giới thiệu (nếu có)</label>
          <input type="text" placeholder="Nhập mã giới thiệu" />
        </div>
        <div style="display:flex;align-items:flex-start;gap:10px;margin-bottom:16px;font-size:13px;color:var(--gray)">
          <input type="checkbox" id="agree" checked style="margin-top:2px;accent-color:var(--green)"/>
          <label for="agree">Tôi đã đọc và đồng ý với <a href="#" style="color:var(--green-dark)">Chính sách & quy định</a> và <a href="#" style="color:var(--green-dark)">Chính sách bảo vệ dữ liệu cá nhân</a> của Mioto.</label>
        </div>
        <button class="modal-btn">Đăng ký</button>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:12px">
          <button class="modal-btn" style="background:#fff;color:#1877f2;border:1.5px solid #e5e7eb;display:flex;align-items:center;justify-content:center;gap:8px">
            <svg width="18" height="18" viewBox="0 0 24 24"><path fill="#1877f2" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            Facebook
          </button>
          <button class="modal-btn" style="background:#fff;color:#333;border:1.5px solid #e5e7eb;display:flex;align-items:center;justify-content:center;gap:8px">
            <svg width="18" height="18" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
            Google
          </button>
        </div>
      </div>
    </div>
  </div>`;
  document.body.appendChild(el.firstElementChild);
}

function openModal(tab) {
  document.getElementById('modalOverlay').classList.add('active');
  switchTab(tab);
}
function closeModal(event) {
  if (!event || event.target === document.getElementById('modalOverlay'))
    document.getElementById('modalOverlay').classList.remove('active');
}
function switchTab(tab) {
  document.getElementById('login-form').style.display = tab === 'login' ? 'block' : 'none';
  document.getElementById('register-form').style.display = tab === 'register' ? 'block' : 'none';
  document.getElementById('tab-login').classList.toggle('active', tab === 'login');
  document.getElementById('tab-register').classList.toggle('active', tab === 'register');
}
function togglePw(id) {
  const el = document.getElementById(id);
  el.type = el.type === 'password' ? 'text' : 'password';
}
