const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const config = require(__base + 'system/config.js');
const User = require(__base + 'models/oauth.js');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id).then((user) => {
        done(null, user);
    });
});

passport.use(
    new GoogleStrategy({
        // options for google strategy
        clientID: config.oauth.google.clientID,
        clientSecret: config.oauth.google.clientSecret,
        callbackURL: '/auth/google/redirect'
    }, (accessToken, refreshToken, profile, done) => {
        // check if user already exists in our own db
        User.findOne({"userName": profile.id}).then((currentUser) => {
            if(currentUser){
                done(null, currentUser);
            } else {
                new User({
                  "fullName":profile.displayName,
                  "userName":profile.id,
                  "email":profile.emails[0].value,
                  "userType":"Consumer"
                }).save().then((newUser) => {
                    console.log('created new user: ', newUser);
                    done(null, newUser);
                })
            }
        })
    })
)
