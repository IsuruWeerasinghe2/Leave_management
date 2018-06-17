const express = require('express');
const router = express.Router();
const User=require('../models/user');
const jwt=require('jsonwebtoken');
const config = require('../config/database');
const passport = require('passport');



router.post("/register",function(req,res){
    const newUser = new User({
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        phonenumber:req.body.phonenumber,
        address:req.body.address,
        nicnumber:req.body.nicnumber,
        position:req.body.position,

        email:req.body.email,
        password:req.body.password
    });

    User.saveUser(newUser,function (err,user) {
        if(err){
            res.json({state:false,msg:"Data not inserted"});
        }

        if(user){
            res.json({state:true,msg:"Data inserted"});
        }
    });
});

router.post("/login",function(req,res){

    const email = req.body.email;
    const  password = req.body.password;

    User.findByEmail(email,function (err,user) {
        if(err) throw err;
        if(!user){
            res.json({state:false,msg:"No user found"});
            return false;

        }

        User.passwordCheck(password,user.password,function (err,match) {

            if(err) throw err;
            if(match){
                const token = jwt.sign( {user:user},config.secret,{expiresIn:86400});

                res.json(
                    {
                        state:true,
                        token:"JWT "+token,
                        user:{
                            id:user._id,
                            firstname:user.firstname,
                            lastname:user.lastname,
                            phonenumber:user.phonenumber,
                            address:user.address,
                            nicnumber:user.nicnumber,
                            position:user.position,
                            email:user.email,
                            password:user.password
                        }
                    })
            }else{
                res.json({state:false,msg:"password does not match"});
            }
        });
    });
});

router.get("/profile", passport.authenticate('jwt', { session: false }),
    function(req, res) {

        res.json({user:req.user});
    }
);

module.exports = router;

