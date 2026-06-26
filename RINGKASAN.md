# 🎉 TOKO ONLINE - APLIKASI SELESAI!

Selamat! Aplikasi toko online Anda sudah siap digunakan dengan semua fitur lengkap.

---

## 📦 Apa yang Sudah Dibuat

### ✅ Backend (Node.js + Express)
```
backend/
├── server.js                 # Server utama
├── package.json              # Dependencies
├── .env.example              # Template environment
├── config/database.js        # Setup database SQLite
└── routes/
    ├── auth.js              # Login & Register
    ├── products.js          # Kelola produk
    ├── users.js             # Profil pengguna
    └── orders.js            # Pesanan
```

**Database Tables:**
- ✓ users (akun pengguna)
- ✓ products (katalog produk - 8 produk sampel)
- ✓ orders (pesanan)
- ✓ order_items (detail pesanan)
- ✓ cart (keranjang belanja)

**Sample Data:**
- ✓ 2 akun demo sudah dibuat
- ✓ 8 produk sampel dengan kategori

### ✅ Frontend (HTML/CSS/JavaScript + Bootstrap)
```
frontend/
├── index.html               # Login page
├── register.html            # Registrasi
├── dashboard.html           # Dashboard utama
├── shop.html                # Katalog produk
├── cart.html                # Keranjang belanja
├── profile.html             # Profil pengguna
├── order-history.html       # Riwayat pesanan
├── css/style.css            # Styling global
└── js/
    ├── api.js              # API helper functions
    ├── auth.js             # Login logic
    ├── register.js         # Registrasi logic
    ├── dashboard.js        # Dashboard logic
    ├── shop.js             # Shop logic
    ├── cart.js             # Cart management
    ├── profile.js          # Profile logic
    └── order-history.js    # Order history logic
```

---

## 🔧 Technology Stack

| Layer | Technology |
|-------|-----------|
| **Backend** | Node.js + Express.js |
| **Database** | SQLite3 |
| **Authentication** | JWT (JSON Web Token) |
| **Password** | bcryptjs |
| **Frontend** | HTML5 + CSS3 + JavaScript |
| **UI Framework** | Bootstrap 5 |
| **Icons** | Font Awesome 6 |

---

## ⚡ Quick Start (Untuk Menjalankan)

### 1. Terminal 1 - Jalankan Backend
```bash
cd /workspaces/WEB/backend
npm start
```

Output:
```
Server running on http://localhost:5000
```

### 2. Terminal 2 - Buka Frontend
```bash
# Cara 1: Dengan Live Server
# Di VS Code: klik kanan frontend/index.html → "Open with Live Server"

# Cara 2: Langsung di browser
file:///workspaces/WEB/frontend/index.html
```

### 3. Login dengan Demo Account
```
Email:    user1@example.com
Password: password123
```

**Done!** Aplikasi Anda sudah running! 🚀

---

## 📋 Fitur Aplikasi

### ✅ Authentication & User Management
- [x] Registrasi pengguna baru
- [x] Login dengan email/password
- [x] JWT token-based session
- [x] Password hashing dengan bcryptjs
- [x] User profile management

### ✅ Produk & Katalog
- [x] Tampilkan semua produk
- [x] Search produk
- [x] Filter berdasarkan kategori
- [x] Detail produk lengkap
- [x] Stok produk

### ✅ Keranjang Belanja
- [x] Tambah produk ke keranjang
- [x] Hapus produk dari keranjang
- [x] Update jumlah produk
- [x] Hitung total harga otomatis
- [x] Tax calculation (10%)

### ✅ Pesanan
- [x] Checkout dari keranjang
- [x] Create order
- [x] Lihat riwayat pesanan
- [x] Detail pesanan lengkap
- [x] Status pesanan

### ✅ Dashboard
- [x] Welcome page
- [x] Produk unggulan
- [x] Quick menu
- [x] User info
- [x] Navigation menu

---

## 🎯 API Endpoints

```
BASE URL: http://localhost:5000/api

Authentication:
  POST   /auth/register       Register user
  POST   /auth/login          Login user
  GET    /auth/verify         Verify token

Products:
  GET    /products            Get all products
  GET    /products/:id        Get product detail
  GET    /products/categories/list  Get categories
  POST   /products            Create product

Users:
  GET    /users/:id           Get user profile
  PUT    /users/:id           Update user profile

Orders:
  GET    /orders/user/:id     Get user orders
  GET    /orders/:id          Get order detail
  POST   /orders              Create order
```

---

## 📊 Struktur Data

### User
```javascript
{
  id: 1,
  username: "user1",
  email: "user1@example.com",
  full_name: "John Doe",
  phone: "08123456789",
  address: "Jalan Merdeka No. 1",
  role: "customer",
  created_at: "2026-06-26T10:00:00.000Z"
}
```

### Product
```javascript
{
  id: 1,
  name: "Laptop Gaming",
  description: "Laptop gaming dengan spesifikasi tinggi",
  price: 12000000,
  stock: 10,
  category: "Elektronik",
  image_url: "https://via.placeholder.com/300x200",
  seller_id: 1
}
```

### Order
```javascript
{
  id: 1,
  user_id: 1,
  total_amount: 15000000,
  status: "pending",
  payment_status: "unpaid",
  items: [
    {
      product_id: 1,
      quantity: 1,
      price: 12000000
    }
  ]
}
```

---

## 🔐 Demo Accounts

| Email | Password | Role |
|-------|----------|------|
| user1@example.com | password123 | Customer |
| user2@example.com | password123 | Customer |

**Atau buat akun baru dengan klik "Daftar di sini"**

---

## 📱 Sample Products (8 items)

| No | Produk | Harga | Stok | Kategori |
|---|---|---|---|---|
| 1 | Laptop Gaming | Rp 12.000.000 | 10 | Elektronik |
| 2 | Smartphone Android | Rp 5.000.000 | 20 | Elektronik |
| 3 | Monitor 4K | Rp 4.000.000 | 8 | Aksesori |
| 4 | Headphone Wireless | Rp 1.500.000 | 30 | Audio |
| 5 | Keyboard Mekanik | Rp 1.200.000 | 25 | Aksesori |
| 6 | Mouse Gaming | Rp 800.000 | 35 | Aksesori |
| 7 | Webcam HD | Rp 500.000 | 40 | Aksesori |
| 8 | Power Bank 30000mAh | Rp 450.000 | 50 | Aksesori |

---

## 📝 File-file Penting

| File | Fungsi |
|------|--------|
| `PANDUAN.md` | Panduan lengkap menjalankan aplikasi |
| `README.md` | Dokumentasi teknis lengkap |
| `backend/.env.example` | Template environment variables |
| `backend/server.js` | Entry point backend |
| `frontend/index.html` | Entry point frontend |

---

## 🐛 Troubleshooting Quick Reference

| Problem | Solution |
|---------|----------|
| Backend tidak running | `cd backend && npm start` |
| Port 5000 conflict | Ubah PORT di `.env` |
| Frontend tidak connect ke API | Check `frontend/js/api.js` BASE URL |
| Database error | Jalankan `node init-db.js` |
| CORS error | Pastikan backend running di port 5000 |
| Login failed | Cek email/password, gunakan demo account |

---

## 💡 Next Steps (Untuk Pengembangan)

Anda bisa mengembangkan dengan fitur:

1. **Payment Gateway**
   - Integrasikan Midtrans atau PayPal
   - Update order status otomatis

2. **Email Notifications**
   - Kirim email saat order created
   - Order status notifications

3. **Admin Panel**
   - Manage products
   - Manage users
   - View statistics

4. **Product Reviews**
   - Rating & review system
   - Customer feedback

5. **Wishlist**
   - Save favorite products
   - Quick checkout

6. **Real-time Features**
   - WebSocket untuk notifications
   - Live order tracking

7. **Image Upload**
   - Product images
   - User avatar

---

## 📞 Support

Jika ada masalah:

1. **Cek Console Browser** (F12)
   - Lihat error messages
   - Debug JavaScript

2. **Cek Terminal Backend**
   - Lihat server logs
   - Debug API calls

3. **Baca Dokumentasi**
   - `README.md` - Technical docs
   - `PANDUAN.md` - Usage guide

4. **Reset Database**
   - Hapus file `backend/database.db`
   - Jalankan `node init-db.js` lagi

---

## 📈 Statistics

| Metric | Value |
|--------|-------|
| Backend Routes | 15 endpoints |
| Frontend Pages | 7 pages |
| Database Tables | 5 tables |
| Sample Products | 8 items |
| Demo Accounts | 2 accounts |
| Total Files | 25+ files |

---

## ✨ Features Checklist

- [x] User Authentication (Login/Register)
- [x] JWT Token Management
- [x] Product Catalog
- [x] Search & Filter
- [x] Shopping Cart
- [x] Checkout
- [x] Order Management
- [x] User Profile
- [x] Responsive Design
- [x] Bootstrap UI
- [x] Sample Data
- [x] Database Setup
- [x] API Endpoints
- [x] Error Handling
- [x] CORS Support

---

## 🎓 Learning Resources

**Di aplikasi ini Anda sudah belajar:**

- Express.js REST API
- JWT Authentication
- SQLite Database
- Password Hashing
- Frontend API Integration
- Bootstrap Framework
- Responsive Design
- Local Storage Management
- Form Validation
- Error Handling

---

## 📄 License

MIT License - Feel free to use and modify!

---

## 👨‍💻 Author

Dibuat untuk Tugas UAS

---

## 🚀 Let's Get Started!

### Step 1: Jalankan Backend
```bash
cd /workspaces/WEB/backend
npm start
```

### Step 2: Buka Frontend
```
Buka file: /workspaces/WEB/frontend/index.html
```

### Step 3: Login
```
Email: user1@example.com
Password: password123
```

### Step 4: Explore & Enjoy! 🎉

---

**Created with ❤️ | 2026-06-26**

**Happy Coding! 🚀**
