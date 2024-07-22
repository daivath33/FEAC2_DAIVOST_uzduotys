import jwt from "jsonwebtoken";
import envVariables from "../../../config/config-env-variables";

interface Payload {
  id: string;
  [key: string]: any;
}

const generateToken = (payload: Payload) => {
  const token = jwt.sign(payload, envVariables.jwt.secret, {
    expiresIn: envVariables.jwt.expiration,
  });

  return token;
};

export default generateToken;
