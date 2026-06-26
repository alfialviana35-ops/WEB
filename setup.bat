@echo off
REM Setup dan jalankan aplikasi Toko Online

echo ================================
echo Toko Online - Setup Script
echo ================================
echo.

REM Check if Node.js is installed
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo [X] Node.js tidak terinstall. Silakan install Node.js terlebih dahulu.
    exit /b 1
)

for /f "tokens=*" %%i in ('node -v') do set NODE_VERSION=%%i
echo [OK] Node.js terdeteksi: %NODE_VERSION%
echo.

REM Setup backend
echo [*] Setting up backend...
cd backend

if not exist "node_modules" (
    echo Installing dependencies...
    call npm install
) else (
    echo [OK] Dependencies sudah terinstall
)

REM Create .env file if it doesn't exist
if not exist ".env" (
    echo Creating .env file...
    copy .env.example .env
    echo [OK] File .env dibuat. Silakan edit jika diperlukan.
)

echo.
echo ================================
echo Setup selesai!
echo ================================
echo.
echo Untuk menjalankan aplikasi:
echo.
echo 1. Command Prompt 1 - Jalankan Backend:
echo    cd backend
echo    npm start
echo.
echo 2. Command Prompt 2 - Buka Frontend:
echo    Buka file frontend\index.html di browser
echo    Atau gunakan Live Server extension di VS Code
echo.
echo 3. (Optional) Tambahkan data sampel:
echo    cd backend
echo    node seed-data.js
echo.
echo Backend akan berjalan di: http://localhost:5000
echo Frontend akan berjalan di: http://localhost:5500 (atau sesuai Live Server)
echo.
echo Akun demo:
echo Email: user1@example.com
echo Password: password123
echo.
pause
