module.exports = function(app, passport) {
    
    // normal routes ===============================================================
    
        // show the home page (will also have our login links)
        app.get('/anmelden', function(req, res) {
            res.render('index.ejs', {
                title: "Anmeldung", 
                headline: "Anmeldung",
                text: "Bitte wählen Sie aus!"
            });
        });
    
        // PROFILE SECTION =========================
        app.get('/anmelden/profile', isLoggedIn, function(req, res) {
            res.render('profile.ejs', {
                title: "Profil", 
                headline: "Profil",
                text: "Hier sehen sie ihr Profil.",
                user : req.user
            });
        });
    
        // LOGOUT ==============================
        app.get('/anmelden/logout', function(req, res) {
            req.logout();
            res.redirect('/');
        });
    
    
        // locally --------------------------------
            // LOGIN ===============================
            // show the login form
            app.get('/anmelden/login', function(req, res) {
                res.render('login.ejs', { 
                    title: "Login", 
                    headline: "Login",
                    text: "Bitte melden Sie sich mit Ihren Anmeldedaten an!",
                    message: req.flash('loginMessage') });
            });
    
            // process the login form
            app.post('/anmelden/login', passport.authenticate('local-login', {
                successRedirect : '/anmelden/profile', // redirect to the secure profile section
                failureRedirect : '/anmelden/login', // redirect back to the signup page if there is an error
                failureFlash : true // allow flash messages
            }));
    
            // SIGNUP =================================
            // show the signup form
            app.get('/anmelden/signup', function(req, res) {
                res.render('signup.ejs', { 
                    title: "Registrierung", 
                    headline: "Registrierung",
                    text: "Geben Sie Ihre Daten zur Registrierung ein.",
                    message: req.flash('signupMessage') });
            });
    
            // process the signup form
            app.post('/anmelden/signup', passport.authenticate('local-signup', {
                successRedirect : '/anmelden/profile', // redirect to the secure profile section
                failureRedirect : '/anmelden/signup', // redirect back to the signup page if there is an error
                failureFlash : true // allow flash messages
            }));
    };
    
    // route middleware to ensure user is logged in
    function isLoggedIn(req, res, next) {
        if (req.isAuthenticated())
            return next();
    
        res.redirect('/');
    }