const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const bodyParser = require("body-parser");
const keys = require("./config/keys");
// "./models/User" and "./services/passport", order is critical. Error will appear if incorrect order
require("./models/user");
require("./services/passport");

mongoose.connect(keys.mongoURI);

const app = express();

//middleware
app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000, // cookie stays 30 days Maximum
    keys: [keys.cookieKey] // encryption key
  })
);

app.use(passport.initialize());
app.use(passport.session());

require("./routes/authRoutes")(app);
require("./routes/billingRoutes")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
