import { create } from "zustand";
import { persist } from "zustand/middleware";
import { loginRequest, registerRequest, logoutRequest } from "../api/auth";

const useAuthStore = create(
  persist(
    (set) => ({
      isLoggedIn: false,
      user: null,
      login: async (userData) => {
        try {
          const response = await loginRequest(userData);
          set(() => ({
            isLoggedIn: true,
            user: response.user,
          }));
        } catch (error) {
          throw error;
        }
      },
      register: async (userData) => {
        try {
          const response = await registerRequest(userData);
          set(() => ({
            user: response.user,
          }));
        } catch (error) {
          throw error;
        }
      },
      logout: async () => {
        try {
          await logoutRequest();
          set(() => ({
            isLoggedIn: false,
            user: null,
          }));
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
