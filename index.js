
/*var express = require('express');*/
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const expressValidator = require('express-validator');
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const mongo = require('mongodb');


/* Deployment auf: https://ifi-tierheim.now.sh/ */


const {read, findBreeds} = require("./lib/services/reader");

const {filter} = require("./lib/services/filter");

const {startSchedule} = require("./lib/services/schedule");

//          const mongoose = require('mongoose');

//          mongoose.connect('mongodb://cchriss:Plantier89%@ds129352.mlab.com:29352/christiane');
//          const db = mongoose.connection;
/*
const routes = require('/route/index');
const users = require('/route/users');*/

//-------------------------------------------------------
/*const router = express.Router();*/

/* Get Homepage
router.get('/', ensureAuthenticated, function(req, res){
	res.render('index');
});*/
function ensureAuthenticated(req, res, next){
	if(req.isAuthenticated()){
		return next();
	} else {
		//req.flash('error_msg','You are not logged in');
		res.redirect('/users/login');
	}
}

/*module.exports = router;*/
//-----------------------------------------------------------------------


// Init App
const express = require('express');
//
const bodyparser = require('body-parser');
const app = express();

const {getHunde} = require('./lib/services/pagination1');

const {persistMail} = require('./lib/persister');


app.use(express.static('./assets'));
//app.use(bodyparser.urlencoded({extended: true}));
// BodyParser Middleware
app.use(bodyParser.json());
/*app.use(bodyParser.urlencoded({ extended: false }));*/
//               app.use(cookieParser());
// View Engine
//                app.set('views', path.join(__dirname, 'views'));/*
//                app.engine('handlebars', exphbs({defaultLayout:'layout'}));*/
app.set('view engine', 'ejs');
/*app.set('view engine', 'handlebars');*/

//Startseite Home
app.get('/', async (req, res)=>{
     findBreeds().then((breeds) => {
        res.render('pages/home',{
            title: 'Home',
            headline: 'Home',
            text: `Wir Menschen tragen eine große Verantwortung den Tieren gegenüber. Wir haben sie gerne um
            uns herum, um uns nicht einsam zu fühlen und entledigen uns ihrer, sobald wir sie nicht mehr brauchen.
            Dabei empfinden Tiere wie der Mensch Freude und Schmerz, Glück und Unglück. Auf den folgenden Seiten
            finden Sie bei uns Hunde, Katzen, Kleintiere, Vögel und sogar Exoten, die darauf warten ein neues
            Zuhause zu finden.`,
            breeds: breeds
         });
    });
});
// Hunde
app.get('/hunde/:pages?', async (req, res)=>{
    const page = req.params.pages || 0;
    const results = await getHunde(page);
    console.log (results);

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
        pagesCount: results.pagesCount
    });
});
app.get('/details',(req, res)=>{
    res.render('pages/details',{
        title: 'Hunde',
        headline: 'Name Hund!',
    });
});
/*
app.get('/hunde/:id?', (req, res)=>{
    const id = req.params.id;
    // daten 
    res.render('pages/details',{
        //Daten aus Datenbank einbinden
    });
});*/
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
        signature: `Bis Bald euer Team4!`,
    });
});
// Login- und Registrierung
app.get('/anmelden',(req, res)=>{
    res.render('pages/anmelden',{
        title: 'Anmelden',
        headline: `Melden Sie sich jetzt an!`,
        text: `Melden Sie sich jetzt bei Tiervermittlung an und fügen Sie unkompliziert und mit wenigen Klicks Ihre Schützlinge
                 im gesamten deutschsprachigen Raum ein. Wir helfen Ihnen die passenden Halter schnell und einfach zu ermitteln.
                 Das Einstellen ist intuitiv und schnell zu erledigen`
              });
});
//
app.get('/registriert',(req, res)=>{
    res.render('pages/registriert',{
        title: 'Anmelden',
        headline: 'Herzlich Willkommen!',
        text: `Sie haben sich erfolgreich registriert!`
    });
});
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
// Kontakt
app.get('/kontakt',(req, res)=>{
    res.render('pages/kontakt',{
        title: 'Kontakt',
        headline: 'Kontakt',
        text: `Haben Sie Fragen, Anregungen, Tipps oder Interesse an unserer Seite, füllen Sie doch einfach
                das unten stehende Kontaktformular aus und senden Sie es ab. Wir freuen uns auf Ihre Nachricht!
                
                Ihr Team4`
    });
});

app.post('/kontakt',(req, res)=>{

  const name =req.body.aName;
  const vorname =req.body.aFirstname;
  const telefon =req.body.aPhone;
  const email =req.body.aemail;
  const betreff =req.body.aSubject;
  const nachricht = req.body.aText;

  persistMail(name, name)
    .then(() => {
            res.render('pages/danke',{
                title: `Kontakt`,
                headline: `Dankeschön ${name}!`,
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
// ComingSoonPage
app.get('/comingSoon',(req, res)=>{
    res.render('pages/comingSoon',{
        title: 'Error',
        });
});

// Set Static Folder
//app.use(express.static(path.join(__dirname, 'assets/js')));

// Express Session
/*app.use(session({
    secret: 'secret',
    saveUninitialized: true,
    resave: true
}));
// Passport init
app.use(passport.initialize());
app.use(passport.session());
*/
// Express Validator
/*app.use(expressValidator({
  errorFormatter: function(param, msg, value) {
      var namespace = param.split('.')
      , root    = namespace.shift()
      , formParam = root;

    while(namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param : formParam,
      msg   : msg,
      value : value
    };
  }
}));

// Connect Flash
app.use(flash());

// Global Vars
app.use(function (req, res, next) {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  res.locals.user = req.user || null;
  next();
});*/



app.set("view engine","ejs");

app.get("result",(req, res) => {
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
        res.render("pages/result",{
            dogs: results,
            message: ""
        });
    }).catch(() => {
        res.render("pages/result", {
            dogs: [],
            message: "Es wurde nichts ausgewählt!"
        })
    })
})


// Set Port & listen Port
app.listen(8080, (err)=>{
    if (err){
        return console.error(err.message);
    }
    console.log('Tiervermittlung is listening for request');
});
