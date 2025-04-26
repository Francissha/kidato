require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const authRoutes = require('./routes/auth-routes/index')

const app = express();
const PORT = process.env.PORT || 7000;
const MONGO_URI = process.env.MONGO_URI;

app.use(cors({
  origin: process.env.CLIENT_URL,  
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(express.json());


mongoose.connect(MONGO_URI)
  .then(() => console.log("MongoDB connected successfully"))
  .catch((e) => console.log("MongoDB connection error:", e));

  //routes configured
app.use("/auth", authRoutes)

  // Error Handling Middleware
  
app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(500).json({
    message: "Something went wrong",
    success: false
  });
});


app.listen(PORT, () => {
  console.log(`Server is now running on port ${PORT}`);
});



