const mongoose = require('mongoose');
const fs = require('fs');
const { roomReviewGenerator } = require('../data_generator/roomReviewGenerator');
const { Reviews } = require('./schema.js');

// mongoose.connect('mongodb://localhost:27017/airbnb', { useNewUrlParser: true });

const dataSize = 10000000;
function fileWriteSync(filePath) {
    const fd = fs.openSync(filePath, 'w');
    for (let i = 0; i < dataSize; i++) {
        let data = JSON.stringify(roomReviewGenerator(1));
        fs.writeSync(fd, i + data + '\n', null, null);
    }
    fs.closeSync(fd);
}
fileWriteSync('PostgreSQLData.csv');
fileWriteSync('CassandraData.csv');

// Reviews.collection.drop(() => {});
// console.log("Updating Database...");
// Reviews.insertMany(data)
//   .then(()=>{
//     console.log('---Database Updated---');
//     mongoose.connection.close();
//   })
//   .catch(function (err) {
//     console.log(err);
//     mongoose.connection.close();
//   });



