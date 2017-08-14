
const { MongoClient } = require ('mongodb');

const CONNECTION_STRING = `mongodb://dmalewski:1234@ds163711.mlab.com:63711/ifi_tierheim`;

const persistMail = (name,vorname,telefon,email,betreff,nachricht) =>{
      return MongoClient
      .connect(CONNECTION_STRING)
      .then((db) => {

          const collection = db.collection('mails');

          const document = {
            name,
            vorname,
            telefon,
            email,
            betreff,
            nachricht,
            wann_verschickt: new Date().toISOString()
          };

        return collection
                .insertOne(document)
                .then(() =>
                    db.close()
                );
        })
        .then(() =>
            vorname
        );
  };

module.exports.persistMail= persistMail;
