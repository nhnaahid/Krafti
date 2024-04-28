import { MdHome, MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

const SignUp = () => {
    return (
        <div className="font-poppins">
            <div className="flex justify-between bg-gray-200 py-5 px-7 md:px-20">
                <h3 className="font-oswald tracking-wide">Sign Up</h3>
                <div className="flex items-center space-x-3">
                    <MdHome className="text-lg"></MdHome>
                    <MdKeyboardArrowRight className="text-lg"></MdKeyboardArrowRight>
                    <p className="font-poppins">Sign Up</p>
                </div>
            </div>
            <div className="w-4/5 md:w-3/5 mx-auto mt-5">
                <p>If you already have an account with us, please login at the <Link to="/login"><span className="text-[#ffb901] font-bold">login page.</span></Link></p>
                <h1 className="border-b border-gray-300 font-oswald tracking-wide text-2xl py-2">Your Personal Details</h1>
                <form className="flex flex-col space-y-2 mt-5">
                    <label>Your Full Name</label>
                    <input type="text" name="name" id="" placeholder="Name" className="border border-gray-300 p-2 md:p-3" />
                    <label>Your email address</label>
                    <input type="email" name="email" id="" placeholder="Email" className="border border-gray-300 p-2 md:p-3" />
                    <label>Photo URL</label>
                    <input type="text" name="photo" id="" placeholder="Photo url" className="border border-gray-300 p-2 md:p-3" />
                    <label>Password</label>
                    <input type="password" name="password" id="" placeholder="Password" className="border border-gray-300 p-2 md:p-3" />
                    <div className="flex gap-2 items-center">
                        <input type="checkbox" name="checkbox" id="" />
                        <p>I have read and agree to the <Link className="font-bold text-[#ffb901]">Privacy Policy</Link></p>
                    </div>
                    <input type="submit" value="Sign Up" className="w-full btn btn-sm md:btn-md btn-outline custom-btn rounded-none hover:text-white mt-3" />
                </form>
            </div>
        </div>
    );
};

export default SignUp;