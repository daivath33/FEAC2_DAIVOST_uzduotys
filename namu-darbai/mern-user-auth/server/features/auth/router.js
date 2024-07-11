const express = require("express");
const login = require("./queries/login");
const register = require("./mutations/register");

const ROUTER_API_BASE = "/api/auth";
const authRouter = express.Router();

authRouter.post(ROUTER_API_BASE + "/login", login);
authRouter.post(ROUTER_API_BASE + "/register", register);

module.exports = authRouter;
