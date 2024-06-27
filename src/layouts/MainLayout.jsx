import { Outlet } from "react-router-dom";
import Nav from "../compnents/Nav/Nav";
import Footer from "../compnents/Footer";

const MainLayout = () => {
  return (
    <div>
      <div className=" h-16">
        <Nav />
      </div>
      <div className="min-h-[cals(100vh)-116px]">
        <Outlet/>
        </div>
      
      <Footer/>
    </div>
  );
};

export default MainLayout;
