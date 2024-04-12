const express = require('express');
const cors = require('cors');
const db = require('./databaseConnection.js'); // The file you created for your database connection
const app = express();
const port = process.env.PORT || 3000;

app.use(cors()); // This enables CORS for all routes

const path = require('path');

// Serve static files from 'build' directory
app.use(express.static(path.join(__dirname, 'build')));

// Handle SPA routing by returning index.html for all routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.use((req, res, next) => {
    if (req.path.endsWith('.js')) {
        res.type('text/javascript');
    } else if (req.path.endsWith('.css')) {
        res.type('text/css');
    }
    next();
});

app.get('/employees', (req, res) => {
    db.query('SELECT * FROM employees', (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

app.get('/tickets', (req, res) => {
    db.query('SELECT * FROM tickets', (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
