const { MongoClient } = require('mongodb');

const CONNECTION_STRING = `mongodb://dmalewski:1234@ds163711.mlab.com:63711/ifi_tierheim`;

const filter= (sizes,genders,breed) => 
    MongoClient
        .connect(CONNECTION_STRING)
        .then((db) => {
            const collection = db.collection("dogs");

            return collection.find({
                height: {
                    "$in": sizes
                }
                /*
                bread:  breed,
                
                gender: {
                    "$in": genders
                }
                */
                
                }).toArray().then((results) => {
                db.close();
                return results;
            });          
    });

    module.exports.filter = filter;