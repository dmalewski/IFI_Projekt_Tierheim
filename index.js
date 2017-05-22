const express = require('express');

const app = express();

app.use(express.static('./assets'));

app.set('view engine', 'ejs');

app.get('/',(req, res)=>{
    res.render('pages/home',{
        title: 'Home',
        headline: 'Tiervermittlung',
        text: 'Wir Menschen tragen eine große Verantwortung den Tieren gegenüber. Wir haben sie gerne um uns herum, um uns nicht einsam zu fühlen und entledigen uns ihrer, sobald wir sie nicht mehr brauchen. Dabei empfinden Tiere wie der Mensch Freude und Schmerz, Glück und Unglück. Auf den folgenden Seiten finden Sie bei uns Hunde, Katzen, Kleintiere, Vögel und sogar Exoten, die darauf warten ein neues Zuhause zu finden.'
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
    });
});

app.get('/kontakt',(req, res)=>{
    res.render('pages/kontakt',{
        title: 'Kontakt',
        headline: 'Kontaktieren Sie uns:',
    });
});

app.get('/links',(req, res)=>{
    res.render('pages/links',{
        title: 'Links',
        headline: 'Nützliche weiterführende Links',
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