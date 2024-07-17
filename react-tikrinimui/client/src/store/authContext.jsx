import { useContext, createContext, useState } from "react";
import PropTypes from "prop-types";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const logOut = () => {
    setUser(null);
    setIsLoggedIn(false);
    localStorage.removeItem("auth_user");
  };
  const value = {
    user,
    setUser,
    isLoggedIn,
    setIsLoggedIn,
    logOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export const useAuth = () => {
  return useContext(AuthContext);
};
