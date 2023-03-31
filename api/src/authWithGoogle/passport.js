require('dotenv').config();
const { defaults } = require('request');
const { User } = require("../db");
const { ID_CLIENT_GOOGLE, KEY_SECRET_GOOGLE } = process.env;
const { where } = require("sequelize");

var GoogleStrategy = require('passport-google-oauth20').Strategy;


module.exports = (passport) => {
    passport.use(new GoogleStrategy({
        clientID: ID_CLIENT_GOOGLE,
        clientSecret: KEY_SECRET_GOOGLE,
        callbackURL: "http://localhost:3001/auth/google/callback"
    },
        async function (accessToken, refreshToken, profile, cb) {

            try {
                const [user, created] = await User.findOrCreate({
                    where: { googleId: profile.id },
                    defaults: {
                        id: profile.id,
                        user_name: profile.name.givenName,
                        user_lastname: profile.name.familyName,
                        user_email: profile.emails[0].value   
                    }
                })
                cb(null, user)
            } catch (err) {
                cb(err, null)
            }
        }
    ));
}