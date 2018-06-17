const mongoose =require('mongoose');
const schema =mongoose.Schema;

const  requestSchema=new schema ({
    firstname:{type:String,required:true},
    lastname:{type:String,required:true},
    email:{type:String,required:true},
    nicnumber:{type:String,required:true},
    leavetype:{type:String,required:true},
    startdate:{type:String,required:true},
    starttime:{type:String,required:true},
    enddate:{type:String,required:true},
    endtime:{type:String,required:true},
    reason:{type:String,required:true},
});
const Request=module.exports =mongoose.model("Request",requestSchema);

module.exports.saveRequest=function (newRequest,callback) {
    newRequest.save(callback)

}