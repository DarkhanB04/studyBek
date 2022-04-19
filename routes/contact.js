const express= require("express");
const router = express.Router();

const ejs = require('ejs')

var path = require('path');
router
    .route("/")
    .get((req, res)=> {
        res.render(path.resolve('views/contact.ejs'
        ))
    })

    .post((req, res) =>{
        res.send("POST")
    })
module.exports = router;