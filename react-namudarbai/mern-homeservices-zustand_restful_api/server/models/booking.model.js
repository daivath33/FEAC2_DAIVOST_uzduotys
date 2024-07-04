const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema({
  companyId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Business",
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  userEmail: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
    enum: ["Submitted", "Completed", "Cancelled"],
  },
});

const Booking = mongoose.model("Booking", BookingSchema);
module.exports = Booking;
