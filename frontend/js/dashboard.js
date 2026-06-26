// Dashboard functionality
document.addEventListener('DOMContentLoaded', async () => {
  const user = JSON.parse(localStorage.getItem('user')) || {};

  // Display user info
  document.getElementById('userName').textContent = user.full_name || user.username;
  document.getElementById('userEmail').textContent = user.email;
  document.getElementById('joinDate').textContent = new Date().toLocaleDateString('id-ID');

  // Load featured products
  try {
    const products = await productsAPI.getAll({ limit: 6 });
    const featuredContainer = document.getElementById('featuredProducts');

    if (products && products.length > 0) {
      featuredContainer.innerHTML = products.map(product => `
        <div class="col-md-4 mb-4">
          <div class="card h-100">
            <img src="${product.image_url || 'https://via.placeholder.com/200'}" class="card-img-top" alt="${product.name}">
            <div class="card-body">
              <h5 class="card-title">${product.name}</h5>
              <p class="card-text text-muted small">${product.description || 'Produk berkualitas tinggi'}</p>
              <p class="card-text fw-bold">${formatCurrency(product.price)}</p>
              <small class="text-success">Stok: ${product.stock}</small>
            </div>
            <div class="card-footer bg-light">
              <button class="btn btn-primary btn-sm w-100" onclick="viewProduct(${product.id})">
                Lihat Detail
              </button>
            </div>
          </div>
        </div>
      `).join('');
    }
  } catch (error) {
    console.error('Error loading products:', error);
  }
});

function viewProduct(productId) {
  window.location.href = `shop.html?productId=${productId}`;
}
