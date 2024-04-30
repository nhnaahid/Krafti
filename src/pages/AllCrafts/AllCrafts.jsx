import { MdHome, MdKeyboardArrowRight } from "react-icons/md";
import { useLoaderData } from "react-router-dom";
import CraftTable from "../../components/CraftTable/CraftTable";

const AllCrafts = () => {
    const crafts = useLoaderData();
    return (
        <div>
            <div className="flex justify-between bg-gray-200 py-5 px-7 md:px-20">
                <h3 className="font-oswald tracking-wide">All Crafts</h3>
                <div className="flex items-center space-x-3">
                    <MdHome className="text-lg"></MdHome>
                    <MdKeyboardArrowRight className="text-lg"></MdKeyboardArrowRight>
                    <p className="font-poppins">All Crafts</p>
                </div>
            </div>
            <div className="w-full md:w-1/2 mx-auto space-y-3 mt-16">
                <h1 className="font-oswald font-semibold text-xl md:text-3xl text-center">ALL CRAFTS ITEM</h1>
                <p className="text-xs md:text-sm text-center">Welcome to our All Crafts section, where creativity knows no bounds and imagination takes flight! Explore a plethora of crafting ideas. </p>
            </div>
            <div className="overflow-x-auto mt-12 w-4/5 mx-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Craft Name</th>
                            <th>Price</th>
                            <th>Rating</th>
                            <th>Category</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row */}
                        {
                            crafts.map(craft => <CraftTable
                                key={craft._id}
                                craft={craft}
                            ></CraftTable>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllCrafts;