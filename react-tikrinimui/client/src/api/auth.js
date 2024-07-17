import authApi from "./axios";

export const loginRequest = async (data) => {
  const response = await authApi.post("/api/auth/login", data);
  return  response.data;
}
    
  
  export const registerRequest = async (data) => {
    const response = await authApi.post("/api/auth/register", data);
    return  response.data;
  }
   

  export const logoutRequest = async () => {
    const response = await authApi.get("/api/auth/logout");
    return  response.data;
  }
   