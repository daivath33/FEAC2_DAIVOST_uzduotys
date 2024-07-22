import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createBooking as createBookingAPI } from "../api/bookings";

export const useCreateBooking = () => {
  const queryClient = useQueryClient();

  const {
    mutate: createBooking,
    isPending: isCreating,
    error,
  } = useMutation({
    mutationFn: createBookingAPI,

    onSuccess: () => {
      toast.success("Booking successfully created!");
      queryClient.invalidateQueries({ queryKey: ["bookings"] });
    },
    onError: (error: any) => {
      toast.error(error.response.data.message);
    },
  });

  return { createBooking, isCreating, error };
};
