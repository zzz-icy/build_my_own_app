const passport = require('passport');
/* eslint-disable indent */
// prettier-ignore
module.exports = app => {  // exports as a function
    app.get(
        '/auth/google',
        passport.authenticate('google', {
            scope: ['profile', 'email'], // google has a list of specific pieces that can be asked for from user account
        }),
    );

    // passport will know the code, the second argument is not some logic that we ahve to write ourselves to handle that request, passport will take care of that
    app.get('/auth/google/callback', passport.authenticate('google'));
    app.get('/api/current_user', (req, res) => {
        res.send(req.user);
    })
};
