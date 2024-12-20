import { Outlet } from "react-router-dom";

import Navber from "../pages/home/shared/Navber";
import Footer from "../pages/home/shared/Footer";

const Main = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Navber></Navber>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
