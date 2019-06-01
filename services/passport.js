const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("../config/keys");
const mongoose = require("mongoose");
const User = mongoose.model("users");

passport.serializeUser((user, done) => {
  done(null, user.id); // take if user does not use Google into account
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
      proxy: true
    },
    // callback
    (accessToken, refreshToken, profile, done) => {
      //   console.log("accessToken", accessToken);
      //   console.log("refreshToken", refreshToken);
      //   console.log("profile", profile);
      User.findOne({ googleId: profile.id }).then(existingUser => {
        if (existingUser) {
          // Already have a record with the give profile ID
          done(null, existingUser);
        } else {
          new User({ googleId: profile.id })
            .save()
            // ensure info are up-to-dated when saved to the database
            .then(user => done(null, user));
        }
      });
    }
  )
);
