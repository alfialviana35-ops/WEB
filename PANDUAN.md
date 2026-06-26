# 🚀 PANDUAN MENJALANKAN APLIKASI TOKO ONLINE

## ✅ Status Setup
- ✓ Backend disetup dengan Express.js
- ✓ Frontend disetup dengan HTML/CSS/JavaScript + Bootstrap
- ✓ Database (SQLite) sudah diinisialisasi
- ✓ 8 produk sampel sudah ditambahkan
- ✓ 2 akun demo sudah dibuat

---

## 📋 Cara Menjalankan Aplikasi

### Step 1️⃣ : Jalankan Backend Server

Buka terminal baru dan jalankan:

```bash
cd /workspaces/WEB/backend
npm start
```

Anda akan melihat:
```
Server running on http://localhost:5000
```

**Jangan tutup terminal ini!**

---

### Step 2️⃣ : Buka Frontend di Browser

Ada 2 cara untuk membuka frontend:

#### Cara A: Menggunakan Live Server (Recommended)
1. Di VS Code, buka file `frontend/index.html`
2. Klik kanan pada file → "Open with Live Server"
3. Browser akan terbuka otomatis di `http://localhost:5500`

#### Cara B: Membuka langsung di browser
1. Buka browser
2. Ketik: `file:///workspaces/WEB/frontend/index.html`
3. Tekan Enter

---

## 🔐 Login dengan Akun Demo

Setelah membuka aplikasi, gunakan akun berikut untuk login:

```
Email:    user1@example.com
Password: password123
```

Atau buat akun baru dengan klik "Daftar di sini"

---

## 📱 Cara Menggunakan Aplikasi

### 1. Login/Register
- Masukkan email dan password
- Klik tombol "Masuk"

### 2. Dashboard
- Lihat welcome page dan produk unggulan
- Navigasi menggunakan menu di sidebar atau navbar

### 3. Belanja
- Klik "Belanja Produk" atau navigasi ke shop.html
- Gunakan search untuk mencari produk
- Filter berdasarkan kategori
- Klik "Tambah ke Keranjang" untuk menambahkan produk

### 4. Keranjang
- Lihat semua produk yang ditambahkan
- Ubah jumlah produk
- Hapus produk jika ingin
- Klik "Checkout" untuk membuat pesanan

### 5. Riwayat Pesanan
- Lihat semua pesanan yang telah dibuat
- Klik "Lihat Detail" untuk melihat detail pesanan

### 6. Profil
- Edit data pribadi (nama, telepon, alamat)
- Klik "Simpan Perubahan" untuk menyimpan

---

## 🛒 Produk Sampel yang Tersedia

1. **Laptop Gaming** - Rp 12.000.000
2. **Smartphone Android** - Rp 5.000.000
3. **Monitor 4K** - Rp 4.000.000
4. **Headphone Wireless** - Rp 1.500.000
5. **Keyboard Mekanik** - Rp 1.200.000
6. **Mouse Gaming** - Rp 800.000
7. **Webcam HD** - Rp 500.000
8. **Power Bank 30000mAh** - Rp 450.000

---

## 🔗 URL Penting

- **Backend API:** `http://localhost:5000/api`
- **Frontend (Home):** `http://localhost:5500/frontend/index.html`
- **Dashboard:** `http://localhost:5500/frontend/dashboard.html`
- **Shop:** `http://localhost:5500/frontend/shop.html`
- **Cart:** `http://localhost:5500/frontend/cart.html`
- **Profile:** `http://localhost:5500/frontend/profile.html`
- **Orders:** `http://localhost:5500/frontend/order-history.html`

---

## 🐛 Troubleshooting

### Backend tidak bisa connect
- ✓ Pastikan Node.js sudah terinstall: `node -v`
- ✓ Pastikan di folder `backend` sudah run: `npm install`
- ✓ Coba jalankan: `npm start` di folder backend

### Port 5000 sudah digunakan
- Edit file `backend/.env`
- Ubah `PORT=5000` menjadi `PORT=5001`
- Jalankan kembali

### CORS Error
- Pastikan backend berjalan di port 5000
- Pastikan file `frontend/js/api.js` menggunakan URL: `http://localhost:5000/api`

### Frontend tidak bisa connect ke backend
- Cek console browser (F12 → Console tab)
- Pastikan backend sudah running
- Cek file `frontend/js/api.js` baris API_BASE_URL

### Login tidak berhasil
- Cek console browser untuk melihat error
- Pastikan email dan password benar
- Coba dengan akun demo terlebih dahulu

---

## 📚 File Penting untuk Diubah

### Jika ingin mengganti port backend:
- File: `backend/.env`
- Ubah: `PORT=5000` menjadi port yang diinginkan

### Jika ingin mengganti API URL di frontend:
- File: `frontend/js/api.js`
- Ubah: `const API_BASE_URL = 'http://localhost:5000/api'`

### Jika ingin menambahkan produk baru:
- Langsung bisa melalui API
- Atau buat file script sendiri di backend

---

## 🚦 API Endpoints yang Tersedia

### Auth
```
POST   /api/auth/register      - Daftar akun
POST   /api/auth/login         - Login
GET    /api/auth/verify        - Verifikasi token
```

### Products
```
GET    /api/products           - Dapatkan semua produk
GET    /api/products/:id       - Dapatkan produk spesifik
GET    /api/products/categories/list - Dapatkan kategori
POST   /api/products           - Tambah produk (admin)
```

### Users
```
GET    /api/users/:id          - Dapatkan profil
PUT    /api/users/:id          - Update profil
```

### Orders
```
GET    /api/orders/user/:id    - Dapatkan pesanan user
GET    /api/orders/:id         - Dapatkan detail pesanan
POST   /api/orders             - Buat pesanan baru
```

---

## 💡 Tips & Trik

### Hot Reload untuk Backend
Jika ingin backend auto-restart saat file berubah:
```bash
npm install -D nodemon
npm run dev
```

### Debug dengan Postman
1. Download Postman: https://www.postman.com/downloads/
2. Buat request ke: `http://localhost:5000/api/products`
3. Lihat response dari API

### Clear Browser Cache
- Buka DevTools (F12)
- Right-click refresh → "Empty cache and hard refresh"

---

## 📖 Dokumentasi Lebih Lengkap

Lihat file `README.md` untuk dokumentasi lengkap tentang:
- Project structure
- API endpoints
- Database schema
- Troubleshooting detail

---

## ✨ Fitur yang Bisa Dikembangkan

- [ ] Payment gateway (Midtrans, PayPal)
- [ ] Email notifications
- [ ] Admin panel
- [ ] Product reviews & ratings
- [ ] Wishlist
- [ ] Real-time notifications
- [ ] Product images upload
- [ ] Order tracking

---

## 📞 Bantuan Lebih Lanjut

Jika ada masalah:
1. Cek console browser (F12)
2. Cek terminal backend untuk error
3. Cek file README.md untuk troubleshooting
4. Pastikan semua step sudah diikuti dengan benar

---

**Selamat menggunakan aplikasi Toko Online! 🎉**

Last Updated: 2026-06-26
