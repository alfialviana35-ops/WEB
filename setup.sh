#!/bin/bash

# Setup dan jalankan aplikasi Toko Online

echo "================================"
echo "Toko Online - Setup Script"
echo "================================"
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js tidak terinstall. Silakan install Node.js terlebih dahulu."
    exit 1
fi

echo "✓ Node.js terdeteksi: $(node -v)"
echo ""

# Setup backend
echo "📦 Setting up backend..."
cd backend

if [ ! -d "node_modules" ]; then
    echo "Installing dependencies..."
    npm install
else
    echo "✓ Dependencies sudah terinstall"
fi

# Create .env file if it doesn't exist
if [ ! -f ".env" ]; then
    echo "Creating .env file..."
    cp .env.example .env
    echo "✓ File .env dibuat. Silakan edit jika diperlukan."
fi

echo ""
echo "================================"
echo "Setup selesai!"
echo "================================"
echo ""
echo "Untuk menjalankan aplikasi:"
echo ""
echo "1. Terminal 1 - Jalankan Backend:"
echo "   cd backend"
echo "   npm start"
echo ""
echo "2. Terminal 2 - Buka Frontend:"
echo "   Buka file frontend/index.html di browser"
echo "   Atau gunakan Live Server extension di VS Code"
echo ""
echo "3. (Optional) Tambahkan data sampel:"
echo "   cd backend"
echo "   node seed-data.js"
echo ""
echo "Backend akan berjalan di: http://localhost:5000"
echo "Frontend akan berjalan di: http://localhost:5500 (atau sesuai Live Server)"
echo ""
echo "Akun demo:"
echo "Email: user1@example.com"
echo "Password: password123"
