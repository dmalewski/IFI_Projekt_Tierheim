const { MongoClient } = require('mongodb');

const CONNECTION_STRING = "mongodb://dmalewski:1234@ds163711.mlab.com:63711/ifi_tierheim";

const persistPhoto = (filename, type, size, dog_id) =>
    MongoClient
        .connect(CONNECTION_STRING)
        .then((db) => {
            const collection = db.collection('photos');

            const document = {
                filename,
                type,
                size,
                uploadedAt: new Date().toISOString(),
                dog_id
            };

            return collection
                .insertOne(document)
                .then(() => {
                    db.close();
                }) 

        });

module.exports.persistPhoto = persistPhoto;




