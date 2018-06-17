const express = require('express');
const router = express.Router();
const Request=require('../models/request');
const jwt=require('jsonwebtoken');
const config = require('../config/database');
const passport = require('passport');
const MongoClient = require('mongodb').MongoClient;
const url= "mongodb://localhost:27017/leaveApp";
const mongoose =require('mongoose');


router.post("/requests",function(req,res){

    const newRequest = new Request({
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        email:req.body.email,
        nicnumber:req.body.nicnumber,
        leavetype:req.body.leavetype,
        startdate:req.body.startdate,
        starttime:req.body.starttime,
        enddate:req.body.enddate,
        endtime:req.body.endtime,
        reason:req.body.reason,
    });
   Request.saveRequest(newRequest,function (err,request) {
        if(err){
            console.log("if is false")
            res.json({state:false,msg:"Data not inserted"});
        }

        if(request){
            res.json({state:true,msg:"Data inserted"});
        }
    });
})

/*mongoose.connect(url, function(err, config) {
    if (err) throw err;
    var dbo = config.database("leaveApp");
    /*Return only the documents with the address "Park Lane 38":
    var query = { email: this.user.email };
    dbo.collection("users").find(query).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
    });
}); */


   module.exports=router;