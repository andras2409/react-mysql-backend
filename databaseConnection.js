const mysql = require('mysql2');
require('dotenv').config(); // Ensure you have dotenv installed if you're using .env file for your credentials

const dbConnection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
});

dbConnection.connect((err) => {
    if (err) {
        throw err;
    } else {
        console.log('Connected to the MySQL server.');
    }
    
});

module.exports = dbConnection;