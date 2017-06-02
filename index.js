const express = require('express');

const app = express();

app.use(express.static('./assets'));

app.set('view engine', 'ejs');

app.get('/',(req, res)=>{
    res.render('pages/home',{
        title: 'Home',
        headline: 'Vermittlung',
        text: `Wir Menschen tragen eine große Verantwortung den Tieren gegenüber. Wir haben sie gerne um 
        uns herum, um uns nicht einsam zu fühlen und entledigen uns ihrer, sobald wir sie nicht mehr brauchen. 
        Dabei empfinden Tiere wie der Mensch Freude und Schmerz, Glück und Unglück. Auf den folgenden Seiten 
        finden Sie bei uns Hunde, Katzen, Kleintiere, Vögel und sogar Exoten, die darauf warten ein neues 
        Zuhause zu finden.`
    });
});

app.get('/hunde',(req, res)=>{
    res.render('pages/hunde',{
        title: 'Hunde',
        headline: 'Vermittlung von Hunden',
    });
});

app.get('/katzen',(req, res)=>{
    res.render('pages/katzen',{
        title: 'Katzen',
        headline: 'In Progress'
    });
});

app.get('/kleintiere',(req, res)=>{
    res.render('pages/kleintiere',{
        title: 'Kleintiere',
        headline: 'In Progress'
    });
});

app.get('/voegel',(req, res)=>{
    res.render('pages/voegel',{
        title: 'Vögel',
        headline: 'In Progress'
    });
});

app.get('/exoten',(req, res)=>{
    res.render('pages/exoten',{
        title: 'Exoten',
        headline: 'In Progress'
    });
});

app.get('/impressum',(req, res)=>{
    res.render('pages/impressum',{
        title: 'Impressum',
        headline: 'Impressum',
        text: ``,
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
        headline: 'Kontaktieren Sie doch uns',
    });
});

app.get('/links',(req, res)=>{
    res.render('pages/links',{
        title: 'Links',
        headline: 'In Progress',
    });
});

app.get('/tier',(req, res)=>{
    res.render('pages/tier',{
        title: 'Ihre Auswahl',
        headline: 'Ihre Auswahl: ',
    });
});

app.listen(8080, (err)=>{
    if (err){
        return console.error(err.message);
    }
    console.log('Tiervermittlung is listening for request');
});