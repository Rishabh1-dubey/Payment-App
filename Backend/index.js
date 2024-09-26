const express = require("express");

const cors = require("cors");
const Mainrouter = require("./Routes/user");
// const userRounter = require("./Rountes/user") same approach
// app.use("api/v1",userRounter)
const app =express();


//------------middleware----------
app.use("/api/v1", Mainrouter)

///api/v1/user/signup
///api/v1/user/signin
///api/v1/user/changepassword



// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
const mongoose =  require("mongoose");


const Schema =mongoose.Aggregate.Schema;

const userSchema = new Schema({

})