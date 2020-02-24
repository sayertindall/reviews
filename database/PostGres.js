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

// getRandomInt = (max) => {
//     return Math.floor(Math.random() * Math.floor(max));
// };
// let randInt = getRandomInt(1000000);
// const q = `SELECT reviews FROM reviews WHERE room_id = ${randInt};`;

// client
//     .query(q)
//     .then((data) => {
//         console.log(data.rows[0]);
//     })
//     .catch(e => console.error(e.stack))
//     .then(() => client.end());


module.exports = { client };
