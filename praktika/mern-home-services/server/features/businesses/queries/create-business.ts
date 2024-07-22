import { Request, Response } from "express";
import BusinessModel from "../business-model";

const createBusiness = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const business = new BusinessModel({
      name: req.body.name,
      description: req.body.description,
      address: req.body.address,
      category: req.body.category,
      contactPerson: req.body.contactPerson,
      email: req.body.email,
      photos: req.body.photos,
    });

    const newBusiness = await business.save();
    return res.status(201).json(newBusiness);
  } catch (error: any) {
    return res
      .status(500)
      .json({ message: "Error getting business.", error: error.message });
  }
};

export default createBusiness;