import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer"

const Layout = () => {
  return (
    <>
      <div className="h-screen">
        <Navbar />
        <Outlet />
        <Footer/>
      </div>
    </>
  );
};

export default Layout;
