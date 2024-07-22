import { ApiService } from "./axios";
import { LoginData, RegisterData } from "../entities/auth";

export const loginRequest = async (data: LoginData) => {
  const response = await ApiService.post("/auth/login", data);
  return response.data;
};

export const registerRequest = async (data: RegisterData) => {
  const response = await ApiService.post("/auth/register", data);
  return response.data;
};
