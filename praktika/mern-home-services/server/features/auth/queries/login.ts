import { Request, Response } from "express";
import UserModel, { IUser } from "../../users/user-model";
import { UserDoc } from "../helpers/format-auth-response";
import formatAuthResponse from "../helpers/format-auth-response";

const login = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { email, password } = req.body;
    const newUser = await UserModel.findOne({ email });
    if (!newUser || !newUser.isCorrectPassword(password)) {
      return res.status(401).json({ message: "Incorrect email or password" });
    }
    const { token } = formatAuthResponse(newUser as UserDoc);
    return res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json(formatAuthResponse(newUser as UserDoc));
  } catch (error: any) {
    return res
      .status(500)
      .json({ message: "Error login user.", error: error.message });
  }
};

export default login;
