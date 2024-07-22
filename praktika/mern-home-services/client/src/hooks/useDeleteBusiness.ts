import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteService as deleteServiceAPI } from "../api/business";

export const useDeleteService = () => {
  const {
    mutate: deleteService,
    isPending: isDeleting,
    error,
  } = useMutation({
    mutationFn: (id) => deleteServiceAPI(id),
    onSuccess: () => {
      toast.success("Servisas sėkmingai pašalintas");
    },
    onError: (error: any) => toast.error(error.response.data.message),
  });
  return { deleteService, isDeleting, error };
};
