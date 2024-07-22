import { useQuery } from "@tanstack/react-query";
import { fetchBookingByUser } from "../api/bookings";
import { Booking } from "../entities/booking";

export const useBookingsByUserId = (email: any) => {
  const {
    data: bookings,
    isLoading,
    error,
  } = useQuery<Booking[], Error>({
    queryKey: ["bookings", email],
    queryFn: () => fetchBookingByUser(email),
  });

  return { bookings, isLoading, error };
};
