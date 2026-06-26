// Order history functionality
const orderDetailsModal = new bootstrap.Modal(document.getElementById('orderDetailsModal'));

document.addEventListener('DOMContentLoaded', async () => {
  const user = JSON.parse(localStorage.getItem('user')) || {};

  if (!user.id) {
    window.location.href = 'index.html';
    return;
  }

  loadOrders(user.id);
});

async function loadOrders(userId) {
  try {
    const orders = await ordersAPI.getByUser(userId);
    const container = document.getElementById('ordersContainer');
    const emptyOrders = document.getElementById('emptyOrders');

    if (orders && orders.length > 0) {
      emptyOrders.style.display = 'none';
      
      container.innerHTML = orders.map(order => `
        <div class="card mb-3">
          <div class="card-body">
            <div class="row">
              <div class="col-md-8">
                <h5 class="card-title">Pesanan #${order.id}</h5>
                <p class="card-text">
                  <small class="text-muted">
                    ${formatDate(order.created_at)}
                  </small>
                </p>
                <p class="card-text">
                  <span class="badge bg-primary">${order.status}</span>
                  <span class="badge bg-warning">${order.payment_status}</span>
                </p>
              </div>
              <div class="col-md-4 text-end">
                <h6>${formatCurrency(order.total_amount)}</h6>
                <button class="btn btn-sm btn-info" onclick="viewOrderDetails(${order.id})">
                  Lihat Detail
                </button>
              </div>
            </div>
          </div>
        </div>
      `).join('');
    } else {
      container.style.display = 'none';
    }
  } catch (error) {
    console.error('Error loading orders:', error);
  }
}

async function viewOrderDetails(orderId) {
  try {
    const order = await ordersAPI.getById(orderId);
    const content = document.getElementById('orderDetailsContent');

    let itemsHTML = '';
    if (order.items && order.items.length > 0) {
      itemsHTML = order.items.map(item => `
        <tr>
          <td>${item.name}</td>
          <td>${item.quantity}</td>
          <td>${formatCurrency(item.price)}</td>
          <td>${formatCurrency(item.price * item.quantity)}</td>
        </tr>
      `).join('');
    }

    content.innerHTML = `
      <div class="mb-3">
        <h6>Informasi Pesanan</h6>
        <p><strong>Nomor Pesanan:</strong> #${order.id}</p>
        <p><strong>Tanggal:</strong> ${formatDate(order.created_at)}</p>
        <p><strong>Status:</strong> <span class="badge bg-primary">${order.status}</span></p>
        <p><strong>Status Pembayaran:</strong> <span class="badge bg-warning">${order.payment_status}</span></p>
      </div>

      <div class="mb-3">
        <h6>Detail Produk</h6>
        <table class="table table-sm">
          <thead>
            <tr>
              <th>Produk</th>
              <th>Jumlah</th>
              <th>Harga</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            ${itemsHTML}
          </tbody>
        </table>
      </div>

      <div class="mb-3">
        <h6>Total Pesanan</h6>
        <h5>${formatCurrency(order.total_amount)}</h5>
      </div>
    `;

    orderDetailsModal.show();
  } catch (error) {
    console.error('Error loading order details:', error);
    alert('Gagal memuat detail pesanan');
  }
}
