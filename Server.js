const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const route = require('../server/routes/router')

app.use(cors());
app.use(express.json());

const dburl =
  "mongodb+srv://hokSun:hokSun2022@hoksun.1kriweb.mongodb.net/hokSun?retryWrites=true&w=majority";
  

mongoose.connect(dburl);

mongoose.connection.on("connected", () => {
  console.log("MongoDB connected at port 8080");
  useFindAndModify: false;
});

// app.use("/api/", require("./route/informationRoute"));
// app.use("/api/", require("./route/clientFeedbackRoute"));

require('./routes/router')(app);


app.get("/", (req, res) => {
  res.send("Hi, this is a server");
});
app.listen(8080, function () {
  console.log("express server is running on port 8080");
});
