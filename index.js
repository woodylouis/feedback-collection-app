const express = require("express");
const mongoose = require("mongoose");
const keys = require("./config/keys");
// "./models/User" and "./services/passport", order is critical. Error will appear if incorrect order
require("./models/User");
require("./services/passport");

mongoose.connect(keys.mongoURI);

const app = express();

require("./routes/authRoutes")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
