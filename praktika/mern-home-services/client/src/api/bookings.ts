import { Booking, BookingData } from "../entities/booking";
import { ApiService } from "./axios";

export const fetchBookingByUser = async (email: any): Promise<Booking[]> => {
  const response = await ApiService.get(`/bookings/user/${email}`);
  return response.data;
};

export const fetchBookingById = async (id: any) => {
  const response = await  ApiService.get(`/bookings/${id}`);
  return response.data;
};

export const createBooking = async (newBooking: BookingData) => {
  const response = await ApiService.post<BookingData>("/bookings", newBooking);
  return response.data;
};