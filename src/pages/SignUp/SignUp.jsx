import { useContext, useState } from "react";
import { MdHome, MdKeyboardArrowRight } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { AuthContext } from "../../providers/AuthProvider";

const SignUp = () => {
    const navigate = useNavigate();
    const { user, setUser, createUser, updateUser } = useContext(AuthContext)
    const [showPassword, setShowPassword] = useState(true);
    const handleSignUp = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        // console.log(form.get('email'));
        const name = form.get('name');
        const email = form.get('email');
        const photo = form.get('photo');
        const password = form.get('password');
        const isChecked = form.get('checkbox');
        console.log(isChecked);
        // password validation
        const regex = /^(?=.*[a-z])(?=.*[A-Z])/;
        if (!isChecked) {
            toast.error('Please Agreed to Our Privacy Policy.')
            return;
        }
        if (password.length < 6 || password.length > 15) {
            toast.error('Password length should be 6 to 15 characters.')
            return;
        }
        if (!regex.test(password)) {
            toast.error('Password must have a lowercase and an uppercase letter.')
            return;
        }

        createUser(email, password)
            .then(result => {
                updateUser(name, photo, email)
                    .then(() => {
                        setUser({ ...user, displayName: name, photoURL: photo, email: email })
                        // console.log(user);
                    })
                    .catch()
                toast.success('User Registration Successful.');
                console.log(result.user);
                navigate("/")
            })
            .catch(error => {
                console.log(error);
                toast.error(error.message);
            })
    }
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
                <form onSubmit={handleSignUp} className="flex flex-col space-y-2 mt-5">
                    <label>Your Full Name</label>
                    <input type="text" name="name" id="" placeholder="Name" className="border border-gray-300 p-2 md:p-3" />
                    <label>Your email address</label>
                    <input type="email" name="email" id="" placeholder="Email" className="border border-gray-300 p-2 md:p-3" />
                    <label>Photo URL</label>
                    <input type="text" name="photo" id="" placeholder="Photo url" className="border border-gray-300 p-2 md:p-3" />
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