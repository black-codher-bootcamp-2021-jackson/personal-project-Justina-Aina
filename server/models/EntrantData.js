const mongoose = require("mongoose");
const { Schema } = mongoose;

const entrantDataSchema = new Schema({
  first_name: String,
  last_name: String,
  nick_name: String,
  height: String,
  'We_started_speaking_in/on...': String,
  looking_for: String,
  birthday: String,
  notes: String,
  likes: String,
  dont_likes: String,
});

mongoose.model("entrantData", entrantDataSchema, "journeyuser");
// figure out how to pull only entrant data