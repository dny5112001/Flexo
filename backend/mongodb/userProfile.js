const mongoose = require('mongoose');

let userProfileSchema  = mongoose.Schema({
    name:{
        type:String,
    },
    profile_image:{
        type:String,
    },
    domain:{
        type:String,
    },   
    github_link:{
        type:String,
    },
    LinkedIn_link:{
        type:String,
    },
    Instagram_link:{
        type:String,
    },
    phone:{
        type:Number,
    },
    skills:{
        type:Array,
    },
    projects:{
        type:Array,
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    }
})

module.exports = mongoose.model("profile",userProfileSchema);