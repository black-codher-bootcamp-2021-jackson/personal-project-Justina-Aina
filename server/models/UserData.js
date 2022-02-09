const mongoose = require("mongoose");
const { Schema } = mongoose;


const userDataSchema = new Schema({
  first_name: String,
  last_name: String,
  birthday: String,
  wants: {1:String, 2:String, 3:String, 4:String},
  dont_wants: {1:String, 2:String, 3:String, 4:String},
});

mongoose.model("userData", userDataSchema, "journeyuser");
