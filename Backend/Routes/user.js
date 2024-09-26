const express = require("express");
const { User } = require("../db");
const { JWT_SECRET } = require("../config");
const zod = express("zod");
const jwt = require("jsonwebtoken");
const router = express.Router();

const signUpSchema = zod.object({
  username: zod.string().email(),
  password: zod.string(),
  lastname: zod.string(),
  password: zod.string(),
});

const signInSchema = zod.object({
  username: zod.string().email(),
  password: zod.string(),
  lastname: zod.string(),
  password: zod.string(),
});

router.post("/signup", async function (req, res) {
  const body = req.body;
  const { success } = signUpSchema.safeParse(req.body);

  if (!success) {
    return res.json({
      message: "Email is already taken / Icorrect input",
    });
  }

  const user = User.findOne({
    username: body.username,
  });

  if (user._id) {
    return res.json({
      message: "email is already taken / Incorrect Input",
    });
  }

  const dbUser = await User.create(body);
  const token = jwt.sign(
    {
      userId: dbUser._id,
    },
    JWT_SECRET
  );
  res.json({
    message: "User created successfully",
    token: token,
  });
});
router.post("/signin", async function (req, res) {
  const body = req.body;
  const { success } = signInSchema.safeParse(req.body);

  if (!success) {
    return res.status(411).json({
      message: " Icorrect input",
    });
  }

  const user = User.findOne({
    username: body.username,
  });

  if (user._id) {
    return res.json({
      message: "email is already taken / Incorrect Input",
    });
  }

  const dbUser = await User.create(body);
  const token = jwt.sign(
    {
        userId: dbUser._id,
    },
    JWT_SECRET
  );
  res.json({
    message: "User created successfully",
    token: token,
  });
});

module.exports = router;
