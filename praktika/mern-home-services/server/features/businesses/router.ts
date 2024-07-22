import express from "express";
import getBusinesses from "./queries/get-businesess";
import getBusiness from "./queries/get-business";
import getBusinessesByCategory from "./queries/get-businesses-by-category";
import createBusiness from "./queries/create-business";
import updateBusiness from "./queries/update-business";
import deleteBusiness from "./queries/delete-bussines";
import getBusinessBookingsByDate from "./queries/get-business-bookings-by-date";

const ROUTER_API_BASE = "/api/businesses";
const businessesRouter = express.Router();
businessesRouter.get(ROUTER_API_BASE, getBusinesses);
businessesRouter.get(ROUTER_API_BASE + "/:id", getBusiness);
businessesRouter.get(
  ROUTER_API_BASE + "/category/:category",
  getBusinessesByCategory
);
businessesRouter.get(ROUTER_API_BASE + "/:id/bookings/date/:date", getBusinessBookingsByDate);
businessesRouter.post(ROUTER_API_BASE, createBusiness);
businessesRouter.put(ROUTER_API_BASE + "/:id", updateBusiness);
businessesRouter.delete(ROUTER_API_BASE + "/:id", deleteBusiness);

export default businessesRouter;
