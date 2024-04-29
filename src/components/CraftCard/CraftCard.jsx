import { FaStar } from "react-icons/fa";
import PropTypes from 'prop-types';
import { IoMdEye } from "react-icons/io";

import './craftCard.css'
import { Link } from "react-router-dom";

const CraftCard = ({ craft }) => {
    // const {_id, customization, description, image, item_name, price, processing_time, rating, stockStatus, subcategory_name, userEmail, userName}=craft;
    const { _id, image, item_name, price, rating, stockStatus } = craft;
    return (
        <div className='bg-base-200 card-container'>
            <div className="m-1 md:0 md:mx-5 md:my-10">
                <figure>
                    <img className='object-cover' src={image} alt="" />
                </figure>
            </div>
            <div className="bg-white m-3 md:mx-5 md:my-3 text-center px-2 py-1">
                <h2 className="text-lg md:text-xl font-semibold">{item_name}</h2>
                <h3 className="text-base md:text-lg font-semibold">$ {price}</h3>
            </div>
            <div className='card-info w-full'>
                <p className="bg-black text-white p-2 rounded-full hover:text-black my-btn">{stockStatus}</p>
                <div className="flex gap-1 bg-black text-white p-2 rounded-full hover:text-black my-btn star">
                    <FaStar className="text-lg" fill="#ffb901"></FaStar>
                    <p>{rating}</p>
                </div>
                <Link to={`/crafts/${_id}`} className="text-xl rounded-full bg-black text-white hover:text-black my-btn p-2">
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