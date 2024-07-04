const express = require("express")
const cors = require("cors")
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose")
require("dotenv").config()

const authRoutes = require("./routes/userRoutes")
const port = process.env.PORT;

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log('Connected to MongoDB!');
  })
  .catch((err) => {
    console.log(err);
  });

const app = express()
app.use(express.json())
app.use(cors({ credentials: true, origin: process.env.CLIENT_URL }));
app.use(cookieParser())

app.use("/api/auth", authRoutes);

app.listen(port, ()=> console.log(`Server started at port ${port}...`))