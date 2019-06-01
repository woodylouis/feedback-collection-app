// key.js - to determine prod or dev
if (process.env.NODE_ENV === "production") {
  // return set of prod key
  module.export = require("./prod");
} else {
  // return set of dev key
  module.export = require("./dev");
}
