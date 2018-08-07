const argv = require('./argv');

module.exports = parseInt(argv.port || process.env.PORT || '3000', 10);
// process.env.PORT (for production)
// look at the underlying environment to see if they have declared a port for us to use
// for development, local machine, 3000
