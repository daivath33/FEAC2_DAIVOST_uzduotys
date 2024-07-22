import { Request, Response } from 'express';
import BookingModel from "../booking-model";
import { IBusiness } from "../../businesses/business-model";

const getBookingsByUser = async (req: Request, res: Response): Promise<Response> => {
    const userEmail= req.params.email
    console.log(userEmail)
       try {
      const bookings = await BookingModel.find({ userEmail: req.params.email })
        .populate<{ company: IBusiness }>('company')
        .exec();
        return res.status(200).json(bookings); 

    } catch (error: any) {
        return res.status(500).json({ message: 'Error getting bookings.', error: error.message });
    }
  };
  export default getBookingsByUser;