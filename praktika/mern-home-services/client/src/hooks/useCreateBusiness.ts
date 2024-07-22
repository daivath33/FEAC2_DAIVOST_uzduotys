import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createBusiness as createBusinessAPI } from "../api/business";

export const useCreateBussines = () => {
  const queryClient = useQueryClient();

  const {
    mutate: createBusiness,
    isPending: isCreating,
    error,
  } = useMutation({
    mutationFn: createBusinessAPI,

    onSuccess: () => {
      toast.success("Home Business successfully created!");
      queryClient.invalidateQueries({ queryKey: ["businesses"] });
    },
    onError: (error: any) => {
      toast.error(error.response.data.message);
    },
  });

  return { createBusiness, isCreating, error };
};
