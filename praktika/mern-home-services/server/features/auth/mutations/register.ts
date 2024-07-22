import { Request, Response } from "express";
import UserModel, { IUser } from "../../users/user-model";
import { UserDoc } from "../helpers/format-auth-response";
import formatAuthResponse from "../helpers/format-auth-response";

const register = async (req: Request, res: Response): Promise<Response> => {
  try {
    const userData: IUser = req.body as IUser;

    const existingUser = await UserModel.findOne({ email: userData.email });

    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const newUser = new UserModel(userData);

    await newUser.save();

    const authResponse = formatAuthResponse(newUser as UserDoc);

    return res.status(201).json(authResponse);
  } catch (error: any) {
    return res
      .status(500)
      .json({ message: "Error registering new user.", error: error.message });
  }
};

export default register;
