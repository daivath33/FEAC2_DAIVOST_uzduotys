import { Request, Response } from 'express';
import BusinessModel from '../business-model';


const getBusinesses = async (req: Request, res: Response): Promise<Response> => {
    try {
        const business = await BusinessModel.find();
        if(business.length === 0){
            return res.status(400).json({ message: 'No business' });
        }
        return res.status(200).json(business);
    } catch (error: any) {
        return res.status(500).json({ message: 'Error getting business.', error: error.message });
    }
}



export default getBusinesses;