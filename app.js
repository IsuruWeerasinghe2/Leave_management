
const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

const config=require ('./config/database');
const user = require('./routes/users');
const request=require('./routes/requests');
const mongoose = require('mongoose');
const cors = require('cors');

const bodyParser = require ('body-parser');

const passport = require('passport');

app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);
app.use(cors());

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

const connection =mongoose.connect(config.database);
if(connection){
    console.log("Database connected");
}else {
    console.log("Database not connected");
}

app.use(express.static(path.join(__dirname,"public")));

app.use('/user',user);
app.use('/request',request);

app.get("/",function(req,res){
    res.send("Hello world")
});

app.listen(port,function () {
    console.log("Listning port to "+ port);
});