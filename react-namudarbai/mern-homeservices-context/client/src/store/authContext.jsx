import PropTypes from "prop-types";
import React from "react";
import { loginRequest, registerRequest, logoutRequest } from "../api/auth";
import useLocalStorage from "../hooks/useLocalStorage";

const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [authUser, setAuthUser] = useLocalStorage("auth_user", null);

  const login = async (userData) => {
    try {
      const response = await loginRequest(userData);
      setUser(response.user);
      setIsLoggedIn(true);
      setAuthUser(response.user);
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  const register = async (userData) => {
    try {
      await registerRequest(userData);
       } catch (error) {
      console.log(error);
      throw error;
    }
  };

  const logout = async () => {
    try {
      await logoutRequest();
      setUser(null);
      setIsLoggedIn(false);
      localStorage.removeItem("auth_user");
    } catch (error) {
      throw error;
    }
  };

  const value = {
    user,
    isLoggedIn,
    login,
    register,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export const useAuth = () => {
  return React.useContext(AuthContext);
};
