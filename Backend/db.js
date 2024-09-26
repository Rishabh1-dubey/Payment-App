const mongoose = require("mongoose");
const { string } = require("zod");
mongoose.connect("mongodb://localhost:27017/Payment");

const userSchema = mongoose.Schema({
  //--------------------- self pratice  by name ---------------------
  Username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    minLength: 3,
    maxLength: 30,
  },
  firstName: { type: String, required: true, trim: true, maxLength: 50 },
  firstName: { type: String, required: true, trim: true, maxLength: 50 },
  password: { type: String, required: true, minLength: 7 },
});


const user = mongoose.model('User' , userSchema);
module.exports={
    user
};


