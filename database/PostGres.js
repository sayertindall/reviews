const { Client } = require('pg');
const fs = require('fs');

const client = new Client({
    user: 'sayertindall',
    host: 'localhost',
    database: 'airbnb',
    password: 'sayertindall',
    port: 5432,
});

client.connect(err => {
    if (err) {
        console.error('connection error', err.stack)
    } else {
        console.log('connected')
    }
});

client.query('DROP TABLE IF EXISTS contacts;');

client.query(
'CREATE TABLE contacts (id serial PRIMARY KEY, name VARCHAR (100), phones TEXT []);' );

client.query(
"INSERT INTO contacts (name, phones) VALUES ( 'John Doe', ARRAY [ '(408)-589-5846', '(408)-589-5555' ]);"
);