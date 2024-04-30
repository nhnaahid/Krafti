import { useContext, useState } from "react";
import { FaFacebookF, FaGithub, FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { MdHome, MdKeyboardArrowRight } from "react-icons/md";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
    const { loginUser, loginWithGoogle, loginWithFacebook, loginWithGithub } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(true);
    const navigate = useNavigate();
    const location = useLocation();
    const handleSignIn = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        // console.log(email, password);
        loginUser(email, password)
            .then(result => {
                console.log(result.user);
                toast.success('User Login Successful.');
                navigate(location?.state ? location.state : "/");
            })
            .catch(error => {
                toast.error(error.message);
            })
    }
    const handleLoginWithGoogle = () => {
        loginWithGoogle()
            .then(result => {
                console.log(result.user);
                toast.success('User Login Successful.');
                navigate(location?.state ? location.state : "/");
            })
            .catch(error => {
                toast.error(error.message);
            })

    }
    const handleLoginWithFacebook = () => {
        loginWithFacebook()
            .then(result => {
                console.log(result.user);
                toast.success('User Login Successful.');
                navigate(location?.state ? location.state : "/");
            })
            .catch(error => {
                toast.error(error.message);
            })

    }
    const handleLoginWithGithub = () => {
        loginWithGithub()
            .then(result => {
                console.log(result.user);
                toast.success('User Login Successful.');
                navigate(location?.state ? location.state : "/");
            })
            .catch(error => {
                toast.error(error.message);
            })
    }
    return (
        <div className="mb-20">
            <div className="flex justify-between bg-gray-200 py-5 px-7 md:px-20">
                <h3 className="font-oswald tracking-wide">Sign In</h3>
                <div className="flex items-center space-x-3">
                    <MdHome className="text-lg"></MdHome>
                    <MdKeyboardArrowRight className="text-lg"></MdKeyboardArrowRight>
                    <p className="font-poppins">Sign In</p>
                </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-start mx-3 md:mx-20 my-7 gap-7 font-poppins">
                <div className="w-full md:w-2/5 border border-gray-300 p-3 md:p-5 space-y-1">
                    <h2 className="font-oswald font-semibold text-xl">New Customer</h2>
                    <p className="text-gray-700">Sign Up</p>
                    <p>By creating an account you will be able to shop faster, be up to date with new offers, and add, delete or update your crafts.</p>
                    <Link to="/signup"><button className="btn btn-sm md:btn-md border-black custom-btn mt-3 rounded-none hover:text-white">Sign Up</button></Link>
                </div>
                <div className="w-full md:w-3/5 border border-gray-300 p-2 md:p-4 space-y-3">
                    <h2 className="font-oswald font-semibold text-xl">Returning Customer</h2>
                    <form onSubmit={handleSignIn} className="flex flex-col space-y-1 pt-1">
                        <label>Your email address</label>
                        <input type="email" name="email" id="" placeholder="Email" className="border border-gray-300 p-2 md:p-3" />
                        <div>
                            <label>Password</label>
                            <div className="relative">
                                <input type={showPassword ? 'password' : 'text'} name='password' placeholder="Password" className="border border-gray-300 p-2 md:p-3 w-full" required />
                                <div onClick={() => setShowPassword(!showPassword)} className='absolute bottom-3 md:bottom-4 right-3 text-lg'>
                                    {
                                        showPassword ? <FaRegEye></FaRegEye> : <FaRegEyeSlash></FaRegEyeSlash>
                                    }
                                </div>
                            </div>
                        </div>

                        <Link><p className="my-1">Forget Password</p></Link>

                        <input type="submit" value="Sign In" className="w-full btn btn-sm md:btn-md btn-outline custom-btn rounded-none hover:text-white mt-3" />

                        <div className='space-y-2 pt-2'>
                            <p className='text-center font-bold'>Sign In With</p>
                            <div className='flex items-center justify-center gap-2'>
                                <button onClick={handleLoginWithGoogle} className="btn btn-sm border-black  custom-btn text-xl px-3 rounded-none"><FcGoogle></FcGoogle></button>
                                <button onClick={handleLoginWithFacebook} className="btn btn-sm border-black  custom-btn text-xl px-3 hover:text-white rounded-none"><FaFacebookF></FaFacebookF></button>
                                <button onClick={handleLoginWithGithub} className="btn btn-sm border-black  custom-btn text-xl px-3 hover:text-white rounded-none"><FaGithub></FaGithub></button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default Login;