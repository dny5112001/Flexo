const multer = require('multer');
const path = require('path');
const crypto = require('crypto');

// Disk storage setup
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../upload/images'));
  },
  filename: function (req, file, cb) {
    crypto.randomBytes(16, (err, raw) => {
      if (err) return cb(err);

      cb(null, raw.toString('hex') + path.extname(file.originalname));
    });
  }
});

const uploadProfile = multer({ storage: storage });

module.exports = uploadProfile;
