const { MongoClient } = require('mongodb');

const CONNECTION_STRING = `mongodb://dmalewski:1234@ds163711.mlab.com:63711/ifi_tierheim`;

const insertDog= (name,size,age,breed,gender,traits,castrated) => {
    MongoClient
        .connect(CONNECTION_STRING)
        .then((db) => {
            const collection = db.collection("dogs");

    
            const document = {
                name,
                
                size,
                age,
                breed,
                gender,
                traits,
                castrated
            };

        return collection
                .insertOne(document)
                .then(() =>
                    db.close()
                );
        })
};



module.exports.insertDog = insertDog;