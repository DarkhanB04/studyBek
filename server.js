const express = require("express")
const app = express();
var bodyParser = require("body-parser")
const port = 3000
var path = require("path")
const {Router} = require("express");

app.use("/", require("./routes/root"));
app.use("/index", require("./routes/home"));
app.use("/contact", require("./routes/contact"));
app.use("/about", require("./routes/about"));
app.use("/assets", express.static(__dirname+"/assets"));
app.use('/js',express.static(__dirname +'/js'));

app.listen(port, () =>
   console.log(`App listening at http://localhost:${port}`)

)