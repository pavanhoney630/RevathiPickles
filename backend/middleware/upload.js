// middlewares/multer.js
const multer = require("multer");

const storage = multer.memoryStorage(); // Use memory for stream upload
const upload = multer({ storage });

module.exports = upload;
