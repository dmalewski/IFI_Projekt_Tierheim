<<<<<<< HEAD
=======


>>>>>>> f5abd61cdc796b3e240cd1408378911fb65074af
const { MongoClient } = require ('mongodb');

const CONNECTION_STRING = 'mongodb://hajiba:hajiba12@ds117592.mlab.com:17592/tierheim';

const persistMail= (name,vorname, betreff,email, nachricht,telefon) =>{
      return MongoClient
      .connect(CONNECTION_STRING)
      .then((db) => {

          const collection = db.collection('mails');

          const document ={
            name,
            vorname,
            betreff,
            email,
            nachricht
          };

        return collection
            .insertOne(document)
            .then(() =>
                db.close()
            );
        });
  };

<<<<<<< HEAD
module.exports.persistMail= persistMail;
=======
module.exports.persistMail= persistMail;
>>>>>>> f5abd61cdc796b3e240cd1408378911fb65074af
