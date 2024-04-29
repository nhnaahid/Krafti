import { MdHome, MdKeyboardArrowRight } from "react-icons/md";
import { useLoaderData } from "react-router-dom";

const CraftDetails = () => {
    const craft = useLoaderData();
    // console.log(craft._id);
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
            <div>
                <div>

                </div>
                <div>

                </div>
            </div>
        </div>
    );
};

export default CraftDetails;