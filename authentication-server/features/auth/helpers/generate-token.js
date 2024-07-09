const jwt = require("jsonwebtoken");
const config = require("../../../config/config-env-variables");

const generateToken = (payload) => {
  
  const token = jwt.sign(payload, config.jwt.secret, {
    expiresIn: config.jwt.expiration,
  });

  return token;
};

module.exports = generateToken;
