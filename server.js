const express = require('express');
const cors = require('cors');
const db = require('./databaseConnection.js'); // The file you created for your database connection
const app = express();
const port = process.env.PORT || 3000;

app.use(cors()); // This enables CORS for all routes

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
