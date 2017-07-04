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
};

intervalId = setInterval(startSchedule, INTERVAL);

module.exports.startSchedule = startSchedule;
