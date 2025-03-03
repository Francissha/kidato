require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 6000;
const MONGO_URI = process.env.MONGO_URI;

const corsOptions = {
  origin: "*",  
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"]
};

app.use(express.json());


mongoose.connect(MONGO_URI)
  .then(() => console.log("MongoDB connected successfully"))
  .catch((e) => console.log("MongoDB connection error:", e));

app.listen(PORT, () => {
  console.log(`Server is now running on port ${PORT}`);
});

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(500).json({
    message: "Something went wrong",
    success: false
  });
});

