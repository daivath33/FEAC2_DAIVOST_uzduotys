const express = require("express");
const router = express.Router();

const Booking = require("../models/booking.model");

// Get all bookings related to a specific user's email
router.get("/user/:email", async (req, res) => {
  try {
    const bookings = await Booking.find({ userEmail: req.params.email });
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new booking
router.post("/", async (req, res) => {
  const booking = new Booking({
    companyId: req.body.companyId,
    date: req.body.date,
    time: req.body.time,
    userEmail: req.body.userEmail,
    username: req.body.username,
    status: req.body.status,
  });

  try {
    const newBooking = await booking.save();
    res.status(201).json(newBooking);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete booking by ID
router.delete("/:id", async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);
    if (booking == null) {
      return res.status(404).json({ message: "Booking not found" });
    }

    await booking.deleteOne()
    res.json({ message: "Deleted Booking" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
