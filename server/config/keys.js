/* eslint-disable indent */
// prettier-ignore
// keys.js figure out what credentials to return

// when you deploy your app to Heroku, will set the 'NODE_ENV'

if (process.env.NODE_ENV === 'production') {
    // we are in production, return the dev keys

    module.exports = require('./prod'); // eslint-disable-line global-require

} else {
    // we are in development, return the dev keys
    module.exports = require('./dev'); // eslint-disable-line global-require
}

// module.exports = {
//     googleClientID: '291900211218-qmhqkpto3a8mocflti6isbfd3g9j8qai.apps.googleusercontent.com',
//     googleClientSecret: 'Wh5UL_BmEPM9lkDD7z5cW9x0',
//     mongoURI: 'mongodb://hannah:zh891129@ds121312.mlab.com:21312/myownapp-dev',
//     cookieKey: 'uwhuejsdnfknsvniwdhipflwnfl', // make it on the fly
// };
// 400 error redirect_uri_mismatch
// https://accounts.google.com/o/oauth2/v2/auth?
// response_type=code&
// **the code that we are gonna use to exchange user profile with Google, after user grant permission, will send back this 'code', and then make a follow request with the 'code' to ask google for somr more information, this part is right now**

// redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fauth%2Fgoogle%2Fcallback&
// **should make this a authorized redirect URI, register with on Google
// hackers would make use of this redirect URL to redirect user to some malicious url they created

// scope=profile%20email&
// client_id=291900211218-qmhqkpto3a8mocflti6isbfd3g9j8qai.apps.googleusercontent.com
// **identify our app to google service, which is public**

// {
//     clientID: keys.googleClientID,
//     clientSecrete: keys.googleClientSecret,
//     callbackURL: '/auth/google/callback', // after user grant permission to our app, the user will be redirect to thsi URL
//   },

// http://localhost:3000/auth/google/callback?code=4/NgBMlczb9lhT8jYjtpQfxwC1Otp9xElSygsNpqhs52SfaxlW7ykeYQvp2Rgd4tNrTN8_GxXOvuAyzIuGO0VPHg0#

// console/log accessToke
// ya29.Glv0BZGyDBeUit6tpWl5vXqG4em5S_K_O2-txX_DEuRJlN8MKd1109fZe4J2_HukyrFIkT_EzDZVOc2-EtUR24NQrMGr1wmgmnnfvOEdlUsK9IqkrOPWDZ1iLWb_
