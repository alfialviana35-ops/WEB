const express = require('express');
const { db } = require('../config/database');

const router = express.Router();

// Get user's orders
router.get('/user/:user_id', (req, res) => {
  const { user_id } = req.params;

  db.all(
    `SELECT o.*, COUNT(oi.id) as item_count, SUM(oi.quantity) as total_items
     FROM orders o
     LEFT JOIN order_items oi ON o.id = oi.order_id
     WHERE o.user_id = ?
     GROUP BY o.id
     ORDER BY o.created_at DESC`,
    [user_id],
    (err, rows) => {
      if (err) {
        return res.status(500).json({ error: 'Error fetching orders' });
      }
      res.json(rows || []);
    }
  );
});

// Get order details
router.get('/:id', (req, res) => {
  const { id } = req.params;

  db.get(
    `SELECT * FROM orders WHERE id = ?`,
    [id],
    (err, order) => {
      if (err) {
        return res.status(500).json({ error: 'Error fetching order' });
      }
      if (!order) {
        return res.status(404).json({ error: 'Order not found' });
      }

      db.all(
        `SELECT oi.*, p.name, p.image_url FROM order_items oi
         JOIN products p ON oi.product_id = p.id
         WHERE oi.order_id = ?`,
        [id],
        (err, items) => {
          if (err) {
            return res.status(500).json({ error: 'Error fetching order items' });
          }
          res.json({ ...order, items: items || [] });
        }
      );
    }
  );
});

// Create order from cart
router.post('/', (req, res) => {
  const { user_id } = req.body;

  if (!user_id) {
    return res.status(400).json({ error: 'User ID is required' });
  }

  // Get cart items
  db.all(
    `SELECT c.*, p.price FROM cart c
     JOIN products p ON c.product_id = p.id
     WHERE c.user_id = ?`,
    [user_id],
    (err, cartItems) => {
      if (err || !cartItems || cartItems.length === 0) {
        return res.status(400).json({ error: 'Cart is empty' });
      }

      // Calculate total
      const total_amount = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

      // Create order
      db.run(
        `INSERT INTO orders (user_id, total_amount) VALUES (?, ?)`,
        [user_id, total_amount],
        function(err) {
          if (err) {
            return res.status(500).json({ error: 'Error creating order' });
          }

          const orderId = this.lastID;

          // Add order items
          cartItems.forEach(item => {
            db.run(
              `INSERT INTO order_items (order_id, product_id, quantity, price) VALUES (?, ?, ?, ?)`,
              [orderId, item.product_id, item.quantity, item.price]
            );
          });

          // Clear cart
          db.run(`DELETE FROM cart WHERE user_id = ?`, [user_id]);

          res.status(201).json({
            message: 'Order created successfully',
            order_id: orderId,
            total_amount
          });
        }
      );
    }
  );
});

module.exports = router;
