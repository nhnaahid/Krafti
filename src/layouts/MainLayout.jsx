import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";


const MainLayout = () => {
    return (
        <div className="max-w-[1440px] mx-auto">
            <div className="h-[56px] md:h-[80px]">
                <Navbar></Navbar>
            </div>

            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;