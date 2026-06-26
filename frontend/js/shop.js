// Shop functionality
let currentSelectedProduct = null;
const addToCartModal = new bootstrap.Modal(document.getElementById('addToCartModal'));

document.addEventListener('DOMContentLoaded', async () => {
  // Load categories
  try {
    const categories = await productsAPI.getCategories();
    const categoryFilter = document.getElementById('categoryFilter');

    if (categories && categories.length > 0) {
      categoryFilter.innerHTML += categories.map(cat => 
        `<option value="${cat}">${cat}</option>`
      ).join('');
    }
  } catch (error) {
    console.error('Error loading categories:', error);
  }

  // Load products
  loadProducts();

  // Event listeners
  document.getElementById('searchBtn').addEventListener('click', loadProducts);
  document.getElementById('searchInput').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') loadProducts();
  });
  document.getElementById('categoryFilter').addEventListener('change', loadProducts);

  // Add to cart button
  document.getElementById('confirmAddToCart').addEventListener('click', () => {
    const quantity = parseInt(document.getElementById('quantity').value);
    
    if (currentSelectedProduct) {
      cartManager.addToCart(currentSelectedProduct, quantity);
      addToCartModal.hide();
      
      // Show success notification
      alert('Produk berhasil ditambahkan ke keranjang!');
      updateCartCount();
    }
  });

  updateCartCount();
});

async function loadProducts() {
  const searchQuery = document.getElementById('searchInput').value;
  const category = document.getElementById('categoryFilter').value;

  try {
    const products = await productsAPI.getAll({
      search: searchQuery,
      category: category
    });

    const container = document.getElementById('productsContainer');

    if (products && products.length > 0) {
      container.innerHTML = products.map(product => `
        <div class="col-md-4 mb-4">
          <div class="card h-100">
            <img src="${product.image_url || 'https://via.placeholder.com/200'}" class="card-img-top" alt="${product.name}" style="height: 200px; object-fit: cover;">
            <div class="card-body">
              <h5 class="card-title">${product.name}</h5>
              <p class="card-text text-muted small">${product.description || ''}</p>
              <p class="card-text fw-bold text-primary">${formatCurrency(product.price)}</p>
              <small class="text-muted">Kategori: ${product.category || 'Umum'}</small><br>
              <small class="text-success">Stok: ${product.stock}</small>
            </div>
            <div class="card-footer bg-light">
              <button class="btn btn-primary btn-sm w-100" onclick="openAddToCartModal(${JSON.stringify(product).replace(/"/g, '&quot;')})">
                <i class="fas fa-cart-plus"></i> Tambah ke Keranjang
              </button>
            </div>
          </div>
        </div>
      `).join('');
    } else {
      container.innerHTML = '<div class="alert alert-info w-100">Tidak ada produk ditemukan</div>';
    }
  } catch (error) {
    console.error('Error loading products:', error);
  }
}

function openAddToCartModal(product) {
  currentSelectedProduct = product;
  document.getElementById('productName').textContent = product.name;
  document.getElementById('productPrice').textContent = `Harga: ${formatCurrency(product.price)}`;
  document.getElementById('quantity').value = 1;
  addToCartModal.show();
}

function updateCartCount() {
  const count = cartManager.getCartCount();
  document.getElementById('cartCount').textContent = count;
}
