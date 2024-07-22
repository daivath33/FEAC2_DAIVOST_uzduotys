import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import useAuthStore from "../../store/authStore";

interface Props {
  children: ReactNode;
}

const ProtectedRoutes = ({ children }: Props) => {
  const {user} = useAuthStore();

  return <>{user ? children : <Navigate to="/" />}</>;
};

export default ProtectedRoutes;
