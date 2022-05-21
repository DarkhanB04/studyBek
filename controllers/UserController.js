const UserModel = require('../models/UserModel')
// Create and Save a new user
module.exports.addUser = (req,res)=> {
    let newUsers = new Users({
        Username: req.body.username,
        Email: req.body.email,
    })
    newUsers.save();
    res.redirect('/');
}
// Retrieve all users from the database.
exports.findAll = async (req, res) => {
    try {
        const user = await UserModel.find();

        res.status(200).render('results', {mydata: user})
    } catch(error) {
        res.status(404).render('results', {mydata: error.message})

    }
};
exports.destroy = async (req, res) => {

    await UserModel.deleteOne({email: req.query.email}).then(data => {

        if (!data) {

            res.status(404).render('results', {mydata: "User not found"})

        } else {

            res.render('results', {mydata: "user "+ data.firstName + " deleted succesfully!"})
        }
    }).catch(err => {

        res.status(500).render('results', {mydata: err.message})
    });
};