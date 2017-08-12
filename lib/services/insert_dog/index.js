const { MongoClient } = require('mongodb');

const objecthash = require('object-hash');

const CONNECTION_STRING = `mongodb://dmalewski:1234@ds163711.mlab.com:63711/ifi_tierheim`;

const insertDog= (name,size,age,bread,gender,traits,castrated) => {
    return MongoClient
      .connect(CONNECTION_STRING)
      .then((db) => {
            const collection = db.collection('dogs');
    
            const document = {
                id,
                institution,
                name,
                // img,
                bread,
                colour,
                gender,
                castrated,
                birthdate,
                age,
                height,
                since_when,
                //array!!!
                traits: new Array
            };

            // //ID erstellen -> Hashen des Hundeobjektes  
            // const id = objecthash(document);

        return collection
                .insertOne(document)
                .then(() =>
                    db.close()
                );
        })
        .then(() =>
            name
        );
};


module.exports.insertDog = insertDog;