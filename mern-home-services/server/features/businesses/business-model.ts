import mongoose, { Document, Model } from "mongoose";

export interface IBusiness extends Document {
  name: string;
  description?: number;
  address: string;
  category: string;
  contactPerson: string;
  email: string;
  photos: string[];
}

const BusinessSchema = new mongoose.Schema<IBusiness>({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  contactPerson: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  photos: [
    {
      type: String,
    },
  ],
},
{
  timestamps: true,
  versionKey: false,
  id: true,
  toJSON: {
    transform(doc, ret){
      ret.id = ret._id
      delete ret._id
    }
  }
});

const BusinessModel: Model<IBusiness> = mongoose.model("Business", BusinessSchema);

export default BusinessModel;
