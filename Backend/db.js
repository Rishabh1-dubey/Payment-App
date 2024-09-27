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
  lastName: { type: String, required: true, trim: true, maxLength: 50 },
  password: { type: String, required: true, minLength: 7 },
});


//creating a account schema
const accountSchema = new mongoose.Schema({
  userId:{
    type:mongoose.Schema.Types.ObjectId, //Reference to user model
    ref:'User',
    require:true
  },
  balance:{
    type:Number,
    require:true
  }
});

const Account = mongoose.model("Account",  accountSchema)
const User = mongoose.model('User' , userSchema);

module.exports={
  User,Account
};


