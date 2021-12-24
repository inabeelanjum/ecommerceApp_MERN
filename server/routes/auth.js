const router = require("express").Router();
const user = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

//Register routes

router.post("/register", async (req, res) => {
  const newUser = new user({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASSWORD_ENC_KEY
    ).toString(),
  });
  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/login", async (req, res) => {
  try {
    const getUser = await user.findOne({ username: req.body.username });
    if (!getUser) {
      res.status(401).json("wrong credentials");
    } else {
      const hashedPassword = CryptoJS.AES.decrypt(
        getUser.password,
        process.env.PASSWORD_ENC_KEY
      );
      const password = hashedPassword.toString(CryptoJS.enc.Utf8);
      if (password !== req.body.password) {
        res.status(401).json("wrong credentials");
      } else {
        const token = jwt.sign(
          { id: getUser.id, isAdmin: getUser.isAdmin },
          process.env.TOKEN_ENC_KEY
        );
        res.status(200).json({ getUser, token });
      }
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
