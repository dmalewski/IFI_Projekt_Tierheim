const { MongoClient } = require('mongodb');

const CONNECTION_STRING = `mongodb://dmalewski:1234@ds163711.mlab.com:63711/ifi_tierheim`;

const {uniq} = require("lodash");

//Funktion zum Auslesen der Datenbank
const read_one = (id) =>
    MongoClient
        .connect(CONNECTION_STRING)
        .then((db) => {
            const collection = db.collection("dogs");

            const dog_id = id;

            return collection.findOne({
                id: dog_id
            }).then((result) => {
                db.close();
                return result;
            });          
        });



module.exports.read_one = read_one;
