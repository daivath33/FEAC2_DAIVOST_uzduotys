import mongoose, { Document, Model } from "mongoose";

export interface IBooking extends Document {
  company: mongoose.Schema.Types.ObjectId;
  date: Date;
  time: string;
  status: string;
  userEmail: string;
  username: string;
}

const BookingSchema = new mongoose.Schema<IBooking>(
  {
    company: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Business",
      required: true,
    },
      date: {
      type: Date,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    userEmail: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
      enum: ["Submitted", "Completed", "Cancelled"],
      default: "Submitted",
    },
  },
  {
    timestamps: true,
    versionKey: false,
    id: true,
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
      },
    },
  }
);

const BookingModel: Model<IBooking> = mongoose.model("Booking", BookingSchema);
export default BookingModel;
