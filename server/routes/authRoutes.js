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

    app.get('/api/logout', (req, res) => {
        req.logout(); // a function attached to req actumatically by passsport, it takes the cookie containing the user id, and kills the cookies
        res.send(req.user); // send back some ackonwledgement, no content or undefined
    })

    app.get('/api/current_user', (req, res) => {
        res.send(req.user);
        // res.send(req.session);
        // we will get the following:
        // {"passport":{"user":"5b71fbbb4cb3f409e93e16c5"}} it is the unique id automatically generated by MongoDb
    })
};
