import { Request, Response, NextFunction } from 'express';
import  jwt, { JwtPayload }  from "jsonwebtoken";
import  envVariables from "../config/config-env-variables";

interface CustomRequest extends Request {
  currentUser?: string | JwtPayload;
}

const authMiddleware = (req: CustomRequest, res: Response, next: NextFunction): void => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    res.status(401).send({ error: "Authorization token required" });
    return;
  }

  const token = authHeader.split(" ")[1];
  try {
    const payload = jwt.verify(token, envVariables.jwt.secret);
    req.currentUser = payload;
   
    next();
  } catch (err) {
    res.status(401).send({ error: "Not authenticated" });
  }
};

export default authMiddleware;
