import { Outlet } from "react-router-dom";
import Footers from "../pages/Shared/Footer/Footers";
import Navbar from "../pages/Shared/NavBar/Navbar";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footers />
    </div>
  );
};

export default MainLayout;
