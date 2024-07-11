const express = require("express");
const login = require("./queries/login");
const register = require("./mutations/register");
const logout = require("./queries/logout");
const getProfile = require("./mutations/get-profile");
const getProfiles = require("./mutations/get-all-users");

const ROUTER_API_BASE = "/api/auth";
const authRouter = express.Router();

authRouter.post(ROUTER_API_BASE + "/login", login);
authRouter.post(ROUTER_API_BASE + "/register", register);
authRouter.get(ROUTER_API_BASE + "/logout", logout);
authRouter.get(ROUTER_API_BASE + "/profiles", getProfiles);
authRouter.get(ROUTER_API_BASE + "/profile/:id", getProfile);

module.exports = authRouter;
