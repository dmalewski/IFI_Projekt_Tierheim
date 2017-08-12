const { MongoClient } = require('mongodb');

const CONNECTION_STRING = `mongodb://dmalewski:1234@ds163711.mlab.com:63711/ifi_tierheim`;

const findPhoto = () =>   
    MongoClient
        .connect(CONNECTION_STRING)
        .then((db) => {
            const collection = db.collection("photos");

            return collection
                .find(filename)
                .toArray();
        })

module.exports.findPhoto = findPhoto;

