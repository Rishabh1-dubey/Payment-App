const express = require("express")

const userRouter = require("./user")
const router= express.Router();

router.use("/user",userRouter);
//will user user router to route the pages of user
module.exports= router;