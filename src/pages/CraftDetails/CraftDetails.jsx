import { FaStar } from "react-icons/fa";
import { MdHome, MdKeyboardArrowRight } from "react-icons/md";
import { Link, useLoaderData } from "react-router-dom";

const CraftDetails = () => {
    const craft = useLoaderData();
    const { _id, customization, description, image, item_name, price, processing_time, rating, stockStatus, subcategory_name, userEmail, userName } = craft;
    return (
        <div>
            <div className="flex justify-between bg-gray-200 py-5 px-7 md:px-20">
                <h3 className="font-oswald tracking-wide">Craft Details</h3>
                <div className="flex items-center space-x-3">
                    <MdHome className="text-lg"></MdHome>
                    <MdKeyboardArrowRight className="text-lg"></MdKeyboardArrowRight>
                    <p className="font-poppins">Craft Details</p>
                </div>
            </div>
            <h1 className="w-4/5 mx-auto border-b border-gray-300 font-oswald tracking-wide text-2xl py-2 mt-5">Craft Item Details</h1>
            <div className="w-4/5 mx-auto mt-5 flex flex-col md:flex-row gap-7">
                <figure className="w-full md:w-2/5 h-[500px] bg-white p-3">
                    <img className="w-full h-full object-cover" src={image} alt="" />
                </figure>
                <div className="w-full md:w-3/5 h-fit bg-white p-3">
                    <h1 className="text-2xl font-semibold border-b pb-1">{item_name}</h1>
                    <div className="flex gap-5 p-2">
                        <p className="border-r pr-5">$ {price}</p>
                        <div className="flex gap-1">
                            <FaStar className="text-lg" fill="#ffb901"></FaStar>
                            <p>{rating}</p>
                        </div>
                        <p className="border-l pl-5">{stockStatus}</p>
                    </div>
                    <div className="space-y-1 my-2">
                        <p><span className="font-bold">Category:</span> {subcategory_name}</p>
                        <p><span className="font-bold">Customization:</span> {customization}</p>
                        <p><span className="font-bold">Processing Time:</span> {processing_time} Days</p>
                        <p><span className="font-bold">Description:</span> {description}</p>
                    </div>
                    <div className="flex gap-5 mb-3">
                    <Link to=""><button className="btn btn-sm  border-black custom-btn mt-3 rounded-none hover:text-white">Add To Cart</button></Link>
                    <Link to=""><button className="btn btn-sm  border-black my-btn mt-3 rounded-none">Buy Now</button></Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default CraftDetails;