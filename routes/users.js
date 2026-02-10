const express = require('express');
const router = express.Router();

// Mock data for users and leaderboard (in a real application, this would come from a database)
let users = [];
let leaderboard = [];

// Endpoint to get user data
router.get('/users', (req, res) => {
    res.json(users);
});

// Endpoint to get leaderboard data
router.get('/leaderboard', (req, res) => {
    res.json(leaderboard);
});

// Endpoint to add a new user
router.post('/users', (req, res) => {
    const newUser = req.body;
    users.push(newUser);
    res.status(201).json(newUser);
});

// Endpoint to update a user
router.put('/users/:id', (req, res) => {
    const { id } = req.params;
    const userIndex = users.findIndex(u => u.id === id);
    if (userIndex !== -1) {
        users[userIndex] = { ...users[userIndex], ...req.body };
        res.json(users[userIndex]);
    } else {
        res.status(404).send('User not found');
    }
});

// Endpoint to remove a user
router.delete('/users/:id', (req, res) => {
    const { id } = req.params;
    const userIndex = users.findIndex(u => u.id === id);
    if (userIndex !== -1) {
        users.splice(userIndex, 1);
        res.status(204).send();
    } else {
        res.status(404).send('User not found');
    }
});

// Endpoint to update the leaderboard
router.post('/leaderboard', (req, res) => {
    const newEntry = req.body;
    leaderboard.push(newEntry);
    res.status(201).json(newEntry);
});

module.exports = router;
