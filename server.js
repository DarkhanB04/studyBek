const express = require("express")
const app = express();
const https=require('https')
var bodyParser = require("body-parser")
const ejs = require('ejs')
const port = 3000
app.set('view engine', 'ejs')
var path = require("path")
const {Router} = require("express");

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())


const UserRoute = require('./routes/UserRoute');
app.use('/user', UserRoute)


const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');
const {router} = require("express/lib/application");
const {destroy, findAll, findOne, create} = require("./controllers/UserController");
mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Database Connected Successfully!!");
}).catch(err => {
    console.log('Could not connect to the database', err);
    process.exit();
});



app.post('/', (req, res) => {
    create(req,res)
});

app.get('/read', (req, res) => {
    findAll(req, res)
});

app.get('/find', (req, res) => {
    res.render('find');
});
app.get('/delete', (req, res) => {
    res.render('delete');
});
app.get('/deletebyemail', (req, res) => {
    destroy(req,res)
});

app.use("/", require("./routes/root"));
app.use("/teacher", require("./routes/teachers"))
app.use("/index", require("./routes/home"));
app.use("/contact", require("./routes/contact"));
app.use("/about", require("./routes/about"));
app.use("/assets", express.static(__dirname+"/assets"));
app.use('/js',express.static(__dirname +'/js'));



app.listen(port, () => {
    console.log(`Server is listening on port http://localhost:${port}`);
});
