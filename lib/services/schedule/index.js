const INTERVAL = 60 * 1000 * 60 * 24; //1 Minute * 60 = 1 Stunde * 24 = 1 Tag

// let i;

let intervalId;

const { MongoClient } = require('mongodb');

const CONNECTION_STRING = `mongodb://dmalewski:1234@ds163711.mlab.com:63711/ifi_tierheim`;

const { scraping } = require("../scraping");

// const update = () => {
//     console.log("Should update something");
// };

const startSchedule = async () => {

    scraping();

    // const db = await MongoClient.connect(CONNECTION_STRING)
   
    // const collection = db.collection("dogs_new");
            
    // const dog = {
    //     "id": "1",
    //     "instituion": "bremen",
    //     "name": "Moreno",
    //     "img": "https://thek9harperlee.files.wordpress.com/2014/01/no-snow-1-thek9harperlee.jpg",
    //     "bread": "Golden Retriever",
    //     "colour": "creme",
    //     "gender": "männlich",
    //     "castrated": "Ja",
    //     "birthdate": "09.04.2008",
    //     "age": "9",
    //     "height": "Mittel",
    //     "since_when": "im Tierheim Bremen",
    //     "traits": "verträglich mit Männchen, verträglich mit Weibchen, Einzeltier"
    // };

    // await collection.insertOne(dog);

    // await db.close();

    // console.log(`Inserted dog: ${JSON.stringify(dog)}`);
    // i++;

    // if(i === 10) {
    //     clearInterval(intervalId);
    // }
};

intervalId = setInterval(startSchedule, INTERVAL);

module.exports.startSchedule = startSchedule;
