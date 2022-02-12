const express = require("express");
const app = express();
const path = require("path");

// In order for Express to serve up all static web files, we need to provide some middleware with the express.static built-in middleware function.
app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));

app.listen(5000, () => {
  console.log("App listening on port 5000");
});
