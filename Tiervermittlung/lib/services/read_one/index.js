const { MongoClient } = require('mongodb');

const CONNECTION_STRING = `mongodb://dmalewski:1234@ds163711.mlab.com:63711/ifi_tierheim`;

//Funktion zum Auslesen der Datenbank
const read_one = (id) => 
    MongoClient
        .connect(CONNECTION_STRING)
        .then((db) => {
            const collection = db.collection("dogs");

            return collection
                .findOne({id})
                    .then((result) => {
                        db.close();
                        return result;
                    });          
        })
        

module.exports.read_one = read_one;
