const express = require("express");
const cors = require("cors");

const Mainrouter = require("./Routes/user");


app.use(cors());
app.use(express.json());
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

app.listen(3000);