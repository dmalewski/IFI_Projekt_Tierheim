const express = require('express');
const bodyparser = require('body-parser');
const app = express();

const {getHunde} = require('./lib/services/pagination'); <!--pagination-->


const {persistMail} = require('./lib/persister');
const read = require('./lib/services/reader');

app.use(express.static('./assets'));
app.use(bodyparser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

app.get('/',(req, res)=>{
     read().then((results) => {
        res.render('pages/home',{
            title: 'Home',
            headline: 'Vermittlung',
            text: `Wir Menschen tragen eine große Verantwortung den Tieren gegenüber. Wir haben sie gerne um
            uns herum, um uns nicht einsam zu fühlen und entledigen uns ihrer, sobald wir sie nicht mehr brauchen.
            Dabei empfinden Tiere wie der Mensch Freude und Schmerz, Glück und Unglück. Auf den folgenden Seiten
            finden Sie bei uns Hunde, Katzen, Kleintiere, Vögel und sogar Exoten, die darauf warten ein neues
            Zuhause zu finden.`,
            dogs:results
         });
    });
});

app.get('/hunde',(req, res)=>{
    read().then((results) => {
        res.render('pages/hunde',{
            title: 'Hunde',
            headline: 'Vermittlung von Hunden',
            text: `Ein Tier kann aus vielfältigen Gründen im Tierheim sitzen. "Scheidungshunde" sind nicht selten
            und auch jede andere Art von veränderten Lebensumständen gehören zu den häufigen Gründen für eine Abgabe
            im Heim. Das können z.B. berufliche Veränderungen und damit verbundener Zeitmangel oder auch Allergien des
            Vorbesitzers sein. Leider gehört dazu auch manchmal menschlicher Familienzuwachs. Dabei könnte die fachliche
            Beratung zum richtigen Umgang für Eltern und Kind in den meisten Fällen eventuell vorhandene Zweifel zerstreuen.
            Gute Hundeschulen bieten oft auch in diesen Fällen eine Hilfestellung. `,
            dogs:results
        });
    });
});

app.get('/katzen',(req, res)=>{
    res.render('pages/katzen',{
        title: 'Katzen',
        headline: 'In Bearbeitung',
        text: `Es tut uns leid, jedoch befindet sich diese Seite noch in Bearbeitung. Wir hoffen, dass Ihnen unsere
        Seite gefällt, auch wenn noch nicht alle Funktionen möglich sind. Vielleicht konnten wir Sie dazu animieren, das
        ein oder andere Tier aus dem Tierheim zu adoptieren und ihm ein tolles neues Zuhause zu bieten.`,
        signature: `Bis Bald euer Team4!`,
    });
});

app.get('/kleintiere',(req, res)=>{
    res.render('pages/kleintiere',{
        title: 'Kleintiere',
        headline: 'In Bearbeitung',
        text: `Es tut uns leid, jedoch befindet sich diese Seite noch in Bearbeitung. Wir hoffen, dass Ihnen unsere
        Seite gefällt, auch wenn noch nicht alle Funktionen möglich sind. Vielleicht konnten wir Sie dazu animieren, das
        ein oder andere Tier aus dem Tierheim zu adoptieren und ihm ein tolles neues Zuhause zu bieten.`,
        signature: `Bis Bald euer Team4!`,
    });
});

app.get('/voegel',(req, res)=>{
    res.render('pages/voegel',{
        title: 'Vögel',
        headline: 'In Bearbeitung',
        text: `Es tut uns leid, jedoch befindet sich diese Seite noch in Bearbeitung. Wir hoffen, dass Ihnen unsere
        Seite gefällt, auch wenn noch nicht alle Funktionen möglich sind. Vielleicht konnten wir Sie dazu animieren, das
        ein oder andere Tier aus dem Tierheim zu adoptieren und ihm ein tolles neues Zuhause zu bieten.`,
        signature: `Bis Bald euer Team4!`,
    });
});

app.get('/exoten',(req, res)=>{
    res.render('pages/exoten',{
        title: 'Exoten',
        headline: 'In Bearbeitung',
        text: `Es tut uns leid, jedoch befindet sich diese Seite noch in Bearbeitung. Wir hoffen, dass Ihnen unsere
        Seite gefällt, auch wenn noch nicht alle Funktionen möglich sind. Vielleicht konnten wir Sie dazu animieren, das
        ein oder andere Tier aus dem Tierheim zu adoptieren und ihm ein tolles neues Zuhause zu bieten.`,
        signature: `Bis Bald euer Team4!`,
    });
});

app.get('/anmelden',(req, res)=>{
    res.render('pages/anmelden',{
        title: 'Anmelden',
        headline: `Melden Sie sich jetzt an!`,
        text: `Melden Sie sich jetzt bei Tiervermittlung an und fügen Sie unkompliziert und mit wenigen Klicks Ihre Schützlinge
                 im gesamten deutschsprachigen Raum ein. Wir helfen Ihnen die passenden Halter schnell und einfach zu ermitteln.
                 Das Einstellen ist intuitiv und schnell zu erledigen`
      });
});

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

app.get('/kontakt',(req, res)=>{
    res.render('pages/kontakt',{
        title: 'Kontakt',
        headline: 'Kontakt',
        text: `Haben Sie Fragen, Anregungen, Tipps oder Interesse an unserer Seite, füllen Sie doch einfach
                das Kontaktformular aus und senden Sie es ab. Wir freuen uns auf Ihre Nachricht! Ihr Team4`
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

app.get('/links',(req, res)=>{
    res.render('pages/links',{
        title: 'Links',
        headline: 'weiterführende Links',
        text: `Auf den Nachfolgenden Links können Sie sich über uns, die Tiere und die mit uns kooperierenden Tierheime informieren.`
    });
});

app.get('/tier',(req, res)=>{
    res.render('pages/tier',{
        title: 'Ihre Auswahl',
        headline: 'Ihre Auswahl: ',
        text: ``
    });
});

app.get('/hunde/:pages?', async (req, res)=>{
     const page = res.params.pages || 0;

     const result = await getHunde(page);

     console.log (result);

     res.render('users', result);
});


app.listen(8080, (err)=>{
    if (err){
        return console.error(err.message);
    }
    console.log('Tiervermittlung is listening for request');
});
