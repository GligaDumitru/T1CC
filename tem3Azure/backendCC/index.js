const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const PORT = process.env.PORT || 5000;
const db = require("./database/connection");
const userRouter = require("./routes/user");
const cors = require("cors");
const axios = require("axios");
mongoose
  .connect(process.env.MONGODB_URI || db.connection, { useNewUrlParser: true })
  .then(
    (_) => console.log("Connection established"),
    (err) => console.log("err", err)
  );

const server = express();
server.use(cors());
server.use(passport.initialize());
require("./passport")(passport);

// Body Parser for json from request
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());

// Routes
server.use("/api/v1/users", userRouter);
server.get("/api/v1/posts", async (req, res) => {
  const data = await axios
    .get("https://ccloud4.azurewebsites.net/api/posts")
    .then((r) => r.data)
    .catch((err) => err.response.data);

  return res.status(200).json({ data });
});
server.post("/api/v1/posts", async (req, res) => {
  const { subject, name, email, message } = req.body;
  console.log(req.body)
  const post = { subject, name, email, message };
  const data = await axios
    .post("https://ccloud4.azurewebsites.net/api/addpost", post)
    .then((r) => r.data)
    .catch((err) => err.response.data);
  return res.json({ msgg: data });
});
server.get("/", (req, res) => {
  res.status(200).json({
    msg1: "Welcome2",
  });
});

server.listen(PORT, (_) => console.log(`Server is running on port: ${PORT}`));
