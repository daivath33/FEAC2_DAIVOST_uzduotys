import { Request, Response } from 'express';
import  UserModel from "../user-model";

interface CustomRequest extends Request {
  currentUser?: {
    id: string;
  };
}

const getUser = async (req: CustomRequest, res: Response): Promise<Response> => {
  try {
    const  id  = req.currentUser?.id;

    const user = await UserModel.findById(id).select({ password: 0 });

    if (!user) {
      return res.status(401).json({ message: "User not exists" });
    }

    return res.status(200).json({ user });
  } catch (error: any) {
    return res
      .status(500)
      .json({ message: "Error getting user data.", error: error.message });
  }
};

export default getUser;
