const passport = require("passport");

//export routes as app to be used in index.js
module.exports = app => {
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"]
    })
  );

  app.get(
    "/auth/google/callback",
    passport.authenticate("google"),
    (req, res) => {
      res.redirect("/app/surveys");
    }
  );

  app.get("/api/logout", (req, res) => {
    req.logout();
    // res.send(req.user);
    res.redirect("/");
  });

  app.get("/api/current_user", (req, res) => {
    // res.send(req.session);
    res.send(req.user);
  });
};
