const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/ecommerce_mern");

app.listen(5555, () => {
  console.log("running ..");
});
mongoose.connection.on("connected", () => {
  console.log("Connected ....");
});
