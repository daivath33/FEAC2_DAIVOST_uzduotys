const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose")
require("dotenv").config()
const categoryRoutes = require("./routes/category.routes")
const companyRoutes = require("./routes/business.routes")
const orderRoutes = require("./routes/booking.routes")
const authRoutes = require("./routes/user.routes")
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
app.use(morgan("tiny"))
app.use(cors({ credentials: true, origin: process.env.CLIENT_URL }));
app.use(cookieParser())

app.use("/api/auth", authRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/businesses", companyRoutes);
app.use("/api/bookings", orderRoutes);

app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Internal server error";
  res.status(status).json([
    {
      message,
    },
  ]);
});

app.listen(port, ()=> console.log(`Server started at port ${port}...`))