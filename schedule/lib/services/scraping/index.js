/*
* This application scrapes the website of the animal shelters of Oldenburg and München and maps the resulting data.
* At the end, the dog objects, which contain the scraped data but processed, get written into a database.
*/

const moment = require('moment');
const Xray = require('x-ray');
const x = Xray();

// const winston = require('winston');

// winston.configure({
//     transports: [
//         new (winston.transports.File)({ filename: 'scraping.log' })
//     ]
// });

//service "writer" einbinden
const write = require('../database/writer');

const objecthash = require('object-hash');

//zum "Droppen" der Datenbank bevor wir was reinschreiben
const flush = require('../database/flush');

// var fs = require('fs');
// var util = require('util');


// var logFile = fs.createWriteStream('log.txt', { flags: 'a' });
//   // Or 'w' to truncate the file every time the process starts.
// var logStdout = process.stdout;

// console.log = function () {
//   logFile.write(util.format.apply(null, arguments) + '\n');
//   logStdout.write(util.format.apply(null, arguments) + '\n');
// }



const scraping = () => {

flush()
    .then(() => {
//Tierheim Oldenburg filtern
x('http://www.tierheim-ol.de/vermittlung/hunde/index.php','.info-list li',
    [{ 
       name: '.ttl-area h2',
       img: '.img-box img@src',
       breed: '.add-lst li:first-child .txt',
       colour_row: x('.ttl h3 a@href', '.add-lst li:nth-child(2) .ttl'),
       colour: x('.ttl h3 a@href', '.add-lst li:nth-child(2) .txt'),
       birthdate: '.add-lst li:nth-child(2) .txt',
       gender: '.add-lst li:nth-child(3) .txt',
       row4_title: '.add-lst li:nth-child(4) .ttl',
       height: '.add-lst li:nth-child(4) .txt',
       row5: '.add-lst li:nth-child(5) .txt',
       how_found: x('.ttl h3 a@href', '.add-lst li:last-child .txt'),
       since_when: 'p',
       link: x('.ttl h3 a@href'),
       text: x('.ttl h3 a@href', '.add-text-holder p'),
       img_big: x('.ttl h3 a@href', 'a.fancybox@href', '.fancybox-inner img@src')
    }]  
    
)((err, results) => {
    if(err) {
        return console.error(err);
    }
    
    results = results
        //Mapping der Ergebnisse
        .map(result => {    
            // console.log(result.img_big);

            //Größe
            let size;

            let height_matched;

            if(result.row4_title) {
               if(result.row4_title.toLowerCase().indexOf("schulterhöhe") !== -1) {
                    size = result.height;
                }
                else {
                    size = result.row5;
                } 

                if(!size) {
                    size = "";
                }
                //Größe runterrechnen auf Klein,Mittel,Groß...
                //const height_new = size.split(" ");
                height_matched = size.match(/\d{2}/ig);

                if(parseInt(height_matched) <= 30) {
                    height_matched = "Klein";
                }
                else if(parseInt(height_matched) <= 59) {
                    height_matched = "Mittel";
                }
                else if(parseInt(height_matched) >= 60){
                    height_matched = "Groß";
                }
            }


            const [value, unit] = result.birthdate.match(/\d+\s.+/ig).shift().split(' ');
            const today = moment();

            // TODO: Check if there's another unit
            const birthdate_new = today.subtract(value, unit === 'Monate' ? 'months' : 'years');

            let age_new = "";
            const months_years = result.birthdate.match(/\d+/ig);
            // console.log("birhdate: " + result.birthdate)
            if(height_matched == "Groß") {
                if(result.birthdate.match(/Jahre/ig) && months_years > 5) {     
                    age_new ="senior";
                }
            }
            else if(height_matched == "Mittel") {
                if(result.birthdate.match(/Jahre/ig) && months_years > 7) {
                    age_new ="senior";
                }
            }
            else if(height_matched == "Klein") {
                if(result.birthdate.match(/Jahre/ig) && months_years > 9) {
                    age_new ="senior";
                }
            }

            if(result.birthdate.match(/Monate/ig) && months_years < 12 || (months_years > 12 && months_years < 24)) {
                age_new ="jung";
            }
            else if(result.birthdate.match(/Jahre/ig) && months_years > 1) {
                age_new ="erwachsen";
            }
            
            // console.log("Name: " + result.name);
            // console.log("months_years: " + months_years)
            // console.log("age_new: " + age_new);
           

            //seit wann im Tierheim String
            const string_since_when = result.since_when.match(/seit\s\w+\s\d+/ig);
            const string_since_when_new = string_since_when + " im Tierheim Oldenburg";

            //4. Eintrag kastriert oder Größe?
            let castrated;

            if(result.row4_title) {
                if(result.row4_title.toLowerCase().indexOf("kastriert") !== -1) {
                    castrated = "Ja";   
                }
                else {
                    castrated = "Nein";
                }
            }
        

            //Farbe
            let colour = "keine Angabe";
            if(result.colour_row.toLowerCase().indexOf("farbe") !== -1) {
                colour = result.colour;
            }
            

            const dog_object_ol = Object.assign({}, result, {
                institution: "Tierheim Oldenburg",
                birthdate: birthdate_new.format('DD.MM.YY'),
                age : age_new,
                height: height_matched,
                colour: colour,
                castrated: castrated,
                since_when: string_since_when_new,
                link: result.link
            });

            //ID erstellen -> Hashen des Hundeobjektes
            return Object.assign({}, dog_object_ol, {
                id: objecthash(dog_object_ol)
            })

        });

        //in die Datenbank schreiben
        Promise
        .all(results)
        .then((result) => {
           const institution = 'Tierheim Oldenburg';

            for (const result of results) {
                write(institution, result)
            }
        })
        .then(() => {
            // winston.log('info', "Written into database for Oldenburg");
            console.log("Written into database for Oldenburg")
        })
        .catch((err) =>
            // winston.level = 'debug',
            // winston.log('debug', err)
            console.log(err)
        );
        // console.log("--------------------------OLDENBURG-------------------------");    
        // console.log(results);

})  


//---------------------------------------------------------------------------------------------------------------------------------------------------


//Tierheim München filtern
const scrapePage = (page) => new Promise((resolve, reject) => {
    x(`https://www.tierschutzverein-muenchen.de/das-tun-wir/tiervermittlung/hunde/tier-seite/${page}.html`, '.column50p',
        [{
                name: '.gallery-cell .list.clearfix .animal-data .nameNno .name',
                img: '.gallery-cell .list.clearfix .preview-image img@src',
                breed: '.gallery-cell .list.clearfix .animal-data .art',
                colour: '.gallery-cell .list.clearfix .animal-data .color',
                gender: '.gallery-cell .list.clearfix .animal-data .gender',
                castrated: '.gallery-cell .list.clearfix .animal-data .castrated',
                birthdate: '.gallery-cell .list.clearfix .animal-data .date-of-birth',
                height: '.gallery-cell .list.clearfix .animal-data .height',
                link: 'a@href',
                text: x('.column50p a@href', '.online-suche'),
                img_big: x('.column50p a@href', '.image_block img@src')

                
    }])
    ((err, results) => {
        if(err) {
            return reject(err);
        }

        const dogs = results
            //Mapping der Ergebnisse
            .map(result => {
                // console.log(result.link);

                //Name mit Kleinbuchstaben versehen
                const nameLowercased = result.name.toLowerCase();

                const name_new = `${nameLowercased[0].toUpperCase()}${nameLowercased.substring(1, nameLowercased.length - 1)}`;

                //Rasse
                const breed_cache = result.breed.replace(/(\n|\t)/ig, "");
                const breed_new = breed_cache.split(',')[1];

                //Farbe
                const colour_cache = result.colour.replace(/(\n|\t)/ig, "");
                const colour_new = colour_cache.split(':')[1];
            
                //Gender
                const gender_cache = result.gender.replace(/(\n|\t)/ig, "");
                let gender_new = gender_cache.split(':')[1];
                gender_new = gender_new.toLowerCase();

                //Kastriert
                const castrated_cache = result.castrated.replace(/(\n|\t)/ig, "");
                const castrated_new = castrated_cache.split(':')[1];
                
                //Größe
                const height_cache = result.height.replace(/(\n|\t)/ig, "");
                const height_new = height_cache.split(':')[1];

                //Geburtstag
                const birthdate_cache = result.birthdate.replace(/(\n|\t)/ig, "");
                let birthdate_new = birthdate_cache.split(' ')[1];
                birthdate_new = birthdate_new.replace(/-/ig, ".");  

                //Alter (jung, erwachsen, senior)
                //const [value, unit] = result.birthdate_new.match(/\d+\s.+/ig).shift().split('.');
                const today = moment();

                const years = moment().diff(moment(birthdate_new, "DD-MM-YYYY"), 'years');

                const months = moment().diff(moment(birthdate_new, "DD-MM-YYYY"), 'months');

                let age_new;

                if(years >= 1) {
                    age_new = years + " Jahre";
                }
                else if(months < 12) {
                    age_new = months + " Monate";
                }

                //console.log("1: " + name_new);
                //console.log("2: " + age_new);
                //console.log("3: " + height_new);

                if(height_new == "Groß") {
                    if(years > 5) {
                        age_new ="senior";
                    } 
                }
                else if(height_new == "Mittel") {
                    if(years > 7) {
                        age_new ="senior";
                    } 
                }
                else if(height_new == "Klein") {
                    if(years > 9) {
                        age_new ="senior";
                    } 
                }

                if(age_new.match(/Monate/ig) || (age_new.match(/Jahre/ig) && years <= 1)) {
                    age_new ="jung";
                }
                else if(age_new.match(/Jahre/ig) && years > 1) {
                    age_new ="erwachsen";
                }


                const link_res = result.link;
                let link_matched;
          
                if(link_res) {
                    link_matched = "https://www.tierschutzverein-muenchen.de" + link_res;
                }
                else {
                    link_matched = "";
                }
                
                
                //console.log("4: " + age_new);

                const dog_object_mu = Object.assign({}, result, {
                    institution: "Tierheim Muenchen",
                    name: name_new,
                    breed: breed_new,
                    colour: colour_new,
                    gender: gender_new,
                    castrated: castrated_new,
                    birthdate: birthdate_new,
                    age: age_new,
                    height: height_new,
                    // link: link_matched,
                    since_when: 'im Tierheim Muenchen'
                });

                //ID erstellen -> Hashen des Hundeobjektes
                return Object.assign({}, dog_object_mu, {
                    id: objecthash(dog_object_mu)
                })      
            });
        //console.log("--------------------------MÜNCHEN-------------------------");    
        //console.log(results);

        resolve(dogs);
    });

});

x('https://www.tierschutzverein-muenchen.de/das-tun-wir/tiervermittlung/hunde/tier-seite/1.html', ['.f3-widget-paginator li:not(.next)'])((err, items) => {
    if (err) {
        return console.error(err);
    }

    //holt die Anzahl der Seiten raus und erstellt ein Array mit dessen Anzahl als Länge (item = 1 Seite)
    const fetches = Array.apply(null, Array(items.length))
        .map((item, index) =>
            scrapePage(index + 1)
        );

    //alle Seiten "fetchen" und in die Datenbank schreiben 
    Promise
        .all(fetches)
        .then((pages) => {
           const institution = 'Tierheim Muenchen';

           const writers = [];

           for (const page of pages) {
                for (const dog of page) {
                    writers.push(write(institution, dog))
                }
           }

           return Promise.all(writers);
        })
        .then(() => {
            console.log('Written into database for "München"');
            // winston.log('info', "Written into database for München");
        })
        .catch((err) =>
            // winston.level = 'debug',
            // winston.log('debug', err)
            console.log(err)
        );
    })

})
}

module.exports.scraping = scraping;
