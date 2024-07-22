import { Application } from 'express';
import  authRouter from '../features/auth/router';
import  userRouter from "../features/users/router";
import businessesRouter from '../features/businesses/router';
import bookingsRouter from '../features/bookings/router';

const configRoutes = (server: Application) => {
  server.use(authRouter);
  server.use(userRouter);
  server.use(businessesRouter);
  server.use(bookingsRouter)
}

export default configRoutes;