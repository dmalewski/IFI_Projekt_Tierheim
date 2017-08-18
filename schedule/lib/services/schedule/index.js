const INTERVAL = 60 * 1000 * 60 * 4; //alle 4 Stunden

// let i;

let intervalId;

const { MongoClient } = require('mongodb');

const CONNECTION_STRING = `mongodb://dmalewski:1234@ds163711.mlab.com:63711/ifi_tierheim`;

const { scraping } = require("../scraping");

// const update = () => {
//     console.log("Should update something");
// };s

const startSchedule = async () => {
    console.log(`"scraping" wurde aufgerufen am ${new Date().toISOString()}`);
    scraping();
};

intervalId = setInterval(startSchedule, INTERVAL);

module.exports.startSchedule = startSchedule;
