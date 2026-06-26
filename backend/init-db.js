// Initialize database and seed data
const { db, initializeDatabase } = require('./config/database');
const bcrypt = require('bcryptjs');

function seedDatabase() {
  console.log('Starting database initialization and seeding...');
  
  // Wait for tables to be created
  setTimeout(() => {
    // Sample users
    const users = [
      {
        username: 'user1',
        email: 'user1@example.com',
        password: 'password123',
        full_name: 'John Doe'
      },
      {
        username: 'user2',
        email: 'user2@example.com',
        password: 'password123',
        full_name: 'Jane Smith'
      }
    ];

    // Sample products
    const products = [
      {
        name: 'Laptop Gaming',
        description: 'Laptop gaming dengan spesifikasi tinggi',
        price: 12000000,
        stock: 10,
        category: 'Elektronik',
        image_url: 'https://via.placeholder.com/300x200?text=Laptop+Gaming'
      },
      {
        name: 'Smartphone Android',
        description: 'Smartphone dengan prosesor terbaru',
        price: 5000000,
        stock: 20,
        category: 'Elektronik',
        image_url: 'https://via.placeholder.com/300x200?text=Smartphone'
      },
      {
        name: 'Headphone Wireless',
        description: 'Headphone dengan noise cancellation',
        price: 1500000,
        stock: 30,
        category: 'Audio',
        image_url: 'https://via.placeholder.com/300x200?text=Headphone'
      },
      {
        name: 'Keyboard Mekanik',
        description: 'Keyboard gaming dengan switch mekanik',
        price: 1200000,
        stock: 25,
        category: 'Aksesori',
        image_url: 'https://via.placeholder.com/300x200?text=Keyboard'
      },
      {
        name: 'Mouse Gaming',
        description: 'Mouse dengan DPI tinggi untuk gaming',
        price: 800000,
        stock: 35,
        category: 'Aksesori',
        image_url: 'https://via.placeholder.com/300x200?text=Mouse'
      },
      {
        name: 'Monitor 4K',
        description: 'Monitor dengan resolusi 4K UHD',
        price: 4000000,
        stock: 8,
        category: 'Aksesori',
        image_url: 'https://via.placeholder.com/300x200?text=Monitor'
      },
      {
        name: 'Webcam HD',
        description: 'Webcam dengan resolusi 1080p',
        price: 500000,
        stock: 40,
        category: 'Aksesori',
        image_url: 'https://via.placeholder.com/300x200?text=Webcam'
      },
      {
        name: 'Power Bank 30000mAh',
        description: 'Power bank berkapasitas besar',
        price: 450000,
        stock: 50,
        category: 'Aksesori',
        image_url: 'https://via.placeholder.com/300x200?text=Power+Bank'
      }
    ];

    // Insert users
    let userCount = 0;
    users.forEach(user => {
      const hashedPassword = bcrypt.hashSync(user.password, 10);
      db.run(
        `INSERT OR IGNORE INTO users (username, email, password, full_name) VALUES (?, ?, ?, ?)`,
        [user.username, user.email, hashedPassword, user.full_name],
        (err) => {
          if (err) {
            console.error(`✗ Error inserting user ${user.username}:`, err.message);
          } else {
            console.log(`✓ User ${user.username} added`);
          }
          userCount++;
        }
      );
    });

    // Insert products
    let productCount = 0;
    products.forEach(product => {
      db.run(
        `INSERT OR IGNORE INTO products (name, description, price, stock, category, image_url, seller_id)
         VALUES (?, ?, ?, ?, ?, ?, ?)`,
        [product.name, product.description, product.price, product.stock, product.category, product.image_url, 1],
        (err) => {
          if (err) {
            console.error(`✗ Error inserting product ${product.name}:`, err.message);
          } else {
            console.log(`✓ Product ${product.name} added`);
          }
          productCount++;
        }
      );
    });

    setTimeout(() => {
      console.log('\n✓ Database initialization and seeding completed!');
      console.log(`✓ ${userCount} users added`);
      console.log(`✓ ${productCount} products added`);
      console.log('\nDemo account:');
      console.log('Email: user1@example.com');
      console.log('Password: password123');
      process.exit(0);
    }, 2000);
  }, 1000);
}

// Initialize and seed
initializeDatabase();
seedDatabase();
