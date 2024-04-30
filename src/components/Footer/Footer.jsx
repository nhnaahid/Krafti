import { useContext } from 'react';
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
import { AuthContext } from '../../providers/AuthProvider';

const Footer = () => {
    const { theme } = useContext(AuthContext);
    return (
        <div className='bg-black text-white'>
            <div className="w-1/2 text-center mx-auto py-8">
                <div className="border-b border-dotted py-10 space-y-5">
                    <div className={`space-y-2 ${theme === 'dark' && 'text-gray-300'}`}>
                        <h1 className="text-3xl font font-extrabold font-oswald">Krafti</h1>
                        <h3 className='font-bold font-poppins'>Jute & Wooden Crafts</h3>
                    </div>

                    <p className="text-zinc-400 font-poppins">Join our community of makers and enthusiasts today. Craft your world with passion and artistry. Stay connected with us to receive exclusive updates on new arrivals, artisan spotlights, and upcoming events.</p>
                    <div className={`flex flex-wrap justify-center gap-8 text-2xl ${theme === 'dark' && 'text-gray-300'}`}>
                        <a href="#"><FaTwitter></FaTwitter></a>
                        <a href="#"><FaFacebook></FaFacebook></a>
                        <a href="#"><FaInstagram></FaInstagram></a>
                    </div>
                </div>
                <div className="mt-10">
                    <p className={`text-sm font-poppins ${theme === 'dark' && 'text-gray-300'}`}>Copyright © 2024, Krafti. All rights reserved. | Designed by Kraftech | Terms of Use | Privacy Policy | Sitemap</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;