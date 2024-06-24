const express = require("express");
const square=require('./math')
const logger= require("morgan")
const app = express();
const port = 3000;
app.use(logger("dev"))


app.get("/", function (req, res) {
  res.send("Hello World!");
});

a={
    "name":"sanket",
    "item":"phone"
}
app.use("/media", express.static("public"));
app.get("/about", function (req, res) {
    res.send(a);
  });
app.all("/secret", function (req, res, next) {
    console.log("Accessing the secret section…");
    next(); // pass control to the next handler
  });

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});

