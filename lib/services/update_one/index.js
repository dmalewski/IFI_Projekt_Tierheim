const { MongoClient } = require('mongodb');

const CONNECTION_STRING = `mongodb://dmalewski:1234@ds163711.mlab.com:63711/ifi_tierheim`;

//Funktion zum Auslesen der Datenbank
const update_one = (id) => 
    MongoClient
        .connect(CONNECTION_STRING)
        .then((db) => {
            const collection = db.collection("dogs");

            return collection
                .update(
                    {id},
                    {
                        
                    }
                    )
                    .then(() => {
                        db.close();
                    });          
        })
        

module.exports.update_one = update_one;
