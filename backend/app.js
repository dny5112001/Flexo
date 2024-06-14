const express = require("express");
const userModel = require("./mongodb/userCredentials");
const profileModel = require("./mongodb/userProfile");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieparser = require("cookie-parser");
const cors = require("cors");
const upload = require("./Utils/multerConfig");
const uploadProfile = require("./Utils/multerConfigProject");
const app = express();

const PORT = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieparser());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.send("The backend application server is running");
});

// Route for uploading the image from file using multer {userProfile}
app.use("/images", express.static("upload/images"));
app.post("/uploadProfile", isloggedin, upload.single("profile"), (req, res) => {
  res.json({
    success: 1,
    image_url: `http://localhost:${PORT}/images/${req.file.filename}`,
  });
});

// Route for uploading the image from the file using multer {projectProfile}
app.use("/project_images", express.static("upload/project_images"));
app.post(
  "/uploadProjectProfile",
  isloggedin,
  uploadProfile.single("projectProfile"),
  (req, res) => {
    res.json({
      success: 1,
      image_url: `http://localhost:${PORT}/project_images/${req.file.filename}`,
    });
  }
);

// Route for user registration
app.post("/register", async (req, res) => {
  let { name, email, password } = req.body;
  let user = await userModel.findOne({ email });
  if (user) {
    res.status(500).send("The user with same email already exists!");
  } else {
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(password, salt, async (err, hash) => {
        let user = await userModel.create({
          name,
          email,
          password: hash,
        });

        let token = jwt.sign({ userId: user._id, email }, "secret");
        res.cookie("token", token, {
          withCredentials: true,
          httpOnly: false,
        });
        res.send({ success: true });
      });
    });
  }
});

// Route for user login
app.post("/login", async (req, res, next) => {
  let { email, password } = req.body;
  let user = await userModel.findOne({ email });
  if (!user) {
    res.send("The user with this email does not exist!");
  } else {
    bcrypt.compare(password, user.password, (err, result) => {
      if (result) {
        let token = jwt.sign({ userId: user._id, email }, "secret");
        res.cookie("token", token, {
          withCredentials: true,
          httpOnly: false,
        });
        res.send({ success: true });
        next();
      } else {
        console.log("Wrong Password, please try again");
        res.send({ success: false });
      }
    });
  }
});

// Route for adding user profile
app.post("/addprofile", isloggedin, async (req, res) => {
  try {
    let user = await userModel
      .findOne({ email: req.user.email })
      .populate("profile");
    let {
      name,
      profile_image,
      domain,
      github_link,
      LinkedIn_link,
      Instagram_link,
      phone,
      skills,
      projects,
    } = req.body;

    if (!user) {
      return res.status(404).send("User not found");
    }

    let existingProfile = await profileModel.findOne({ user: req.user.userId });
    if (existingProfile) {
      return res.send({
        success: false,
        data: "You have already uploaded your profile data, hit edit button if needed",
      });
    }

    let newProfile = await profileModel.create({
      name,
      profile_image,
      domain,
      github_link,
      LinkedIn_link,
      Instagram_link,
      phone,
      skills,
      projects,
      user: req.user.userId,
    });

    user.profile = newProfile._id;
    await user.save();

    console.log(`User profile has been saved: ${user}`);
    res.send({ success: true });
  } catch (error) {
    console.error("Error saving user profile:", error);
    res.status(500).send("An error occurred while saving the user profile");
  }
});

// Route for getting all users
app.get("/getAllUsers", async (req, res) => {
  let users = await profileModel.find();
  res.send(users);
});

// Route for getting the current user
app.get("/getuser", isloggedin, async (req, res) => {
  try {
    let user = await userModel.findOne({ email: req.user.email });
    if (!user) {
      return res.status(404).send({ success: false, data: "User not found" });
    }

    let ProfileRef = user.profile;  
    let profile = await profileModel.findOne({ _id: ProfileRef });
    if (!profile) {
      return res.status(404).send({ success: false, data: "Profile not found , add your details" });
    }

    res.send({ success: true, data: profile });
  } catch (error) {
    console.error("Error fetching user profile:", error);
    res.status(500).send({ success: false, data: "An error occurred while fetching the user profile" });
  }
});


// Middleware for checking if the user is logged in
function isloggedin(req, res, next) {
  if (!req.cookies.token) {
    res.send({ success: false });
  } else {
    try {
      let data = jwt.verify(req.cookies.token, "secret");
      req.user = data;
      next();
    } catch (error) {
      res.send({ success: false });
    }
  }
}

app.get("/getcookie", (req, res) => {
  console.log(req.cookies.token);
  if (req.cookies.token) {
    res.send({ success: true });
  } else {
    res.send({ success: false });
  }
});

app.get("/logout", (req, res) => {
  res.cookie("token", "");
  res.send({ success: true });
});

// Route for running the backend application on the given port
app.listen(PORT, (err) => {
  if (err) {
    console.log(`The backend application is facing error: ${err}`);
  } else {
    console.log(`The backend application is running on port ${PORT}`);
  }
});
