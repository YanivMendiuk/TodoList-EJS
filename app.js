const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res) {
  var today = new Date();
  var currentDay = today.getDay;
  var weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  var day = weekdays[3];

  res.render("list", { kindOfDay: day });
});

app.listen(3000, function() {
  console.log("Server is running on port 3000");
});
