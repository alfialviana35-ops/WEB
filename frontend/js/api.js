// API Configuration
const API_BASE_URL = 'http://localhost:5000/api';

// Get token from localStorage
function getToken() {
  return localStorage.getItem('token');
}

// Check if user is logged in
function isLoggedIn() {
  return !!getToken();
}

// Logout
function logout() {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  window.location.href = 'index.html';
}

// API call helper
async function apiCall(endpoint, method = 'GET', body = null) {
  const headers = {
    'Content-Type': 'application/json'
  };

  const token = getToken();
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const options = {
    method,
    headers
  };

  if (body) {
    options.body = JSON.stringify(body);
  }

  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, options);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || 'API Error');
    }

    return data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
}

// Auth API calls
const authAPI = {
  register: (userData) => apiCall('/auth/register', 'POST', userData),
  login: (credentials) => apiCall('/auth/login', 'POST', credentials),
  verify: () => apiCall('/auth/verify')
};

// Products API calls
const productsAPI = {
  getAll: (params = {}) => {
    const queryString = new URLSearchParams(params).toString();
    return apiCall(`/products?${queryString}`);
  },
  getById: (id) => apiCall(`/products/${id}`),
  getCategories: () => apiCall('/products/categories/list'),
  create: (productData) => apiCall('/products', 'POST', productData)
};

// Users API calls
const usersAPI = {
  getProfile: (userId) => apiCall(`/users/${userId}`),
  updateProfile: (userId, userData) => apiCall(`/users/${userId}`, 'PUT', userData)
};

// Orders API calls
const ordersAPI = {
  getByUser: (userId) => apiCall(`/orders/user/${userId}`),
  getById: (orderId) => apiCall(`/orders/${orderId}`),
  create: (orderData) => apiCall('/orders', 'POST', orderData)
};

// Cart management (localStorage based)
const cartManager = {
  getCart: () => JSON.parse(localStorage.getItem('cart')) || [],
  
  saveCart: (cart) => {
    localStorage.setItem('cart', JSON.stringify(cart));
  },

  addToCart: (product, quantity = 1) => {
    const cart = cartManager.getCart();
    const existingItem = cart.find(item => item.id === product.id);

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        image_url: product.image_url,
        quantity
      });
    }

    cartManager.saveCart(cart);
    return cart;
  },

  removeFromCart: (productId) => {
    const cart = cartManager.getCart().filter(item => item.id !== productId);
    cartManager.saveCart(cart);
    return cart;
  },

  updateQuantity: (productId, quantity) => {
    const cart = cartManager.getCart();
    const item = cart.find(item => item.id === productId);

    if (item) {
      if (quantity <= 0) {
        return cartManager.removeFromCart(productId);
      }
      item.quantity = quantity;
      cartManager.saveCart(cart);
    }

    return cart;
  },

  clearCart: () => {
    localStorage.removeItem('cart');
    return [];
  },

  getCartCount: () => {
    const cart = cartManager.getCart();
    return cart.reduce((sum, item) => sum + item.quantity, 0);
  },

  getCartTotal: () => {
    const cart = cartManager.getCart();
    return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  }
};

// Format currency
function formatCurrency(amount) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0
  }).format(amount);
}

// Format date
function formatDate(dateString) {
  const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
  return new Date(dateString).toLocaleDateString('id-ID', options);
}

// Setup logout button
document.addEventListener('DOMContentLoaded', () => {
  const logoutBtn = document.getElementById('logoutBtn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', (e) => {
      e.preventDefault();
      logout();
    });
  }

  // Check if user is logged in on protected pages
  const protectedPages = ['dashboard.html', 'shop.html', 'cart.html', 'profile.html', 'order-history.html'];
  const currentPage = window.location.pathname.split('/').pop();

  if (protectedPages.includes(currentPage) && !isLoggedIn()) {
    window.location.href = 'index.html';
  }
});
