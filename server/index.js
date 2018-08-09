/* eslint consistent-return:0 */

const express = require('express'); // import modules using commonjs modules which is a system implemented in NodeJs for requiring or sharing between different files, node does not have support for ES2015 modules(import XXX from 'XXX") which is used on the front end side of our application
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys'); // actually .js the extesion is nt needed here
const logger = require('./logger');

const argv = require('./argv');
const port = require('./port');
const setup = require('./middlewares/frontendMiddleware');
const isDev = process.env.NODE_ENV !== 'production';
const ngrok =
  (isDev && process.env.ENABLE_TUNNEL) || argv.tunnel
    ? require('ngrok')
    : false;
const { resolve } = require('path');
const app = express(); // create express app

// Authentication
// console.developers.google.com
passport.use(
  new GoogleStrategy(
    // first argument, some congifuration options
    {
      clientID: keys.googleClientID,
      clientSecrete: keys.googleClientSecret,
      callbackURL: '/auth/google/callback', // after user grant permission to our app, the user will be redirect to thsi URL
    },
    // second argument, callback
    accessToken => {
      console.log(accessToken);
    },
  ),
);
// tell express to involve passport when people go to this route, then user will be kicked to the oauth flow handled by passport
app.get(
  '/auth/google',
  passport.authenticate('google', {
    scope: ['profile', 'email'], // google has a list of specific pieces that can be asked for from user account
  }),
);

// If you need a backend, e.g. an API, add your custom backend-specific middleware here
// app.use('/api', myApi);

// In production we need to pass these values in instead of relying on webpack
setup(app, {
  outputPath: resolve(process.cwd(), 'build'),
  publicPath: '/',
});

// get the intended host and port number, use localhost and port 3000 if not provided
const customHost = argv.host || process.env.HOST;
const host = customHost || null; // Let http.Server use its default IPv6/4 host
const prettyHost = customHost || 'localhost';

// Start your app.
app.listen(port, host, async err => {
  if (err) {
    return logger.error(err.message);
  }

  // Connect to ngrok in dev mode
  if (ngrok) {
    let url;
    try {
      url = await ngrok.connect(port);
    } catch (e) {
      return logger.error(e);
    }
    logger.appStarted(port, prettyHost, url);
  } else {
    logger.appStarted(port, prettyHost);
  }
});
