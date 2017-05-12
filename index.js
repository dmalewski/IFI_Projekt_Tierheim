const express = require('express');

const app = express();

app.use(express.static('./assets'));

app.set('view engine', 'ejs');

app.get('/',(req, res)=>{
    res.render('pages/home',{
        title: 'Home',
        headline: 'Willkommen',
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

app.listen(8080, (err)=>{
    if (err){
        return console.error(err.message);
    }
    console.log('Tiervermittlung is listening for request');
});