import { Request, Response } from "express";
import BookingModel from "../booking-model";

const deleteBooking = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const booking = await BookingModel.findById(req.params.id);
    if (booking == null) {
      return res.status(404).json({ message: "Booking not found" });
    }

    await booking.deleteOne();
    return res.status(200).json({ message: "Deleted Booking" });
  } catch (error: any) {
    return res
      .status(500)
      .json({ message: "Error deleting booking.", error: error.message });
  }
};

export default deleteBooking;
