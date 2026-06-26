const express = require('express');
const { db } = require('../config/database');

const router = express.Router();

// Get all products
router.get('/', (req, res) => {
  const { category, search } = req.query;

  let query = 'SELECT * FROM products WHERE stock > 0';
  const params = [];

  if (category) {
    query += ' AND category = ?';
    params.push(category);
  }

  if (search) {
    query += ' AND (name LIKE ? OR description LIKE ?)';
    params.push(`%${search}%`, `%${search}%`);
  }

  db.all(query, params, (err, rows) => {
    if (err) {
      return res.status(500).json({ error: 'Error fetching products' });
    }
    res.json(rows || []);
  });
});

// Get product by id
router.get('/:id', (req, res) => {
  const { id } = req.params;

  db.get('SELECT * FROM products WHERE id = ?', [id], (err, row) => {
    if (err) {
      return res.status(500).json({ error: 'Error fetching product' });
    }
    if (!row) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.json(row);
  });
});

// Get categories
router.get('/categories/list', (req, res) => {
  db.all('SELECT DISTINCT category FROM products WHERE category IS NOT NULL', (err, rows) => {
    if (err) {
      return res.status(500).json({ error: 'Error fetching categories' });
    }
    const categories = rows.map(r => r.category);
    res.json(categories);
  });
});

// Create product (admin/seller only)
router.post('/', (req, res) => {
  const { name, description, price, stock, category, image_url, seller_id } = req.body;

  if (!name || !price) {
    return res.status(400).json({ error: 'Name and price are required' });
  }

  db.run(
    `INSERT INTO products (name, description, price, stock, category, image_url, seller_id)
     VALUES (?, ?, ?, ?, ?, ?, ?)`,
    [name, description, price, stock || 0, category, image_url, seller_id || 1],
    function(err) {
      if (err) {
        return res.status(500).json({ error: 'Error creating product' });
      }
      res.status(201).json({
        message: 'Product created',
        id: this.lastID
      });
    }
  );
});

module.exports = router;
