const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const mysql = require('mysql2');
const cors = require('cors');
const nodemailer = require('nodemailer');
const crypto = require('crypto');
const app = express();
const port = 3002;  // Changed port to 3001

// Setup middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Setup MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Anand2040@',
  database: 'houserent'
});

connection.connect(err => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the MySQL database.');
});

// Register endpoint
app.post('/register', (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).send('Please provide all required fields: name, email, password');
  }

  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(password, salt);

  const query = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
  connection.query(query, [name, email, hashedPassword], (err, result) => {
    if (err) {
      console.error('Error registering new user:', err);
      return res.status(500).send('Error registering new user');
    }
    res.status(200).send('User registered successfully!');
  });
});

// Login endpoint
// Login endpoint
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  const query = 'SELECT * FROM users WHERE email = ?';
  connection.query(query, [email], (err, results) => {
    if (err) {
      console.error('Error logging in:', err);
      return res.status(500).send('Error logging in');
    }
    if (results.length === 0) {
      return res.status(400).send('Invalid email or password');
    }

    const user = results[0];
    const isPasswordValid = bcrypt.compareSync(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).send('Invalid email or password');
    }

    res.status(200).send({ user });
  });
});


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
