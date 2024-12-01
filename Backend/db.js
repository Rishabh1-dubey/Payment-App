const mongoose = require("mongoose");
mongoose.connect('mongodb+srv://renio067778:5yNQqAwz95f46UbG@cluster0.gpp6k.mongodb.net/paytm');

const userSchema = mongoose.Schema({
  //--------------------- self pratice  by name ---------------------
  username: {
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
  password: { type: String, required: true, minLength: 5 },
});


//creating a account schema
const accountSchema = new mongoose.Schema({
  userId:{
    type:mongoose.Schema.Types.ObjectId, //Reference to user model
    ref:'User',
    required:true
  },
  balance:{
    type:Number,
    required:true
  }
});

const Account = mongoose.model("Account",  accountSchema)
const User = mongoose.model('User' , userSchema);

module.exports={
  User , Account
};


