// Cart functionality
document.addEventListener('DOMContentLoaded', () => {
  loadCart();

  document.getElementById('checkoutBtn').addEventListener('click', checkout);
});

function loadCart() {
  const cart = cartManager.getCart();
  const cartItemsContainer = document.getElementById('cartItems');
  const emptyCart = document.getElementById('emptyCart');
  const cartTable = document.getElementById('cartTable');

  if (cart.length === 0) {
    cartTable.style.display = 'none';
    emptyCart.style.display = 'block';
    updateCartSummary(0);
    return;
  }

  emptyCart.style.display = 'none';
  cartTable.style.display = 'table';

  cartItemsContainer.innerHTML = cart.map(item => `
    <tr>
      <td>
        <strong>${item.name}</strong>
      </td>
      <td>${formatCurrency(item.price)}</td>
      <td>
        <input type="number" class="form-control" style="width: 80px;" value="${item.quantity}" 
               onchange="updateQuantity(${item.id}, this.value)" min="1">
      </td>
      <td>${formatCurrency(item.price * item.quantity)}</td>
      <td>
        <button class="btn btn-danger btn-sm" onclick="removeFromCart(${item.id})">
          <i class="fas fa-trash"></i>
        </button>
      </td>
    </tr>
  `).join('');

  updateCartSummary();
}

function updateQuantity(productId, quantity) {
  quantity = parseInt(quantity);
  
  if (quantity < 1) {
    removeFromCart(productId);
  } else {
    cartManager.updateQuantity(productId, quantity);
    loadCart();
  }
}

function removeFromCart(productId) {
  cartManager.removeFromCart(productId);
  loadCart();
}

function updateCartSummary(customTotal = null) {
  const total = customTotal !== null ? customTotal : cartManager.getCartTotal();
  const tax = total * 0.1;
  const finalTotal = total + tax;

  document.getElementById('subtotal').textContent = formatCurrency(total);
  document.getElementById('tax').textContent = formatCurrency(tax);
  document.getElementById('total').textContent = formatCurrency(finalTotal);
}

async function checkout() {
  const cart = cartManager.getCart();
  
  if (cart.length === 0) {
    alert('Keranjang Anda kosong!');
    return;
  }

  const user = JSON.parse(localStorage.getItem('user')) || {};

  if (!user.id) {
    alert('Silakan login terlebih dahulu');
    window.location.href = 'index.html';
    return;
  }

  try {
    const response = await ordersAPI.create({ user_id: user.id });

    cartManager.clearCart();
    alert('Pesanan berhasil dibuat! Nomor pesanan: ' + response.order_id);
    window.location.href = 'order-history.html';
  } catch (error) {
    alert('Gagal membuat pesanan: ' + error.message);
  }
}
