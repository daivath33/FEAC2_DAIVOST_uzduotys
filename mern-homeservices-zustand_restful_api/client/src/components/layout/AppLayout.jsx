import { Outlet, ScrollRestoration } from "react-router-dom";
import Topbar from "./Topbar";
import Footer from "./Footer";

function AppLayout() {
  return (
    <>
      <Topbar />
      <ScrollRestoration />
      <Outlet />
      <Footer />
    </>
  );
}

export default AppLayout;
