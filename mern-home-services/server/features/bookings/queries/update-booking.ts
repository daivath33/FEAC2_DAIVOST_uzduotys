import { Request, Response } from "express";
import BookingModel from "../booking-model";

const updateBooking = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const booking = await BookingModel.findById(req.params.id);
    if (booking == null) {
      return res.status(404).json({ message: "Booking not found" });
    }

    if (req.body.date != null) {
      booking.date = req.body.date;
    }
    if (req.body.time != null) {
      booking.time = req.body.time;
    }
    if (req.body.status != null) {
      booking.status = req.body.status;
    }

    const updatedBooking = await booking.save();
    return res.status(200).json(updatedBooking);
  } catch (error: any) {
    return res
      .status(500)
      .json({ message: "Error updating booking.", error: error.message });
  }
};

export default updateBooking;
