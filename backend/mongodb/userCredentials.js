const mongoose = require('mongoose');


mongoose.connect("mongodb://localhost:27017/Flexo");

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
