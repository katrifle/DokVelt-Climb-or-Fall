const express = require('express');
const router = express.Router();

// Mock database to store essays
let essays = [];

// Endpoint to submit an essay
router.post('/submit', (req, res) => {
    const { title, content, author } = req.body;
    const newEssay = { id: essays.length + 1, title, content, author, submittedAt: new Date() };
    essays.push(newEssay);
    res.status(201).json({ message: 'Essay submitted successfully', essay: newEssay });
});

// Endpoint to retrieve all essays
router.get('/retrieve', (req, res) => {
    res.status(200).json(essays);
});

module.exports = router;