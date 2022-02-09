const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false}));
app.use(express.json());



// connect to database 
const db = mysql.createConnection(
    {
        host:'localhost',
        // your mysql username,
        user: 'root',
        // Your mysql password 
        password: 'Isabelle312*',
        database: 'election'
    },
    console.log('connected to the election database.')
);

db.query(`SELECT * FROM candidates`, (err, rows) => {
    console.log(rows);
});

// default response for any other request (not found)
app.use((req, res) => {
    res.status(404).end();
});

app.get(`/`, (req, res) => {
    res.json({
        message: 'hello world'
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});