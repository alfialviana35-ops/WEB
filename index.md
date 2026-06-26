---
layout: default
title: Toko Online - E-Commerce Application
---

# 🎉 Toko Online - E-Commerce Application

Aplikasi toko online lengkap dengan sistem login, registrasi, dashboard, katalog produk, keranjang belanja, dan riwayat pesanan.

## 🚀 Fitur Utama

### ✅ Sistem Authentication
- Registrasi pengguna baru
- Login dengan email dan password
- JWT token-based authentication
- Session management yang aman

### ✅ Toko Online
- Katalog produk lengkap
- Search dan filter by kategori
- Detail produk dengan harga dan stok
- 8 produk sampel siap pakai

### ✅ Keranjang Belanja
- Tambah/hapus produk
- Update jumlah produk
- Kalkulasi total otomatis
- Checkout yang mudah

### ✅ Dashboard & Profil
- Welcome dashboard
- Manajemen profil pengguna
- Riwayat pesanan lengkap

---

## 🛠️ Tech Stack

| Komponen | Technology |
|----------|-----------|
| **Backend** | Node.js + Express.js |
| **Database** | SQLite3 |
| **Frontend** | HTML5 + CSS3 + JavaScript |
| **UI Framework** | Bootstrap 5 |
| **Authentication** | JWT + bcryptjs |

---

## 📖 Dokumentasi

- 📘 [**PANDUAN.md**](PANDUAN.md) - Panduan setup lengkap (BACA DULU!)
- 📕 [**RINGKASAN.md**](RINGKASAN.md) - Project summary
- 📙 [**README.md**](README.md) - Dokumentasi teknis

---

## 🔐 Demo Account

```
Email:    user1@example.com
Password: password123
```

Atau buat akun baru dengan fitur registrasi!

---

## 🎯 Cara Menggunakan

### 1. Setup Backend
```bash
cd backend
npm install
node init-db.js
npm start
```

### 2. Buka Frontend
```
Buka file: frontend/index.html di browser
Atau gunakan Live Server di VS Code
```

### 3. Login & Explore!
- Gunakan akun demo atau buat akun baru
- Jelajahi produk
- Tambahkan ke keranjang
- Checkout pesanan

---

## 📂 Struktur Project

```
WEB/
├── backend/                    # Node.js API Server
│   ├── server.js              # Main server
│   ├── package.json           # Dependencies
│   ├── config/database.js     # Database setup
│   └── routes/                # API endpoints
│
├── frontend/                   # HTML/CSS/JS Frontend
│   ├── index.html             # Login page
│   ├── dashboard.html         # Dashboard
│   ├── shop.html              # Produk
│   ├── cart.html              # Keranjang
│   ├── profile.html           # Profil
│   ├── js/                    # JavaScript logic
│   └── css/                   # Styling
│
├── PANDUAN.md                 # Setup guide
├── RINGKASAN.md               # Project summary
└── README.md                  # Technical docs
```

---

## 🛒 Sample Products

Tersedia 8 produk dengan kategori:
- **Elektronik:** Laptop Gaming, Smartphone
- **Audio:** Headphone Wireless
- **Aksesori:** Keyboard, Mouse, Monitor, Webcam, Power Bank

---

## 🚦 API Endpoints

**Base URL:** `http://localhost:5000/api`

```
Auth:
  POST   /auth/register
  POST   /auth/login
  GET    /auth/verify

Products:
  GET    /products
  GET    /products/:id
  GET    /products/categories/list

Users:
  GET    /users/:id
  PUT    /users/:id

Orders:
  GET    /orders/user/:id
  GET    /orders/:id
  POST   /orders
```

---

## 📊 Database Tables

- **users** - User accounts
- **products** - Product catalog
- **orders** - Customer orders
- **order_items** - Order details
- **cart** - Shopping cart

---

## 💻 System Requirements

- Node.js 14+
- npm atau yarn
- Browser modern (Chrome, Firefox, Safari, Edge)
- 100MB disk space

---

## 🐛 Troubleshooting

### Backend tidak jalan?
```bash
cd backend && npm install && npm start
```

### Port 5000 conflict?
Edit `backend/.env` dan ubah PORT

### Reset database?
```bash
cd backend && node init-db.js
```

Lihat [PANDUAN.md](PANDUAN.md) untuk troubleshooting lengkap!

---

## ✨ Features Checklist

- [x] User registration
- [x] User login with JWT
- [x] Product catalog
- [x] Search & filter
- [x] Shopping cart
- [x] Checkout
- [x] Order history
- [x] User profile
- [x] Responsive design
- [x] Sample data
- [x] Database setup
- [x] API endpoints

---

## 📚 Yang Bisa Dikembangkan

- [ ] Payment gateway (Midtrans, PayPal)
- [ ] Email notifications
- [ ] Admin panel
- [ ] Product reviews & ratings
- [ ] Wishlist
- [ ] Real-time notifications
- [ ] Product image upload
- [ ] Analytics dashboard

---

## 📝 License

MIT License - Feel free to use and modify!

---

## 👨‍💻 Author

Dibuat untuk Tugas UAS

---

## 🚀 Get Started Now!

1. **Baca:** [PANDUAN.md](PANDUAN.md)
2. **Setup:** `cd backend && npm install && npm start`
3. **Login:** user1@example.com / password123
4. **Explore:** Belanja, checkout, lihat pesanan
5. **Develop:** Tambah fitur sesuai kebutuhan

---

**Happy Coding! 🎉**

Last Updated: 2026-06-26
