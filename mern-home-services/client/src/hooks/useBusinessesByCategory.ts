import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import { fetchBusinessesByCatrgory } from "../api/business";
import { Business } from "../entities/business";

export const useBusunessesByCategory = (category: any) => {
  const {
    data: businesses,
    isLoading,
    error,
    isError,
  } = useQuery<Business[], Error>({
    queryKey: ["businesses", category],
    queryFn: () => fetchBusinessesByCatrgory(category),
    staleTime: ms("3s"),
  });

  return { businesses, isLoading, error, isError };
};
