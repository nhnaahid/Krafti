import { Link, useNavigate } from 'react-router-dom';
import error from '../../assets/error.gif'
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';


const ErrorPage = () => {
    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate(-1);
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className='flex flex-col items-center justify-center'>
                <div className='mt-16'>
                    <img className='w-48 md:w-64' src={error} alt="" />
                </div>
                <div className='text-center space-y-2'>
                    <h1 className='text-4xl font-bold text-red-600'>Ooops...</h1>
                    <h1 className='text-2xl font-bold'>Page Not Found</h1>
                    <p className='font-semibold'>The page you are looking for does not exist or another error occurred, go back to homepage.</p>
                </div>
                <div>
                    <Link onClick={handleGoBack} className="btn btn-xs sm:btn-sm md:btn-md bg-emerald-500 hover:bg-emerald-400 text-white w-fit my-5">Go Back</Link>
                </div>
            </div>
            <Footer></Footer>
        </div>

    );
};

export default ErrorPage;