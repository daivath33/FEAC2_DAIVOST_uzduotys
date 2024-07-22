import express from "express";
import getBookingsByUser from "./queries/get-bookings-by-user";
import createBooking from "./queries/create-booking";
import updateBooking from "./queries/update-booking";
import deleteBooking from "./queries/delete-booking";

const ROUTER_API_BASE = "/api/bookings";
const bookingsRouter = express.Router();
bookingsRouter.get(ROUTER_API_BASE  + "/user/:email", getBookingsByUser);
bookingsRouter.post(ROUTER_API_BASE, createBooking);
bookingsRouter.put(ROUTER_API_BASE + "/:id", updateBooking);
bookingsRouter.delete(ROUTER_API_BASE + "/:id", deleteBooking);

export default bookingsRouter;