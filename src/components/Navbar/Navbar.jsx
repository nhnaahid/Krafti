import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import './Navbar.css'
import { useState } from "react";
import logo from '../../assets/logo.gif'
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    const [theme, setTheme] = useState("light");
    const [close, setClose] = useState(false);
    const handleTheme = () => {
        if (theme === "dark") {
            document.querySelector("html").setAttribute("data-theme", "light")
            setTheme("light");
        }
        else {
            document.querySelector("html").setAttribute("data-theme", "dark");
            setTheme("dark");
        }
    }
    const navLink = <>
        <NavLink to="/"><p>Home</p></NavLink>
        <NavLink to="/all-crafts"><p>All Crafts</p></NavLink>
        <NavLink to="/add-crafts"><p>Add Crafts</p></NavLink>
        <NavLink to="/my-crafts"><p>My Crafts</p></NavLink>
    </>
    return (
        <nav className={`bg-color flex items-center justify-between py-2 px-3 font-poppins fixed z-20 w-full ${theme === 'dark' && 'text-gray-100'}`}>
            <div onClick={() => setClose(!close)} className="text-xl block md:hidden ">
                {
                    close ? <AiOutlineClose></AiOutlineClose> : <AiOutlineMenu></AiOutlineMenu>
                }
                <div className={`${close ? 'top-[58px]' : '-top-60'} duration-700 flex flex-col items-start text-start md:hidden absolute bg-color text-sm p-4 gap-1`}>
                    {navLink}
                </div>
            </div>
            <Link to="/">
                <div className="flex items-center">
                    <figure className="h-full bg-cover">
                        <img className="w-10 md:w-16 h-full" src={logo} alt="" />
                    </figure>
                    <h1 className="font-oswald text-xl md:text-4xl font-bold">Krafti</h1>
                </div>
            </Link>
            <div className="hidden md:flex items-center font-bold gap-7">
                {navLink}
            </div>
            <div className="flex items-center gap-2">
                <div onClick={handleTheme} className=" text-2xl md:text-3xl cursor-pointer">
                    {
                        theme === "light" ? <MdOutlineDarkMode></MdOutlineDarkMode> : <MdOutlineLightMode></MdOutlineLightMode>
                    }
                </div>
                <Link to="/login"><button className={`btn btn-sm md:btn-md btn-outline rounded-none  ${theme === 'dark' && 'text-gray-100'} ${theme === 'light' && 'custom-btn'}`}>Sign In</button></Link>
            </div>
        </nav>
    );
};

export default Navbar;