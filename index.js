/* Deployment auf: https://ifi-tierheim.now.sh/ */

const express = require("express");

const app = express();

app.use(express.static("./assets"));

const {read, findBreeds} = require("./lib/services/reader");

const {filter} = require("./lib/services/filter");

app.set("view engine","ejs");

app.get("/",(req, res) => {
        findBreeds().then((breeds) => {
        res.render("index",{
            title: 'Suche',
            breeds: breeds
        });
    });
})

app.get("/search",(req, res) => {
    //?size=Klein,Mittel
    const sizes = req.query.size.split(',');

    const genders = req.query.gender.split(',');

    const breed = req.query.breed_select;

    //['Klein','Mittel']

    /*db.collection('dogs').find({
        height: {
            "$in": sizes
        }
    })
    */

    console.log("sizes:" + sizes);
    console.log("genders:" + genders);
    console.log("breed:" + breed);

    filter(sizes,genders,breed).then((results) => {
        console.log(results);
        res.render("search",{
            dogs: results
        });
    });
})

app.listen(8080);

console.log("search is listening...");

//Formular

//Daten erweitern, die schon da sind -> Daten anreichern

//query.wikidata.org -> Daten anreichern