import { Request, Response } from 'express';
import UserModel from '../user-model';

const getUsers = async (req: Request, res: Response): Promise<Response> => {
  try {
    const users = await UserModel.find();
    if (users.length === 0) {
      return res.status(400).json({ message: 'No users' });
    }
    return res.status(200).json(users);
  } catch (error: any) {
    return res.status(500).json({ message: 'Error getting users.', error: error.message });
  }
};
  
  export default getUsers;