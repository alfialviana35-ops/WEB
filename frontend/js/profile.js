// Profile functionality
document.addEventListener('DOMContentLoaded', async () => {
  const user = JSON.parse(localStorage.getItem('user')) || {};

  if (!user.id) {
    window.location.href = 'index.html';
    return;
  }

  // Load user profile
  try {
    const profile = await usersAPI.getProfile(user.id);

    document.getElementById('username').value = profile.username;
    document.getElementById('email').value = profile.email;
    document.getElementById('full_name').value = profile.full_name || '';
    document.getElementById('phone').value = profile.phone || '';
    document.getElementById('address').value = profile.address || '';
  } catch (error) {
    console.error('Error loading profile:', error);
  }

  // Handle form submission
  document.getElementById('profileForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const full_name = document.getElementById('full_name').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;

    try {
      await usersAPI.updateProfile(user.id, {
        full_name,
        phone,
        address
      });

      // Update localStorage
      user.full_name = full_name;
      localStorage.setItem('user', JSON.stringify(user));

      document.getElementById('successMessage').classList.remove('d-none');
      document.getElementById('errorMessage').classList.add('d-none');

      setTimeout(() => {
        document.getElementById('successMessage').classList.add('d-none');
      }, 3000);
    } catch (error) {
      document.getElementById('errorMessage').textContent = error.message;
      document.getElementById('errorMessage').classList.remove('d-none');
    }
  });
});
