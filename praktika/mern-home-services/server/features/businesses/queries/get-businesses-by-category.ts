import { Request, Response } from 'express';
import BusinessModel from '../business-model';


const getBusinessesByCategory = async (req: Request, res: Response): Promise<Response> => {
    try {
        const  category= req.params.category;

        const business = await BusinessModel.find({
            category
          }).populate("category");

        if(business.length === 0){
            return res.status(400).json({ message: 'No business in this: ' + category });
        }
        return res.status(200).json(business);
    } catch (error: any) {
        return res.status(500).json({ message: 'Error getting business.', error: error.message });
    }
}



export default getBusinessesByCategory;