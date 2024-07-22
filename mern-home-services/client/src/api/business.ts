import { Business } from "../entities/business";
import { ApiService } from "./axios";

export const fetchBusinesses = async () => {
  const response = await ApiService.get("/businesses");
  return response.data;
};

export const fetchBusinessById = async (id: any) => {
  const response = await ApiService.get(`/businesses/${id}`);
  return response.data;
};

export const fetchBusinessesByCatrgory = async (category: string) => {
  let url = "/businesses";
  if (category !== "all") {
    url = url + `/category/${category}`;
  }
  const response = await ApiService.get(url);
  return response.data;
};

export const createBusiness = async (newBusiness: Business) => {
  const response = await ApiService.post<Business>("/businesses", newBusiness);
  return response.data;
};

export const updateBusiness = async (updatedBusiness: any, id: string) => {
  const response = await ApiService.put<Business>(
    `/businesses/${id}`,
    updatedBusiness
  );
  return response.data;
};

export const deleteService = async (id: any) => {
  const response = await ApiService.delete(`/businesses/${id}`);
  return response.data;
};

export const fetchBusinessBookingsByDate = async (id: any, date: any) => {
  const response = await ApiService.delete(
    `/businesses/${id}/bookings/date/${date}`
  );
  return response.data;
};
