const { MongoClient } = require('mongodb');

const DB_HOST = process.env.DB_HOST || '192.168.99.100';
const DB_PORT = process.env.DB_PORT || 32768;

const CONNECTION_STRING = `mongodb://dmalewski:1234@ds163711.mlab.com:63711/ifi_tierheim`;

const {uniq} = require("lodash");

//Funktion zum Auslesen der Datenbank
const read = (institution, dog) =>
    MongoClient
        .connect(CONNECTION_STRING)
        .then((db) => {
            const collection = db.collection("dogs");

            return collection.find().toArray().then((results) => {
                db.close();
                return results;
            });          
        });

//Funktion zum Auslesen der Rassen (unique)
const findBreeds = (institution,dog) => {
    return read(institution,dog) 
    .then((dogs) => {
        const breeds =  uniq(dogs.map((dog) => dog.bread));

         return breeds;
    })
   
};


module.exports.findBreeds = findBreeds;

module.exports.read = read;
