const authRouter = require("../features/auth/router");
const userRouter = require("../features/users/router");

const configRoutes = (server) => {
  server.use(authRouter);
  server.use(userRouter);
};

module.exports = configRoutes;
