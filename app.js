const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded(
    { extended: true }
));
app.use(express.static("public"));
let array = [];
app.set("view engine", "ejs");
app.listen(3000, function () { });

app.get("/", function (req, res) {
    let date = new Date();
    let options = { weekday: 'long', month: 'long', day: 'numeric' };
    day = (date.toLocaleDateString("en-US", options));
    res.render("index", { today: day, newListItem: array });
});

app.post("/", function (req, res) {
    let a = req.body.addItem;
    array.push(a);
    res.redirect("/");
});