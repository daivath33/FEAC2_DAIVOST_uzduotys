import { ApiService } from "./axios";

export const getProfile = async (token: string) => {
  const response = await ApiService.get("/api/users/profile", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const getUsers = async (token: string) => {
  const response = await ApiService.get("/api/users", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
