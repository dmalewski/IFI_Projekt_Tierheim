/* Deployment auf: https://ifi_tierheim_schedule.now.sh/ */

const {startSchedule} = require("./lib/services/schedule");

startSchedule();

const {createServer} = require('http')

const server = createServer(() => {})

server.listen(3000);