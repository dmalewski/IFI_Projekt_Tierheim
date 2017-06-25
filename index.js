/* Deployment auf: https://ifi-tierheim.now.sh/ */

const express = require("express");

const app = express();

app.use(express.static("./assets"));

const {read, findBreeds} = require("./lib/services/reader");

const {filter} = require("./lib/services/filter");

const {startSchedule} = require("./lib/services/schedule");


app.set("view engine","ejs");

app.get("/", async (req, res) => {
        //startSchedule();
        findBreeds().then((breeds) => {
        res.render("index",{
            title: 'Suche',
            breeds: breeds
        });
    });
})

app.get("/search",(req, res) => {
    let sizes = "";
    console.log("size.length: " + req.query.size.length);
    if(req.query.size.length) {
        sizes = req.query.size.split(',');
    }

    let genders = "";
    if(req.query.gender.length) {
        genders = req.query.gender.split(',');
    }

    let breed ="";
    if(req.query.breed_select.length) {
        breed = req.query.breed_select;
    }

     console.log("age.length: " + req.query.age.length);
    let ages ="";
    if(req.query.age.length) {
        ages = req.query.age.split(',');
    }

    let traits ="";
    if(req.query.traits.length) {
        traits = req.query.traits.split(',');
    }

    console.log(sizes);
    console.log(genders);
    console.log(breed);
    console.log(ages);
    console.log(traits);

    filter(sizes,genders,breed,ages,traits).then((results) => {
        //console.log(results);
        res.render("search",{
            dogs: results,
            message: ""
        });
    }).catch(() => {
        res.render("search", {
            dogs: [],
            message: "Es wurde nichts ausgewählt!"
        })
    })
})

app.listen(8080);

console.log("search is listening...");


//Daten erweitern, die schon da sind -> Daten anreichern

//query.wikidata.org -> Daten anreichern