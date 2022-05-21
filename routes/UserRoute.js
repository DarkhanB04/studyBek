const express = require('express')
const UserController = require('../controllers/UserController')
const router = express.Router();
router.get('/', UserController.findAll);

router.post('/', UserController.addUser);

router.delete('/:email', UserController.destroy);
module.exports = router