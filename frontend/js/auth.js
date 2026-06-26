// Login functionality
document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('loginForm');
  const errorMessage = document.getElementById('errorMessage');

  if (loginForm) {
    loginForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;

      try {
        const response = await authAPI.login({ email, password });

        // Save token and user info
        localStorage.setItem('token', response.token);
        localStorage.setItem('user', JSON.stringify(response.user));

        // Redirect to dashboard
        window.location.href = 'dashboard.html';
      } catch (error) {
        errorMessage.textContent = error.message;
        errorMessage.classList.remove('d-none');
      }
    });
  }
});
