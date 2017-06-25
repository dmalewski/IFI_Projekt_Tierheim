const { MongoClient } = require('mongodb');

const DB_HOST = process.env.DB_HOST || '192.168.99.100';
const DB_PORT = process.env.DB_PORT || 32768;

const CONNECTION_STRING = `mongodb://dmalewski:1234@ds163711.mlab.com:63711/ifi_tierheim`;

/* Dokument-Aufbau
 {
            "id": 46fcfa4e85081704e63a6969081d5ce38d56c802
            "name": "Bibi",
            "img": "https://www.tierschutzverein-muenchen.de/fileadmin/Webdata/AnimalDatabase/160301-klein.jpg",
            "bread": "Mix",
            "colour": "schwarz,kleiner weißer Brustfleck",
            "gender": "Weiblich",
            "castrated": "Nein",
            "birthdate": "01.01.06",
            "height": "Mittel",
            "since_when": "...",
            "traits": ...
        }
*/

const write = (institution, dog) =>
    MongoClient
        .connect(CONNECTION_STRING)
        .then((db) => {
                //DB wird erzeugt und in "collection" aufgefangen
                const collection = db.collection("dogs");

                const { id, name, img, bread, colour, gender, castrated, birthdate, age, height, since_when, traits } = dog;

                const document = {
                    id,
                    institution,
                    name,
                    img,
                    bread,
                    colour,
                    gender,
                    castrated,
                    birthdate,
                    age,
                    height,
                    since_when,
                    traits
                };

                return collection
                    .insertOne(document)
                    .then(() =>
                        db.close()
                    );
            });

module.exports = write;