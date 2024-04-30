import { MdHome, MdKeyboardArrowRight } from "react-icons/md";
import { useLoaderData } from "react-router-dom";
import MyCraftsCard from "../../components/MyCraftsCard/MyCraftsCard";
import { useState } from "react";
import Swal from "sweetalert2";

const MyCrafts = () => {
    const loadedCrafts = useLoaderData();
    // console.log(loadedCrafts);
    const [crafts, setCrafts] = useState(loadedCrafts);
    // console.log(crafts);
    const handleFilter = e => {
        const filter = e.target.value;
        console.log(filter);
        const filteredCrafts = loadedCrafts.filter(craft => craft.customization === filter);
        setCrafts(filteredCrafts);
    }
    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/crafts/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Craft Item has been deleted.",
                                icon: "success"
                            });
                            // remove the user from the UI
                            const remainingCrafts = crafts.filter(craft => craft._id !== id);
                            setCrafts(remainingCrafts);
                        }
                    })
            }
        });
    }

    return (
        <div className="mb-20">
            <div className="flex justify-between bg-gray-200 py-5 px-7 md:px-20">
                <h3 className="font-oswald tracking-wide">My Crafts</h3>
                <div className="flex items-center space-x-3">
                    <MdHome className="text-lg"></MdHome>
                    <MdKeyboardArrowRight className="text-lg"></MdKeyboardArrowRight>
                    <p className="font-poppins">My Crafts</p>
                </div>
            </div>
            <div className="w-full md:w-1/2 mx-auto space-y-3 mt-16">
                <h1 className="font-oswald font-semibold text-xl md:text-3xl text-center">MY CRAFT ITEMS</h1>
                <p className="text-xs md:text-sm text-center">Welcome to My Crafts section, Here you will find all the crafts you have added to the database! Explore a plethora of crafting ideas. </p>
            </div>

            <div className="flex gap-5 items-center space-y-2 w-4/5 mx-auto mt-5 md:mt-12">
                <label className="text-gray-600 font-semibold text-lg">Filter By:</label>
                <select onChange={handleFilter} name="customization" className="border border-gray-300 p-1">
                    <option value="" disabled selected>Customization</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>
            </div>
            <div className="w-4/5 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-2 md:mt-4">
                {
                    crafts.map(craft => <MyCraftsCard key={craft._id} craft={craft} handleDelete={handleDelete}></MyCraftsCard>)
                }
            </div>
        </div>
    );
};

export default MyCrafts;