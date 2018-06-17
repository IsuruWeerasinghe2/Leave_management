
const mongoose =require('mongoose');
const schema =mongoose.Schema;
const bcrypt = require('bcryptjs');

const userSchema =new schema({


    firstname:{type:String,required:true},
    lastname:{type:String,required:true},
    phonenumber:{type:Number,required:true},
    address:{type:String,required:true},
    nicnumber:{type:String,required:true},

    position:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true}
});
const User=module.exports =mongoose.model("User",userSchema);

module.exports=mongoose.model("User",userSchema);

module.exports.saveUser = function (newUser,callback) {

    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(newUser.password, salt, function(err, hash) {

            newUser.password = hash;

            if (err){throw err;}
            newUser.save(callback);
        });
    });
}

module.exports.findByEmail = function (email,callback) {
    const query = {email:email};
    User.findOne(query,callback);
}

module.exports.passwordCheck = function (plainpassword,hash,callback) {
    bcrypt.compare(plainpassword, hash, function(err, res) {
        if(err) {
            callback(err, false)
        }
        if(res === true){
            callback(null, true);
        } else {
            callback(null, false);
        }

    });
};
module.exports.findUserbyId = function (id,callback) {
    User.findOne(id,callback);
}