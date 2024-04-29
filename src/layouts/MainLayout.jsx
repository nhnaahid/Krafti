import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const MainLayout = () => {
    return (
        <div className="max-w-[1440px] mx-auto font-poppins">
            <div className="h-[56px] md:h-[80px]">
                <Navbar></Navbar>
            </div>

            <Outlet></Outlet>
            <Footer></Footer>
            <ToastContainer
                position="top-right"
                autoClose={1500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </div>
    );
};

export default MainLayout;