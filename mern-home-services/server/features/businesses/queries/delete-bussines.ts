import { Request, Response } from "express";
import BusinessModel from "../business-model";

const deleteBusiness = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const business = await BusinessModel.findById(req.params.id);
    if (business == null) {
      return res.status(404).json({ message: "Business not found" });
    }

    await business.deleteOne();
    return res.status(200).json({ message: "Deleted Business" });
  } catch (error: any) {
    return res
      .status(500)
      .json({ message: "Error deleting Business.", error: error.message });
  }
};

export default deleteBusiness;
