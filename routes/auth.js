// routes/auth.js

const express = require('express');
const router = express.Router();

// Dummy in-memory user database
let users = [];

// Registration endpoint
router.post('/register', (req, res) => {
    const { username, password } = req.body;
    // Basic validation
    if (!username || !password) {
        return res.status(400).json({ message: 'Username and password are required' });
    }
    // Check if user already exists
    const existingUser = users.find(user => user.username === username);
    if (existingUser) {
        return res.status(409).json({ message: 'User already exists' });
    }
    // Create new user
    const newUser = { username, password }; // In a real application, hash the password!
    users.push(newUser);
    return res.status(201).json({ message: 'User registered successfully' });
});

// Login endpoint
router.post('/login', (req, res) => {
    const { username, password } = req.body;
    // Find the user
    const user = users.find(user => user.username === username);
    if (!user || user.password !== password) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }
    return res.status(200).json({ message: 'Login successful' });
});

module.exports = router;
