const { Mongoclient } = require('mongodb');

const DB_HOST = process.env.DB_HOST || '192.168.99.100:32768';
//const DB_PORT = process.env.DB_PORT || 32768;

const CONNECTION_STRING = `mongodb://${DB_HOST}:${DB_PORT}/register`;

const read = (register) =>
    MongoClient
        .connect(CONNECTION_STRING)
        .then((db) => {
            const collection = db.collection("register");

            return collection.find().toArray().then((results) => {
                db.close();
                return results;
            });
        });

module.exports = read;