const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const { type } = require("os");
const { strict } = require("assert");
const { error } = require("console");

app.use(express.json());
app.use(cors());
// const { connected } = require('process');
mongoose.connect("mongodb+srv://Deepak93:5555555@cluster0.j7bk3iy.mongodb.net/Flexo");


app.get("/",(req,res)=>{
    res.send("The server is running");
})

// Local Image Storage End Point

const storage = multer.diskStorage({
    destination:"./upload/images",
    filename:(req,file,cb)=>{
        return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({storage:storage})

app.use('/images',express.static('upload/images'))
app.post("/upload",upload.single("profile"),(req,res)=>{
    res.json({
        success:1,
        image_url :`http://localhost:${port}/images/${req.file.filename}`
    })
})


// User Schema for Mongoose 
const UserSchema = mongoose.model("UserSchema",{
    name:{
        type:String,
        required:true
    },
    profile_image:{
        type:String,
        required:true
    },
    domain:{
        type:String,
        required:true
    },   
    github_link:{
        type:String,
        required:true
    },
    LinkedIn_link:{
        type:String,
        required:true
    },
    Instagram_link:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    skills:{
        type:Array,
        required:true
    },
    projects:{
        type:Array,
        required:true
    }


})


// Endpoint for adding the userdata 

app.post("/adduserdata", async (req, res) => {
    try {
      const { name, profile_image, domain, github_link, LinkedIn_link, Instagram_link, phone, skills, projects } = req.body;
  
      // Validate required fields
      if (!name || !profile_image || !domain || !github_link || !LinkedIn_link || !Instagram_link || !phone || !skills || !projects) {
        return res.status(400).json({ error: "Missing required fields" });
      }
  
      // Check if a user with the same phone number already exists
      const existingUser = await UserSchema.findOne({ phone });
      if (existingUser) {
        return res.status(400).json({ error: "User already exists. Cannot post again." });
      }
  
      // Create a new user
      const user = new UserSchema({
        name,
        profile_image,
        domain,
        github_link,
        LinkedIn_link,
        Instagram_link,
        phone,
        skills,
        projects,
      });
  
      await user.save();
      console.log("User Details saved");
      res.status(201).json({ success: true, user });
    } catch (error) {
      console.error("Error saving user details:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });


app.get("/getdata",async(req,res)=>{
    let userlist = await UserSchema.find();
    console.log(userlist);
    res.send(userlist)
})


// Database Schema for user Login and Signup

const user_credentials = mongoose.model("user_credentials",{
    name: {
        type:String,
    },
    email: {
        type:String,
        required:true
    },

    password: {
        type:String,
        required:true
    },
    userdata:{
        type:Object
    }
})



// Endpoint for the user Login
app.post("/signup",async (req,res)=>{
    let check = await user_credentials.findOne({email:req.body.email})
    if(check){
        return res.status(400).json({
            success:false,
            error:"Existing User Found"
        })
    }

    let userdata = {}
    const user = new user_credentials({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
        userdata:userdata,
    })
    await user.save();
    const data = {
        user:{
            id:user.id
        }
    }
    const token = jwt.sign(data,'secret_flexo');
    res.json({
        success:true,
        token
    })
})


app.post("/login",async(req,res)=>{
    let user = await user_credentials.findOne({email:req.body.email})
    if(user){
        password_compare = req.body.password === user.password;
        if(password_compare){
            const data ={
                user:{
                    id:user.id
                }
            }
            const token = jwt.sign(data,'secret_flexo');
            res.json({
                success:true,
                token
            })
        }else{
            res.status.json({
                success:false,
                error:"Wrong Password"
            })
        }
    }
})



// Creating middleware taki user ko fetch kar sake

const fetchUser = async (req,res,next)=>{
    const token = req.header('auth-token')
    if(!token){
        res.send({
            error:"Please Authenticate using the valid token"
        })
    }else{
        try{
            const data = jwt.verify(token,'secret_flexo')
            req.user = data.user
            next()
        }catch(err){
            res.status(401).send({errors:"Please authenticate using a valid token"})
        }
    }
}


// Creating the endpoint taki user ke schema ke andar uska detail add kar sake

app.post("/addUserSchemadata", fetchUser, async (req, res) => {
    try {
      const { id, data } = req.body;
      if (!id || !data) {
        return res.status(400).json({ error: "Missing required data" });
      }
  
      const updatedUser = await user_credentials.findByIdAndUpdate(
        id,
        { userdata: data },
        { new: true }
      );
  
      if (!updatedUser) {
        return res.status(404).json({ error: "User not found" });
      }
  
      res.status(200).json({ success: true, message: "User data updated successfully", user: updatedUser });
    } catch (error) {
      console.error("Error updating user data:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });



app.listen(port,(err)=>{
    if(!err){
        console.log("The backend is connected with port 4000");
    }else{
        console.log("The error occured during backend connection : ", err);
    }
})



