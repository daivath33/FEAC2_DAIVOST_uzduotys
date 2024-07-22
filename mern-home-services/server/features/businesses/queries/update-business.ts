import { Request, Response } from 'express';
import BusinessModel from '../business-model';

const updateBusiness= async (req: Request, res: Response): Promise<Response> => {
    try {
        const business = await BusinessModel.findById(req.params.id);
        if (business == null) {
          return res.status(404).json({ message: "Business not found" });
        }
    
        if (req.body.name != null) {
          business.name = req.body.name;
        }
        if (req.body.description != null) {
          business.description = req.body.description;
        }
        if (req.body.address != null) {
          business.address = req.body.address;
        }
        if (req.body.category != null) {
          business.category = req.body.category;
        }
        if (req.body.contactPerson != null) {
          business.contactPerson = req.body.contactPerson;
        }
        if (req.body.email != null) {
          business.email = req.body.email;
        }
        if (req.body.photos != null) {
          business.photos = req.body.photos;
        }
    
        const updatedBusiness = await business.save();
        return res.status(200).json(updatedBusiness);
    } catch (error: any) {
        return res.status(500).json({ message: 'Error updating business.', error: error.message });
    }
}

export default updateBusiness;