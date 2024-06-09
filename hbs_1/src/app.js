const express = require("express");
const app = express();
const path = require("path");

app.set("views", path.join(__dirname, "../templates/views"));
app.set("view engine", "hbs")

app.get("/home", (req, res) => {
  var heading1 = "This is heading 1 from hbs";
  var heading2 = "This is heading 1 from hbs";
  var heading3 = "This is heading 1 from hbs";
  var heading4 = "This is heading 1 from hbs";
  var heading5 = "This is heading 1 from hbs";
  var heading6 = "This is heading 1 from hbs";

  res.render("home");
})


app.listen(5000, () => {
  console.log("Listening at port 5000");
})