const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys'); // actually .js the extesion is nt needed here

// has all the configuration for passport
// Authentication
// console.developers.google.com
/* eslint-disable indent */
// prettier-ignore
passport.use(
    new GoogleStrategy(
        // first argument, some congifuration options
        {
            clientID: keys.googleClientID,
            clientSecret: keys.googleClientSecret,
            callbackURL: '/auth/google/callback', // after user grant permission to our app, the user will be redirect to thsi URL
        },
        // second argument, callback function, accessToken will be printed
        (accessToken, refreshToken, profile) => {
            console.log('access token', accessToken);
            console.log('refresh token', refreshToken);
            console.log('profile', profile);
        },
    ),
);
// tell express to involve passport when people go to this route, then user will be kicked to the oauth flow handled by passport
