const express = require("express");
const router = express.Router();
const zod = require("zod");
const { User, Account } = require("../db");
const  {JWT_SECRET } = require("../config");
const jwt = require("jsonwebtoken");
//middlware
const { authMiddleware } = require("../middleware");

const signUpSchema = zod.object({
  username: zod.string().email(),
  firstName: zod.string(),
  lastName: zod.string(),
  password: zod.string(),
});

router.post("/signup", async  (req, res) =>{

  // console.log(req.body);
  const { success , error } = signUpSchema.safeParse(req.body);

  if (!success) {
    return res.status(400).json({
      message: "Incorrect input",
      errors: error.issues,
    });
  }

  const existingUser = await User.findOne({
    username: req.body.username
  });

  if (existingUser) {
    return res.status(409).json({
      message: "Email already taken/Incorrect inputs",
    });
  }
  const user = await User.create({
    username: req.body.username,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    password: req.body.password,
  });
  const userId = user._id;

  //--------- Create a New Account -------------- ///
  await Account.create({
    userId,
    balance: 1 + Math.random() * 10000,
  });

  const token = jwt.sign(
    {
      userId,
    },
    JWT_SECRET
  );

  res.json({
    message: "User created successfully",
    token: token,
    user
  });
});

// ---------  signIN schema  ------------------

const signInSchema = zod.object({
  username: zod.string().email(),
  password: zod.string(),
});
router.post("/signin", async  (req, res)=> {
  // const body = req.body;

  const { success } = signInSchema.safeParse(req.body);


  if (!success) {
    return res.status(411).json({
      message: " Incorrect input",
    });
  }

  const user = await User.findOne({
    username: req.body.username,
    password:req.body.password
  });

  // this is my code
  // if (user._id) {
  //   return res.json({
  //     message: "email is already taken / Incorrect Input",
  //   });
  // }

  // const dbUser = await User.create(body);
  // const token = jwt.sign(
  //   {
  //     userId: dbUser._id,
  //   },
  //   JWT_SECRET 
  // );


// TA Summna code that help to run my output
  if (user) {
    const token = jwt.sign({
        userId: user._id
    }, JWT_SECRET);

    res.json({
        token: token,
        message: `Welcome back ${user.username} `,
        user,
        success:true
    })
    return;
      }
      
    res.status(411).json({
    message: "Error while logging in" });
});

//userUpdate routes
const updateBody = zod.object({
  password: zod.string().optional(),
  firstName: zod.string().optional(),
  lastName: zod.string().optional(),
});

router.put("/", authMiddleware, async (req, res) => {
  const { success } = updateBody.safeParse(req.body);
  if (!success) {
    res.status(411).json({
      message: "Error while updating inforamtion",
    });
  }

  await User.updateOne({ _id: req.userId }, req.body);

  res.json({
    message: "Updated successfully",
  });
});

router.get("/bulk", async (req, res) => {
  const filter = req.query.filter || "";

  const users = await User.find({
    $or: [
      {
        firstName: {
          "$regex": filter,
          $options: 'i'
        },
      },
      {
        lastName: {
          "$regex": filter,
          $options: 'i'
        },
      },
    ],
  });
  res.json({
    user: users.map((user) => ({
      username: user.username,
      firstName: user.firstName,
      lastName: user.lastName,
      _id: user._id,
    })),
  });
});

module.exports = router;
