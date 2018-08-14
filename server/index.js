/* eslint consistent-return:0 */

const express = require('express'); // import modules using commonjs modules which is a system implemented in NodeJs for requiring or sharing between different files, node does not have support for ES2015 modules(import XXX from 'XXX") which is used on the front end side of our application

const mongoose = require('mongoose');
const keys = require('./config/keys');

// Got this error MissingSchemaError: Schema hasn't been registered for model "users".
// because we the wrong order of require statements
// very fine frain detail
require('./models/User'); // ensure whenever our app first boots up, all this configurations will load
require('./services/passport'); // just require, make sure it will be executed

// const authRoutes = require('./routes/authRoutes');
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

// connect to mongoDB just provisioned, before express instance defined
// To connect using a driver via the standard MongoDB URI
// the piece of code below is what we do not want to push to github, and let anyone else to have access to our database, instead store them to keys.js
// mongoose.connect(
//   'mongodb://<dbuser>:<dbpassword>@ds121312.mlab.com:21312/myownapp-dev',
// );
mongoose.connect(keys.mongoURI);

const app = express(); // create express app

require('./routes/authRoutes')(app); // pay attention to how to use app here for the authRoutes part
// we can also do require('./routes/authRoutes')(app);

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
