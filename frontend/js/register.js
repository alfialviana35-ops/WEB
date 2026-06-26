// Register functionality
document.addEventListener('DOMContentLoaded', () => {
  const registerForm = document.getElementById('registerForm');
  const errorMessage = document.getElementById('errorMessage');
  const successMessage = document.getElementById('successMessage');

  if (registerForm) {
    registerForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const full_name = document.getElementById('full_name').value;
      const username = document.getElementById('username').value;
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      const confirmPassword = document.getElementById('confirmPassword').value;

      // Validation
      if (password !== confirmPassword) {
        errorMessage.textContent = 'Password dan konfirmasi password tidak cocok';
        errorMessage.classList.remove('d-none');
        successMessage.classList.add('d-none');
        return;
      }

      if (password.length < 6) {
        errorMessage.textContent = 'Password minimal 6 karakter';
        errorMessage.classList.remove('d-none');
        successMessage.classList.add('d-none');
        return;
      }

      try {
        const response = await authAPI.register({
          full_name,
          username,
          email,
          password
        });

        // Save token and user info
        localStorage.setItem('token', response.token);
        localStorage.setItem('user', JSON.stringify(response.user));

        successMessage.textContent = 'Registrasi berhasil! Anda akan dialihkan ke dashboard...';
        successMessage.classList.remove('d-none');
        errorMessage.classList.add('d-none');

        // Redirect to dashboard after 2 seconds
        setTimeout(() => {
          window.location.href = 'dashboard.html';
        }, 2000);
      } catch (error) {
        errorMessage.textContent = error.message;
        errorMessage.classList.remove('d-none');
        successMessage.classList.add('d-none');
      }
    });
  }
});
