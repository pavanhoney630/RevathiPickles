const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "config/.env") });
const cors = require("cors");


const app = require("./app");
 

const cloudinary = require("cloudinary");
const connectDatabase = require("./config/database");

   

app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:3000", // fallback to local
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
//handle uncaught exceptions
process.on("uncaughtException", err => {
    console.log(`ERROR: ${err.message}`);
    console.log("Shutting down the server due to uncaught exception");
    process.exit(1);
});



//config

//connect to database
connectDatabase();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});



const server = app.listen(process.env.PORT, ()=> {
    console.log(`Server running on port http://localhost:${process.env.PORT}`);
})



//unhandled promise rejection
process.on("unhandledRejection", err => {
    console.log(`ERROR: ${err.message}`);
    console.log("Shutting down the server due to unhandled promise rejection");
    server.close(()=> {
        process.exit(1);
    })
});

console.log("PORT:", process.env.PORT);  // should be 4000
console.log("MONGO_URI:", process.env.MONGODB_URL);  // should not be undefined
