import { Request, Response } from "express";
import BookingModel from "../booking-model";

const createBooking = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const booking = new BookingModel({
      date: req.body.date,
      time: req.body.time,
      userEmail: req.body.userEmail,
      username: req.body.username,
      company: req.body.business_id
    });

    const newBooking = await booking.save();
    return res.status(201).json(newBooking);
  } catch (error: any) {
    return res
      .status(500)
      .json({ message: "Error creating booking.", error: error.message });
  }
};

export default createBooking;