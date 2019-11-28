var Sequelize = require('sequelize');
var User = require('../models/User');
var Activity = require('../models/Activity');

var UserController = {};

UserController.getOne = async function (req, res) {
    const { usrname } = req.params;
    let searchedUser = await User.findOne({
        where: {
            usrname
        }
    });
    res.status(200).json({
        data: searchedUser
    })
}

UserController.getAll = async function (req, res) {
    try{
        var Users = await User.findAll();
        res.json({
            data: Users
        })
    } catch(e){

    }
}

UserController.addUser = async function(req, res) {
    let { email, usrname, password, committee, phone, gender, usrtype, fullname } = req.body;
    try {
        let newUser = await User.create({
            email,
            usrname,
            password,
            committee,
            phone,
            gender,
            usrtype,
            fullname
        })
        if(newUser)
            res.status(200).json({
                message: "User created",
            })
    }
    catch(e){
        console.log(e);
        res.status(500).json({message: "Something went wrong"})
    }
}

UserController.getUserActivities = async function(req, res) {
    const { actid } = req.params;
    let searchedActivity = await Activity.findOne({
        where: {
            actid
        }
    });
    res.status(200).json({
        data: searchedActivity
    })
}

UserController.getActivities = async function(req, res) {
    try{
        var Activities = await Activity.findAll();
        res.json({
            data: Activities
        })
    } catch(e){

    }
}

module.exports = UserController;