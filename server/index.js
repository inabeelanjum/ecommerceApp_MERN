const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoutes = require("./routes/user");
const authRoutes = require("./routes/auth");
dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("db is connected"))
  .catch((err) => {
    console.log(err);
  });
app.use(express.json());
app.use("/user", userRoutes);
app.use("/auth", authRoutes);

app.listen(5555, () => {
  console.log("running ..");
});
