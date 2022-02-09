const mongoose = require("mongoose");
const { Schema } = mongoose;


const userDataSchema = new Schema({
  first_name: String,
  last_name: String,
  birthday: String,
  wants: {1:String, 2:String, 3:String, 4:String},
  dont_wants: {1:String, 2:String, 3:String, 4:String},
  entries: [{
    first_name: String,
    last_name: String,
    nick_name: String,
    height: String,
    'We_started_speaking_in/on...': String,
    looking_for: String,
    birthday: String,
    notes: String,
    likes: {1:String, 2:String, 3:String, 4:String},
    dont_likes: {1:String, 2:String, 3:String, 4:String},
  }]
});

mongoose.model("userData", userDataSchema, "journeyuser");
