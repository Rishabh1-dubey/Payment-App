const express = require("express")

const userRouter = require("./user")
const accountRouter= require("./account")

const router= express.Router();

router.use("/user",userRouter);
router.use("/account",accountRouter);
//will user user router to route the pages of user
module.exports= router;