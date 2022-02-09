const mongoose = require("mongoose");
const { Schema } = mongoose;


const userDataSchema = new Schema({
  first_name: String,
  last_name: String,
  birthday: String,
  // wants: String,
  // dont_wants: String,
});

mongoose.model("userData", userDataSchema, "journeyuser");
