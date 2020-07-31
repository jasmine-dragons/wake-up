const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.DB;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("connection established with mongoDB");
});

const feedRouter = require("./routes/feedRoute");

app.use("/feed", feedRouter);

app.listen(port, () => {
  console.log(`app connected on port ${port}`);
});
