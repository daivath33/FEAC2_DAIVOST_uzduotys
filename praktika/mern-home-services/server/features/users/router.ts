import  express from 'express';
import  getUsers from './queries/get-users';
import  getUser from "./queries/get-user"
import  authMiddleware from "../../middlewares/auth-middleware";

const ROUTER_API_BASE = '/api/users';
const usersRouter = express.Router();

usersRouter.get(ROUTER_API_BASE, authMiddleware, getUsers);
usersRouter.get(ROUTER_API_BASE + "/profile", authMiddleware, getUser);

export default usersRouter;