import { Business } from "./business";

export interface Booking {
  id: string;
  date: string;
  time: string;
  userEmail: string;
  username: string;
  status: string;
  company: Business;
}

export interface BookingData {
  date: string | undefined;
  time: string | undefined;
  userEmail: string | undefined;
  username: string | undefined;
  business_id: string | undefined;
  status?: string | undefined;
}
