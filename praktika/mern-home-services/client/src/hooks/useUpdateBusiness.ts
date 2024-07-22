import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { updateBusiness as updateBusinessAPI } from "../api/business";

export const useUpdateBusiness = (editId: string) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const {
    mutate: updateBusiness,
    isPending: isUpdating,
    error,
  } = useMutation({
    mutationFn: (serviceData) => updateBusinessAPI(serviceData, editId),
    onSuccess: () => {
      toast.success("House  business successfully updated!");
      queryClient.invalidateQueries({ queryKey: ["businesses"] });

      navigate(`/admin/businesses/${editId}`);
    },
    onError: (error: any) => {
      toast.error(error.response.data.message);
    },
  });

  return { updateBusiness, isUpdating, error };
};
