const express = require("express");
const cloudinary = require("cloudinary").v2;
const router = express.Router();
const Business = require("../models/business.model");
const Order = require("../models/booking.model");

// Get all businesses
router.get("/", async (req, res) => {
  try {
    const businesses = await Business.find();
    res.json(businesses);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get all businesses belonging to the specified category
router.get("/category/:category", async (req, res) => {
  try {
    const businesses = await Business.find({
      category: req.params.category,
    }).populate("category");
    res.json(businesses);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//  Get a specific business by ID
router.get("/:id", async (req, res) => {
  try {
    const business = await Business.findById(req.params.id);
    if (business == null) {
      return res.status(404).json({ message: "Business not found" });
    }
    res.json(business);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add a new business to the list
router.post("/", async (req, res) => {
  const business = new Business({
    name: req.body.name,
    description: req.body.description,
    address: req.body.address,
    category: req.body.category,
    contactPerson: req.body.contactPerson,
    email: req.body.email,
    photos: req.body.photos,
  });

  try {
    const newBusiness = await business.save();
    res.status(201).json(newBusiness);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//  Update an existing business
router.put("/:id", async (req, res) => {
  try {
    const business = await Business.findById(req.params.id);
    if (business == null) {
      return res.status(404).json({ message: "Business not found" });
    }

    if (req.body.name != null) {
      business.name = req.body.name;
    }
    if (req.body.description != null) {
      business.description = req.body.description;
    }
    if (req.body.address != null) {
      business.address = req.body.address;
    }
    if (req.body.category != null) {
      business.category = req.body.category;
    }
    if (req.body.contactPerson != null) {
      business.contactPerson = req.body.contactPerson;
    }
    if (req.body.email != null) {
      business.email = req.body.email;
    }
    if (req.body.photos != null) {
      business.photos = req.body.photos;
    }

    const updatedBusiness = await business.save();
    res.json(updatedBusiness);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get all orders for a specific business on the specified date
router.get("/:businessId/bookings/date/:date", async (req, res) => {
  try {
    const orders = await Order.find({
      businessId: req.params.businessId,
      date: req.params.date,
    });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
