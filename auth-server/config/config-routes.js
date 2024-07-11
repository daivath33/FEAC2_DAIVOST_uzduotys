const authRouter = require("../features/auth/router");

const configRoutes = (server) => {
  server.use(authRouter);
};

module.exports = configRoutes;
