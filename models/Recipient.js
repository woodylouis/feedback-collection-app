const mongoose = require("mongoose");
const { Schema } = mongoose; //equivalent: const Schema = mongoose.Schema;

const recipientSchema = new Schema({
  email: String,
  responded: { type: Boolean, default: false } //determine users vote or not
});

module.exports = recipientSchema;
