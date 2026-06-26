const express = require('express');
const { db } = require('../config/database');

const router = express.Router();

// Get user profile
router.get('/:id', (req, res) => {
  const { id } = req.params;

  db.get(
    `SELECT id, username, email, full_name, phone, address, role, created_at FROM users WHERE id = ?`,
    [id],
    (err, row) => {
      if (err) {
        return res.status(500).json({ error: 'Error fetching user' });
      }
      if (!row) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.json(row);
    }
  );
});

// Update user profile
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { full_name, phone, address } = req.body;

  db.run(
    `UPDATE users SET full_name = ?, phone = ?, address = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?`,
    [full_name, phone, address, id],
    function(err) {
      if (err) {
        return res.status(500).json({ error: 'Error updating user' });
      }
      res.json({ message: 'User updated successfully' });
    }
  );
});

module.exports = router;
