const mongoose = require('mongoose');


mongoose.connect("Add your database link here");

let userCredentialSchema = mongoose.Schema({
    name:String,
    email:String,
    password:String,
    profile:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"profile"
    }
})

module.exports = mongoose.model("user",userCredentialSchema);
