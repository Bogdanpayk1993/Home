var express = require('express');
var app = express();

app.get("/:myLinks", function (req, res) {
        switch (req.params["myLinks"]) {
            case "favourite_web_page":
                res.render('info', { title: 'Адреси улюблених сайтів:', options : ['google.com','facebook.com'] })
                break;      
            case "favourite_online_cinemas":
                res.render('info', { title: 'Адреси улюблених онлайн кінотеатрів:', options : ['moviestape.net','ukino.org'] })
            break;
            case "informations_about_me":
                res.render('informations_about_me')
            break;
        }
    })

module.exports = app;