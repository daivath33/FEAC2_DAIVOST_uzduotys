/* eslint-disable no-useless-catch */
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { loginRequest, registerRequest } from "../api/auth";
import { LoginData, RegisterData } from "../entities/auth";

interface User {
  id: string;
  email: string;
  name: string;
  password: string;
}
type State = {
  token: string | null;
  user: User | null;
  isLoggedIn: boolean;
  // errors: any;
};

type Actions = {
  register: (user: RegisterData) => void;
  login: (user: LoginData) => void;
  logout: () => void;
};

const useAuthStore = create(
  persist<State & Actions>(
    (set) => ({
      isLoggedIn: false,
      user: null,
      token: null,
      login: async (loginData: LoginData) => {
        try {
          const response = await loginRequest(loginData);
          set(() => ({
            isLoggedIn: true,
            user: response.user,
            token: response.token,
          }));
          localStorage.setItem("token", response.token);
        } catch (error) {
          throw error;
        }
      },
      register: async (userData: RegisterData) => {
        try {
          const response = await registerRequest(userData);
          set(() => ({
            isLoggedIn: true,
            user: response.user,
            token: response.token,
          }));
        } catch (error) {
          throw error;
        }
      },
      logout: async () => {
        try {
          set(() => ({
            isLoggedIn: false,
            user: null,
          }));
          localStorage.removeItem("token");
        } catch (error) {
          throw error;
        }
      },
    }),
    {
      name: "userAuth",
    }
  )
);

export default useAuthStore;
