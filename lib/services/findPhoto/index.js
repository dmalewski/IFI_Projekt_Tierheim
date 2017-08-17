const { MongoClient } = require('mongodb');

const CONNECTION_STRING = `mongodb://dmalewski:1234@ds163711.mlab.com:63711/ifi_tierheim`;

const findPhoto = (dog_id) =>   
    MongoClient
       .connect(CONNECTION_STRING)
        .then((db) => {
            const collection = db.collection("photos");

        
            return collection.findOne({
                dog_id}
            ).then((photo) => {
                db.close();
                return photo;
            });          
        });

module.exports.findPhoto = findPhoto;