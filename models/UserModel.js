let mongoose = require('mongoose');
let schema = new mongoose.Schema({
    firstName: {
        type: String,
        default: ''
    },
    phone: String,
    email: {
        type: String,
        required: true,
        unique: true
    },
    mes: String,
});
let userModel = new mongoose.model('User', schema);
module.exports = userModel;