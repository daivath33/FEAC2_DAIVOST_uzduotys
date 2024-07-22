import { useQuery } from "@tanstack/react-query";
import { fetchBusinessById } from "../api/business";
import { Business } from "../entities/business";

export const useBusiness = (id: any) => {
  const {
    data: business,
    isLoading,
    error,
  } = useQuery<Business, Error>({
    queryKey: ["businesses", id],
    queryFn: () => fetchBusinessById(id),
  });

  return { business, isLoading, error };
};
