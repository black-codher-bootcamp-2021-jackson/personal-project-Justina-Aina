const mongoose = require("mongoose");
const { Schema } = mongoose;

const entrantDataSchema = new Schema({
  first_name: String,
  last_name: String,
  nick_name: String,
  height: Number,
  'We_started_speaking_in/on...': String,
  looking_for: String,
  birthday: String,
  notes: String,
  likes: Array,
  dont_likes: Array,
});

mongoose.model("entrantData", entrantDataSchema);