const express = require("express");

const app = express();

app.use(express.static("./assets"));




app.set("view engine","ejs");

app.get("/",(req, res) => {
        res.render("index")
})

app.listen(8080);

console.log("search is listening...");

//Formular

//Daten erweitern, die schon da sind -> Daten anreichern

//query.wikidata.org -> Daten anreichern