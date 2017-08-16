/* Deployment auf: https://ifi-tierheim.now.sh/ */

const path = require('path');
const cookieParser = require('cookie-parser');
const exphbs = require('express-handlebars');
const expressValidator = require('express-validator');
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const mongo = require('mongodb');
const multer = require('multer');
const objecthash = require('object-hash');

const {read, findBreeds} = require("./lib/services/reader");
const {filter} = require("./lib/services/filter");
const {read_one} = require("./lib/services/read_one");
const {delete_one} = require("./lib/services/delete_one");
const {findPhoto} = require('./lib/services/findPhoto');
const {getHunde} = require('./lib/services/pagination');
const {persistMail} = require('./lib/services/persistMail');
const {insertDog, persistPhoto} = require('./lib/services/insert_dog');

//BILD HOCHLADEN
const fs = require("fs");
const mongoose = require('mongoose');
mongoose.connect("mongodb://dmalewski:1234@ds163711.mlab.com:63711/ifi_tierheim");
var conn = mongoose.connection;


const upload = multer({
    dest: `./uploads`
});

//-----------------------------------------------------------------------

// Init App
const express = require('express');
const bodyparser = require('body-parser');

const app = express();

app.use(express.static('./assets'));


app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));
/*app.use(bodyParser.urlencoded({ extended: false }));*/
              app.use(cookieParser());
// View Engine
//                app.set('views', path.join(__dirname, 'views'));/*
//                app.engine('handlebars', exphbs({defaultLayout:'layout'}));*/
app.set('view engine', 'ejs');
/*app.set('view engine', 'handlebars');*/

app.use('/uploads', express.static('./uploads'));


//--------------------------------------------------------------------------------AUTHENTIFICATION---------------------------------------------------------------------
const morgan = require('morgan');

const configDB = require('./config/database.js');

// configuration ===============================================================
mongoose.connect(configDB.url); // connect to our database

require('./config/passport')(passport); // pass passport for configuration

// set up our express application
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyparser.json()); // get information from html forms
app.use(bodyparser.urlencoded({ extended: true }));

app.set('view engine', 'ejs'); // set up ejs for templating

// required for passport
app.use(session({
    secret: 'doggo', // session secret
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

// routes ======================================================================
require('./app/routes.js')(app, passport); // load our routes and pass in our app and fully configured passport


//--------------------------------------------------------------------------------------------------------------------------------------------------------------------



//Startseite Home
app.get('/', async (req, res)=>{ 
    res.render('pages/home',{
        title: 'Home',
        headline: 'Home',
        text: `Wir Menschen tragen eine große Verantwortung den Tieren gegenüber. Wir haben sie gerne um
        uns herum, um uns nicht einsam zu fühlen und entledigen uns ihrer, sobald wir sie nicht mehr brauchen.
        Dabei empfinden Tiere wie der Mensch Freude und Schmerz, Glück und Unglück. Auf den folgenden Seiten
        finden Sie bei uns Hunde, Katzen, Kleintiere, Vögel und sogar Exoten, die darauf warten ein neues
        Zuhause zu finden.`,
    });
});

// Hunde
app.get('/hunde/:pages?', async (req, res) => {
    const page = req.params.pages || 0;
    const results = await getHunde(page);
    
    res.render('pages/hunde',{
        title: 'Hunde',
        headline: 'Vermittlung von Hunden',
        text: `Ein Tier kann aus vielfältigen Gründen im Tierheim sitzen. "Scheidungshunde" sind nicht selten
        und auch jede andere Art von veränderten Lebensumständen gehören zu den häufigen Gründen für eine Abgabe
        im Heim. Das können z.B. berufliche Veränderungen und damit verbundener Zeitmangel oder auch Allergien des
        Vorbesitzers sein. Leider gehört dazu auch manchmal menschlicher Familienzuwachs. Dabei könnte die fachliche
        Beratung zum richtigen Umgang für Eltern und Kind in den meisten Fällen eventuell vorhandene Zweifel zerstreuen.
        Gute Hundeschulen bieten oft auch in diesen Fällen eine Hilfestellung. `,
        dogs: results.hunde,
        pagesCount: results.pagesCount,
        currentPage: page
    });
});



app.get('/hunde/details/:id?', (req, res) => {
    const id = req.params.id;

    read_one(id)
        .then((result) => {    
            res.render('pages/details',{
                title: 'Details',
                headline: result.name,
                text: "Hier finden Sie detailliertere Informationen zum Hund " + result.name + 
                `. Wenn Sie mehr über den Hund erfahren wollen oder Kontaktdaten haben möchten, 
                klicken Sie bitte auf den Link 'zur Tierheim-Profilseite des Hundes'.`,
                dog: result
            });
        
        })
        .catch((err) => {
            console.log("Error: " + err);
        });
});

//Suche
app.get('/suche', async (req, res)=>{
    findBreeds().then((breeds) => {
        res.render('pages/suche',{
            title: 'Suche',
            headline: 'Suche',
            text: "Bitte wählen Sie Kriterien aus, die Ihnen bei einem Hund wichtig sind!",
            breeds: breeds
        });
    });
 });


//Suchergebnis
app.get("/suche_ergebnis",(req, res) => {

    //Größen
    let sizes = "";
    if(req.query.size.length) {
        sizes = req.query.size.split(',');
    }

    //Geschlecht
    let genders = "";
    if(req.query.gender.length) {
        genders = req.query.gender.split(',');
    }

    //Rasse
    let breed ="";
    if(req.query.breed_select.length) {
        breed = req.query.breed_select;
    }

    //Alter
    let ages ="";
    if(req.query.age.length) {
        ages = req.query.age.split(',');
    }

    //Kastriert
    let castrated ="";
    if(req.query.castrated.length) {
        castrated = req.query.castrated;
    }

    //Eigenschaften
    let traits ="";
    if(req.query.traits.length) {
        traits = req.query.traits.split(',');
    }

    filter(sizes,genders,breed,ages,castrated,traits).then((results) => {
        if(results.length != 0) {


            res.render("pages/suche_ergebnis",{
                title: "Suchergebnis",  
                headline: "Passend zu Ihren Suchkriterien wurden folgende Hunde gefunden:",
                dogs: results
            });
        }
        else if(sizes !="" || genders !="" || breed !="" || ages !="" || castrated !="" || traits !="") {
            res.render("pages/suche_no_dog", {
                title: ":(",
                headline: "Es wurde leider kein passender Hund gefunden!",
                text: "Versuchen Sie es doch noch einmal mit anderen Suchkriterien!",
                dogs: []
            })
        }
    })
    .catch(() => {
        if(sizes =="" && genders =="" && breed =="" && ages =="" && castrated =="" && traits =="") {
            res.render("pages/suche_error", {
                title: "Fehler",
                headline: "Es wurde nichts ausgewählt!",
                text: "Bitte versuchen Sie es doch nochmal!",
                dogs: []
            })
        }
    })
});


// Katzen
app.get('/katzen',(req, res)=>{
    res.render('pages/comingSoon',{
        title: 'Katzen',
        headline: 'In Bearbeitung!',
        headlineText: 'Es tut uns leid!',
        text: `Diese Seite befindet sich noch im Aufbau. Wir hoffen, dass Ihnen unsere
        Seite gefällt, auch wenn noch nicht alle Funktionen möglich sind. Vielleicht konnten wir Sie dazu animieren, das
        ein oder andere Tier aus dem Tierheim zu adoptieren und ihm ein tolles neues Zuhause zu bieten.`,
        signature: `Bis Bald euer Team4!`,
    });
});


// Kleintiere
app.get('/kleintiere',(req, res)=>{
    res.render('pages/comingSoon',{
        title: 'Kleintiere',
        headline: 'In Bearbeitung!',
        headlineText: 'Es tut uns leid!',
        text: `Diese Seite befindet sich noch im Aufbau. Wir hoffen, dass Ihnen unsere
        Seite gefällt, auch wenn noch nicht alle Funktionen möglich sind. Vielleicht konnten wir Sie dazu animieren, das
        ein oder andere Tier aus dem Tierheim zu adoptieren und ihm ein tolles neues Zuhause zu bieten.`,
        signature: `Bis Bald euer Team4!`,
    });
});


// Vögel
app.get('/voegel',(req, res)=>{
    res.render('pages/comingSoon',{
        title: 'Vögel',
        headline: 'In Bearbeitung!',
        headlineText: 'Es tut uns leid!',
        text: `Diese Seite befindet sich noch im Aufbau. Wir hoffen, dass Ihnen unsere
        Seite gefällt, auch wenn noch nicht alle Funktionen möglich sind. Vielleicht konnten wir Sie dazu animieren, das
        ein oder andere Tier aus dem Tierheim zu adoptieren und ihm ein tolles neues Zuhause zu bieten.`,
        signature: `Bis Bald euer Team4!`,
    });
});


// Exoten
app.get('/exoten',(req, res)=>{
    res.render('pages/comingSoon',{
        title: 'Exoten',
        headline: 'In Bearbeitung!',
        headlineText: 'Es tut uns leid!',
        text: `Diese Seite befindet sich noch im Aufbau. Wir hoffen, dass Ihnen unsere
        Seite gefällt, auch wenn noch nicht alle Funktionen möglich sind. Vielleicht konnten wir Sie dazu animieren, das
        ein oder andere Tier aus dem Tierheim zu adoptieren und ihm ein tolles neues Zuhause zu bieten.`,
        signature: `Bis Bald euer team4!`,
    });
});


// // Login- und Registrierung
// app.get('/registrierung',(req, res)=>{
//     res.render('pages/anmelden',{
//         title: 'Anmelden',
//         headline: `Melden Sie sich jetzt an!`,
//         text: `Melden Sie sich jetzt bei Tiervermittlung an und fügen Sie unkompliziert und mit wenigen Klicks Ihre Schützlinge
//                  im gesamten deutschsprachigen Raum ein. Wir helfen Ihnen die passenden Halter schnell und einfach zu ermitteln.
//                  Das Einstellen ist intuitiv und schnell zu erledigen`
//               });
// });


// //Registrierung
// app.post('/registrierung',(req, res)=>{
//     res.render('pages/registriert',{
//         title: 'Anmelden',
//         headline: 'Herzlich Willkommen!',
//         text: `Sie haben sich erfolgreich registriert!`
//     });
// });


// Impressum
app.get('/impressum',(req, res)=>{
    res.render('pages/impressum',{
        title: 'Impressum',
        headline: 'Impressum',
        text: `Sinn und Zweck des Im­pres­sum ist die Kenn­zeich­nung des An­bie­ters. Ver­brau­cher und Wett­be­wer­ber
                sol­len durch An­ga­be ei­ner la­dungsfähi­gen Adres­se die Möglich­keit be­kom­men, mit dem Be­trei­ber der
                Web­sei­te in Kon­takt zu tre­ten und ggf. recht­li­che Schrit­te ge­gen die­sen ein­zu­lei­ten.`,
        headline1: 'Allgemeine Datenschutzerklärung',
        text1: `Durch die Nutzung unserer Website erklären Sie sich mit der Erhebung,
                Verarbeitung und Nutzung von Daten gemäß der nachfolgenden Beschreibung einverstanden.
                Unsere Website kann grundsätzlich ohne Registrierung besucht werden. Dabei werden Daten wie
                beispielsweise aufgerufene Seiten bzw. Namen der abgerufenen Datei, Datum und Uhrzeit zu
                statistischen Zwecken auf dem Server gespeichert, ohne dass diese Daten unmittelbar auf
                Ihre Person bezogen werden. Personenbezogene Daten, insbesondere Name, Adresse oder
                E-Mail-Adresse werden soweit möglich auf freiwilliger Basis erhoben. Ohne Ihre Einwilligung
                erfolgt keine Weitergabe der Daten an Dritte.`
    });
});

 
// Kontakt GET
app.get('/kontakt', (req, res)=>{
    res.render('pages/kontakt',{
        title: 'Kontakt',
        headline: 'Kontakt',
        text: `Haben Sie Fragen, Anregungen, Tipps oder Interesse an unserer Seite, füllen Sie doch einfach
                das unten stehende Kontaktformular aus und senden Sie es ab. Wir freuen uns auf Ihre Nachricht!
                
                Euer team4`
    });
});

//Kontakt POST
app.post('/kontakt', (req, res) => {

  const name = req.body.surname;
  const vorname = req.body.firstname;
  const telefon = req.body.phone;
  const email = req.body.email;
  const betreff = req.body.subject;
  const nachricht = req.body.message;

  persistMail(name,vorname,telefon,email,betreff,nachricht)
    .then((vorname) => {
            res.render('pages/danke',{
                title: `Danke`,
                headline: `Danke, ${vorname}!`, 
                text:'Ihre Nachricht wurde erfolgreich gesendet!',
            });
    })
    .catch((err) => {
          res.send('hat nicht geklappt');
    });
});


// Links
app.get('/links',(req, res)=>{
    res.render('pages/links',{
        title: 'Links',
        headline: 'weiterführende Links',
        text: `Auf den Nachfolgenden Links können Sie sich über uns, die Tiere und die mit uns kooperierenden Tierheime informieren.`
    });
});

// Spenden
app.get('/spenden',(req, res)=>{
    res.render('pages/comingSoon',{
        title: 'Spenden',
        headline: 'In Bearbeitung!',
        headlineText: 'Es tut uns leid!',
        text: `Diese Seite befindet sich noch im Aufbau. Wir hoffen, dass Ihnen unsere
        Seite gefällt, auch wenn noch nicht alle Funktionen möglich sind. Vielleicht konnten wir Sie dazu animieren, das
        ein oder andere Tier aus dem Tierheim zu adoptieren und ihm ein tolles neues Zuhause zu bieten.`,
        signature: `Bis Bald euer Team4!`,
    });
});



// ComingSoonPage
app.get('/comingSoon',(req, res)=>{
    res.render('pages/comingSoon',{
        title: 'Error',
        });
});


//Hunde eintragen
app.get('/hund_eintragen',(req, res)=> {
    res.render('pages/insertDog',{
        title: 'Eintragen',
        headline: 'Hund eintragen',
        text: `Tragen Sie einen Hund ein!`
    });
});


//Hunde eintragen POST
// app.post('/hund_eintragen', upload.single('photo'), (req, res)=> {
app.post('/hund_eintragen',  upload.single('photo'), (req, res) => {
    const { filename, mimetype, size } = req.file;
    
    const institution =  req.body.institution;
    const name = req.body.name;
    // const { filename, mimetype: type, size } = req.file;
    const colour =  req.body.colour;
    const birthdate = req.body.birthdate;
    const height = req.body.height;
    const since_when = req.body.since_when;
    const breed = req.body.breed;
    const gender = req.body.gender;
    const castrated = req.body.castrated;

    //Wenn es einen Link gibt, wird dieser aus req.body rausgezogen
    const link = req.body.link;
   

    // console.log("link: "+ link);
    //   console.log("birthdate: "+ birthdate);


    //Wenn es einen Text gibt, wird dieser aus req.body rausgezogen
    const text = req.body.text;


    //Eigenschaften splitten für Array
    let traits ="";
    if(req.body.traits.length) {
        traits = req.body.traits.split(',');
    };

    //ID erstellen -> Hashen des Hundeobjektes  
    const id = objecthash(institution+name+filename+height+birthdate+since_when+breed+colour+gender+traits+castrated+link+text);

    persistPhoto(filename, size, mimetype, id)
            .then((filename) => {
                console.log(filename);
                // console.log(img);
                insertDog(id, institution, name, filename, height, birthdate, since_when, breed,colour, gender, traits, castrated, link, text)
                    .then((name) => {
                        read_one(id)
                            .then((result) => {
                                res.render('pages/hund_gespeichert',{
                                    title: "Erfolg",
                                    headline: `Ihr Hund ${name} wurde erfolgreich gespeichert!!`,
                                    dog: result
                            });
                        })
                    })
            })      
            .catch((err) => {
                console.log(err);
                res.render("pages/insert_error", {
                    title: "Fehler",
                    headline: "Das hat nicht geklappt.",
                    text: "Bitte versuchen Sie es doch nochmal!",
                    dogs: []
                })
            })   
});


//Hunde loeschen
app.get('/hund_loeschen/:id?',(req, res)=> {
const id = req.params.id;
    read_one(id)
        .then((result) => {
             res.render('pages/delete_dog',{
                title: 'Löschen',
                headline: 'Hund löschen',
                text: `Mit dem Knopfdruck auf "Hund löschen", löschen Sie ${result.name} aus unserem System komplett raus.`,
                dog: result,
                id
            });
        })
        .catch((err) => {
            console.log(err);
            res.render("pages/insert_error", {
                title: "Fehler",
                headline: "Das hat nicht geklappt.",
                text: "Bitte versuchen Sie es doch nochmal!",
                dogs: []
            })
        })   
});


//Hunde loeschen
app.post('/hund_loeschen/:id?',(req, res)=> {
const id = req.params.id;

    delete_one(id)
        .then(() => {
             res.render('pages/erfolg_loeschen',{
                title: 'Erfolg',
                headline: 'Erfolgreich gelöscht',
                text: `Der Hund wurde erfolgreich gelöscht.`,
            });
        });
});



//Hunde editieren
app.get('/hund_bearbeiten',(req, res)=> {


    res.render('pages/edit_dog',{
        title: 'Bearbeiten',
        headline: 'Hund bearbeiten',
        text: `Bearbeiten Sie einen Hund!`
    });

    
});


// Set Port & listen Port
app.listen(8080, (err)=>{
    if (err){
        return console.error(err.message);
    }
    console.log('Tiervermittlung is listening for request');
});
