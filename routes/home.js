const express= require("express");
const router = express.Router();
const ejs = require('ejs')
const controller= require('../controllers/UserController')
var path = require('path');
router
    .route("/")
    .get((req, res)=> {
       res.render(path.resolve('views/index.ejs'))
    })
    .post(controller.create);
module.exports = router;