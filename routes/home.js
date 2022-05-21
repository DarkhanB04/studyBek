const express= require("express");
const router = express.Router();
const ejs = require('ejs')

const Post = require('../models/UserModel')
const UserAddController = require('../controllers/UserController')
var path = require('path');
router
    .route("/")
    .get((req, res)=> {
       res.render(path.resolve('views/index.ejs'))
    })
    .post(UserAddController.addUser)
module.exports = router;