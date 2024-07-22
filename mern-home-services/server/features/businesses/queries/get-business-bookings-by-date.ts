import BookingModel from "../../bookings/booking-model";
import { Request, Response } from "express";

const getBusinessBookingsByDate = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const bookings = await BookingModel.find({
      businessId: req.params.businessId,
      date: req.params.date,
    });
    if (bookings.length === 0) {
      return res.status(400).json({ message: "No bookings by this date" });
    }
    return res.status(200).json(bookings);
  } catch (error: any) {
    return res
      .status(500)
      .json({ message: "Error getting business.", error: error.message });
  }
};
export default getBusinessBookingsByDate;