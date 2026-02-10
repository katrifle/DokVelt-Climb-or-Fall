const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware for parsing JSON bodies
app.use(express.json());

// Middleware for serving static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint to serve HTML pages
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// API endpoint to serve JSON data
app.get('/api/data', (req, res) => {
    fs.readFile(path.join(__dirname, 'data', 'data.json'), 'utf-8', (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to read data' });
        }
        res.json(JSON.parse(data));
    });
});

// Additional routes can be added here

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
