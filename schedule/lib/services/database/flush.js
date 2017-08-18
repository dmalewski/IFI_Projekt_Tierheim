/*
* Modul zum "droppen" der collection "dogs" 
*/

const { MongoClient } = require('mongodb');

const DB_HOST = process.env.DB_HOST || '192.168.99.100';
const DB_PORT = process.env.DB_PORT || 32768;

const CONNECTION_STRING = `mongodb://dmalewski:1234@ds163711.mlab.com:63711/ifi_tierheim`;

const flush = (institution, dog) =>
     MongoClient
        .connect(CONNECTION_STRING)
        .then((db) => {
            const criteria = [];

            criteria.push({
                how_inserted: "scraping"
            })

            Promise.all([
                db.collection("dogs").remove({
                    $and: criteria
                }),
                console.log("collection -dogs- flushed")
            ])
            
            db.close()
        });

module.exports = flush;