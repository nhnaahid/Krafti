import { MdHome, MdKeyboardArrowRight } from "react-icons/md";
import { useLoaderData } from "react-router-dom";
import CraftCard from "../../components/CraftCard/CraftCard";

const MyCrafts = () => {
    const crafts = useLoaderData();
    console.log(crafts);
    return (
        <div>
            <div className="flex justify-between bg-gray-200 py-5 px-7 md:px-20">
                <h3 className="font-oswald tracking-wide">My Crafts</h3>
                <div className="flex items-center space-x-3">
                    <MdHome className="text-lg"></MdHome>
                    <MdKeyboardArrowRight className="text-lg"></MdKeyboardArrowRight>
                    <p className="font-poppins">My Crafts</p>
                </div>
            </div>
            <div className="w-full md:w-1/2 mx-auto space-y-3 mt-16">
                <h1 className="font-oswald font-semibold text-xl md:text-3xl text-center">My CRAFT ITEMS</h1>
                <p className="text-xs md:text-sm text-center">Welcome to My Crafts section, Here you will find all the crafts you have added to the database! Explore a plethora of crafting ideas. </p>
            </div>
            <div className="w-4/5 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-5 md:mt-12">
                {
                    crafts.map(craft => <CraftCard craft={craft}></CraftCard>)
                }
            </div>
        </div>
    );
};

export default MyCrafts;