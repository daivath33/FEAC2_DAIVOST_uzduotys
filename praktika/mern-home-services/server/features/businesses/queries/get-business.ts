import { Request, Response } from 'express';
import BusinessModel from '../business-model';

const getBusiness = async (req: Request, res: Response): Promise<Response> => {
    try {
        const business = await BusinessModel.findById(req.params.id);
    if (business === null) {
      return res.status(404).json({ message: "Business not found" });
    }
        return res.status(200).json(business);
    } catch (error: any) {
        return res.status(500).json({ message: 'Error getting business.', error: error.message });
    }
}



export default getBusiness;