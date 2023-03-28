require('dotenv').config();
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

            cb(null, profile);
            console.log(profile);

            try {
                let user = await User.findOne({ where: { googleId: profile.id } })

                if (!user) {

                    user = {
                        id: profile.id,
                        name: profile.name.givenName,
                        lastName: profile.name.familyName,
                    }
                    const newUser = await User.create(user)

                    cb(null, profile);
                } else {
                    cb(null, false);
                }
            } catch (err) {
                cb(err, null)
            }
        }
    ));
}