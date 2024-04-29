import { FaStar } from "react-icons/fa";
import { IoMdEye } from "react-icons/io";
import { Link } from "react-router-dom";

const MyCraftsCard = ({ craft, handleDelete }) => {
    const { _id, customization, description, image, item_name, price, processing_time, rating, stockStatus, subcategory_name, userEmail, userName } = craft;
    return (
        <div className='bg-base-200'>
            <div className="m-1 md:0 md:mx-5 md:my-10">
                <figure>
                    <img className='object-cover' src={image} alt="" />
                </figure>
            </div>
            <div className="bg-white m-3 md:mx-5 md:my-3 text-center px-2 py-1">
                <h2 className="text-lg md:text-xl font-semibold border-b pb-1">{item_name}</h2>
                <div className="flex justify-between mt-1 py-1">
                    <h3 className="font-semibold border-r w-1/2 text-start">$ {price}</h3>
                    <div className="flex items-center justify-end w-1/2">
                        <FaStar></FaStar>
                        <h3 className="font-semibold">{rating}</h3>
                    </div>
                </div>
                <div className="flex justify-between py-1">
                    <h3 className="font-semibold border-r w-1/2 text-start">Stock: {stockStatus}</h3>
                    <h3 className="font-semibold border-r w-1/2 text-end">Customization: {customization}</h3>
                </div>
            </div>
            <div className="bg-white m-3 md:mx-5 md:my-3 text-center px-2 py-1">
                <div className="flex mb-3 justify-around">
                    <Link to={`/update-crafts/${_id}`}><button className="btn btn-sm  border-black custom-btn mt-3 rounded-none hover:text-white">Update</button></Link>
                    <Link onClick={() => handleDelete(_id)}><button className="btn btn-sm  border-black my-btn mt-3 rounded-none">Delete</button></Link>
                </div>
            </div>
            {/* <div className='card-info w-full'>
                <p className="bg-black text-white p-2 rounded-full hover:text-black my-btn">{stockStatus}</p>
                <div className="flex gap-1 bg-black text-white p-2 rounded-full hover:text-black my-btn star">
                    <FaStar className="text-lg" fill="#ffb901"></FaStar>
                    <p>{rating}</p>
                </div>
                <Link to={`/crafts/${_id}`} className="text-xl rounded-full bg-black text-white hover:text-black my-btn p-2">
                    <IoMdEye></IoMdEye>
                </Link>
            </div> */}
        </div>
    );
};

export default MyCraftsCard;