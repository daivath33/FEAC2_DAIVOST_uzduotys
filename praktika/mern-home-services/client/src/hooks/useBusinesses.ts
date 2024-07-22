import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import { fetchBusinesses } from "../api/business";
import { Business } from "../entities/business";

export const useBusinesses = () => {
  const {
    data: businesses,
    isLoading,
    error,
    isError,
  } = useQuery<Business[], Error>({
    queryKey: ["businesses"],
    queryFn: () => fetchBusinesses(),
    staleTime: ms("3s"),
  });

  return { businesses, isLoading, error, isError };
};
