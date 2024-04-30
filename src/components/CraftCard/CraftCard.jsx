import { FaStar } from "react-icons/fa";
import PropTypes from 'prop-types';
import { IoMdEye } from "react-icons/io";

import './craftCard.css'
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const CraftCard = ({ craft }) => {
    // const {_id, customization, description, image, item_name, price, processing_time, rating, stockStatus, subcategory_name, userEmail, userName}=craft;
    const { _id, image, item_name, price, rating, stockStatus } = craft;
    const { theme } = useContext(AuthContext);
    return (
        <div className='bg-base-200 card-container'>
            <div className="m-2 md:0 md:mx-5 md:my-10">
                <figure className="h-[550px] md:h-[450px]">
                    <img className='object-cover w-full h-full' src={image} alt="" />
                </figure>
            </div>
            <div className={`bg-white m-3 md:mx-5 md:my-3 text-center px-2 py-1 ${theme === 'dark' && 'bg-gray-300'}`}>
                <h2 className="text-lg md:text-xl font-semibold">{item_name}</h2>
                <h3 className="text-base md:text-lg font-semibold">$ {price}</h3>
            </div>
            <div className='card-info w-full'>
                <p className="text-xs md:text-base bg-black text-white p-2 rounded-full hover:text-black my-btn">{stockStatus}</p>
                <div className="flex gap-1 bg-black text-white p-2 rounded-full hover:text-black my-btn star">
                    <FaStar className="text-sm md:text-lg" fill="#ffb901"></FaStar>
                    <p className="text-xs md:text-base">{rating}</p>
                </div>
                <Link to={`/crafts/${_id}`} className="text-lg md:text-xl rounded-full bg-black text-white hover:text-black my-btn p-2">
                    <IoMdEye></IoMdEye>
                </Link>
            </div>
        </div>
    );
};

CraftCard.propTypes = {
    craft: PropTypes.object
};

export default CraftCard;