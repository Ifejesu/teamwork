const express = require('express');
const bodyParser = require('body-parser');
const { Client } = require('pg');

const articleRoutes = require('./routes/article')
const feedRoutes = require('./routes/feed')
const gifRoutes = require('./routes/gif')
const userRoutes = require('./routes/user')

const app = express();

const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: true,
});

client.connect();

client.query('SELECT table_schema,table_name FROM information_schema.tables;', (err, res) => {
    if (err) throw err;
    for (let row of res.rows) {
        console.log(JSON.stringify(row));
    }
    client.end();
});

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(bodyParser.json());

app.use('/api/v1/articles', articleRoutes);
app.use('/api/v1/feed', feedRoutes);
app.use('/api/v1/gifs', gifRoutes);
app.use('/api/v1/auth', userRoutes);

client.query('SELECT table_schema,table_name FROM information_schema.tables;', (err, res) => {
    if (err) throw err;
    for (let row of res.rows) {
        console.log(JSON.stringify(row));
    }
    client.end();
});

module.exports = app;