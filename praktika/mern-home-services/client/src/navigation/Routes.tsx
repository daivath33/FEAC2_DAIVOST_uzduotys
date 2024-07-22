import { createBrowserRouter, Navigate } from "react-router-dom";
import AppLayout from "../components/layout/AppLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Login from "../pages/Login";
import Register from "../pages/Register";
import SearchCategory from "../pages/SearchCategory.tsx";
import BusinessOverview from "../pages/BusinessOverview.tsx";
import MyBookings from "../pages/MyBookings.tsx";
import CreateBusiness from "../pages/admin/CreateBusiness.tsx";
import Account from "../pages/Account.tsx";
import ProtectedRoutes from "../components/layout/ProtectedRoutes.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/search/:category",
        element: <SearchCategory />,
      },

      {
        path: "/businesses/:id",
        element: <BusinessOverview />,
      },
      {
        path: "/bookings",
        element: (
          <ProtectedRoutes>
            <MyBookings />
          </ProtectedRoutes>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/admin/new-business",
        element: (
          <ProtectedRoutes>
            <CreateBusiness />
          </ProtectedRoutes>
        ),
      },
      {
        path: "/account",
        element: (
          <ProtectedRoutes>
            <Account />
          </ProtectedRoutes>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/" />,
  },
]);

export default router;
