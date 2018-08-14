const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');

const keys = require('../config/keys'); // actually .js the extesion is nt needed here
const User = mongoose.model('users'); // no second to use the 2nd argument(schema), one argument means we are trying to fetch something out of mongoose, 2 arguments means loading something into mongoose

// has all the configuration for passport
// Authentication
// console.developers.google.com
/* eslint-disable indent */
// prettier-ignore

// Before asking Passport to authenticate a request, the strategy (or strategies) used by an application must be configured.
// Strategies, and their configuration, are supplied via the use() function
passport.use(
    new GoogleStrategy(
        // first argument, some congifuration options
        {
            clientID: keys.googleClientID,
            clientSecret: keys.googleClientSecret,
            callbackURL: '/auth/google/callback', // after user grant permission to our app, the user will be redirect to thsi URL
        },

        // second argument, callback function, accessToken will be printed
        // When Passport authenticates a request, it parses the credentials contained in the request. It then invokes the verify callback with those credentials as arguments, in this case accessToken and refreshToken. If the credentials are valid, the verify callback invokes done to supply Passport with the user that authenticated.


        (accessToken, refreshToken, profile, done) => {
            // done:
            // initiate a query
            // look at the User collection and find the first record in the collection with that googleId, return  a promise to handle asynchronous code, not gonna use promise a lot, cause will use ES6 new feature to make promise legible, later will come back to refactor it 
            User.findOne({ googleId: profile.id })
                .then((existingUser) => {
                    if (existingUser) {
                        // If the credentials are valid, the verify callback invokes done to supply Passport with the user that authenticated.

                        // alreay have a record with a giver profile id, do nothing
                        // If the credentials are valid(here exist), the verify callback invokes done to supply Passport with the user that authenticated.
                        done(null, existingUser);
                        // 1st argument: err object, here is null
                        // 2nd argument: tells passport we are finished, here is the user
                    } else {
                        // not exist, create a new user
                        new User({
                            googleId: profile.id,   // this is one model instance, not as quite fresh
                        }).save() // same the instance
                            .then(user => done(null, user)); // user here is another model instance, but they both represent the same underlying record inside our collection, well maintained than the 1st instance, some changes have been made while the use is being made, so use this one in the promise call back which is after .save()
                        // every time we save a record to database, is synchronous operation
                        // in order to get 
                    }
                })
            // console.log('access token', accessToken);
            // console.log('refresh token', refreshToken);
            // console.log('profile', profile);
        },
    ),
);
// tell express to involve passport when people go to this route, then user will be kicked to the oauth flow handled by passport
