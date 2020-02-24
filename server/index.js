const mongoose = require('mongoose');
const db = require('../database/schema.js');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const path = require('path');
const { client } = require('../database/PostGres.js');

const PORT = 3004;

app.use(bodyParser.json());
app.use(cors());
app.use(express.static(`${__dirname}/../client/dist`));

// Route for MongoDB
app.get('/reviews/:room_id', (req, res) => {
  mongoose.connect('mongodb://localhost:27017/airbnb', { useNewUrlParser: true });
  const target = {room_id: req.params.room_id};
  console.log(target);
  db.Reviews.find(target)
    .then((data) => {
      mongoose.connection.close();
      res.status(200).send(data);
    })
    .catch((err) => {
      mongoose.connection.close();
      res.status(500).send("Fail to fetch");
    })
});

// Route for PostGres

app.route('/reviews/:room_id')
    .get((req, res) => {
      const q = `SELECT reviews FROM reviews WHERE room_id = ${req.params.room_id};`;
      client
          .query(q)
          .then((data) => {
              res.status(200).send(data.rows[0])
          })
          .catch(e => console.error(e.stack))
          // .then(() => client.end())
});

app.listen(PORT, ()=>{
  console.log("Server is now listening on port:", PORT);
  console.log(`Visit website at http://localhost:${PORT}/?id=1`);
});
