const mongoose = require("mongoose");
const { Schema } = mongoose; //equivalent: const Schema = mongoose.Schema;

const surveySchema = new Schema({
  title: String,
  body: String,
  subject: String,
  recipents: [String]
});
