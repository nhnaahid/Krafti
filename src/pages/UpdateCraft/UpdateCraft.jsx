import { MdHome, MdKeyboardArrowRight } from "react-icons/md";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCraft = () => {
    const craft = useLoaderData();
    const { _id, customization, description, image, item_name, price, processing_time, rating, stockStatus, subcategory_name } = craft;
    console.log(craft);
    const handleUpdateCraft = e => {
        e.preventDefault();
        const form = e.target;
        const image = form.itemPhoto.value;
        const item_name = form.itemName.value;
        const subcategory_name = form.subcategory.value;
        const description = form.description.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const customization = form.customization.value;
        const processing_time = form.time.value;
        const stockStatus = form.stock.value;
        const updatedCraft = { image, item_name, subcategory_name, description, price, rating, customization, processing_time, stockStatus }
        console.log(updatedCraft);

        // send data to the server
        fetch(`http://localhost:5000/crafts/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedCraft)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Craft Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                }
            })
    }

    return (
        <div className="mb-20">
            <div className="flex justify-between bg-gray-200 py-5 px-7 md:px-20">
                <h3 className="font-oswald tracking-wide">Add Crafts</h3>
                <div className="flex items-center space-x-3">
                    <MdHome className="text-lg"></MdHome>
                    <MdKeyboardArrowRight className="text-lg"></MdKeyboardArrowRight>
                    <p className="font-poppins">Add Crafts</p>
                </div>
            </div>
            <div className="w-4/5 md:w-3/5 mx-auto mt-5">
                <h1 className="border-b border-gray-300 font-oswald tracking-wide text-2xl py-2">Update Craft Item</h1>
                <form onSubmit={handleUpdateCraft} className="mt-5">
                    <div className="grid grid-cols-2 gap-5 ">
                        <div className="flex flex-col space-y-2">
                            <label>Item Name</label>
                            <input type="text" name="itemName" id="" placeholder="Item Name" className="border border-gray-300 p-2 md:p-3" defaultValue={item_name} />
                        </div>
                        <div className="flex flex-col space-y-2">
                            <label>Subcategory</label>
                            <input type="text" name="subcategory" id="" placeholder="Subcategory Name" className="border border-gray-300 p-2 md:p-3" defaultValue={subcategory_name} />
                        </div>
                        <div className="flex flex-col space-y-2">
                            <label>Item Photo</label>
                            <input type="text" name="itemPhoto" id="" placeholder="Item Photo url" className="border border-gray-300 p-2 md:p-3" defaultValue={image} />
                        </div>


                        <div className="flex flex-col space-y-2">
                            <label>Price ($)</label>
                            <input type="text" name="price" id="" placeholder="Item Price" className="border border-gray-300 p-2 md:p-3" defaultValue={price} />
                        </div>

                        <div className="flex flex-col space-y-2">
                            <label>Rating (Out of 5)</label>
                            <input type="text" name="rating" id="" placeholder="Item Rating" className="border border-gray-300 p-2 md:p-3" defaultValue={rating} />
                        </div>

                        <div className="flex flex-col space-y-2">
                            <label>Customization?</label>
                            <select name="customization" className="border border-gray-300 p-2 md:p-3">
                                <option value={`${customization}`}>{customization}</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                        </div>

                        <div className="flex flex-col space-y-2">
                            <label>Processing Time (days)</label>
                            <input type="text" name="time" id="" placeholder="Processing Time" className="border border-gray-300 p-2 md:p-3" defaultValue={processing_time} />
                        </div>

                        <div className="flex flex-col space-y-2">
                            <label>Stock Status</label>
                            <select name="stock" className="border border-gray-300 p-2 md:p-3">
                                <option value={`${stockStatus}`}>{stockStatus}</option>
                                <option value="in-stock">In Stock</option>
                                <option value="made-order">Made To Order</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-2 mt-3">
                        <label>Short Description</label>
                        <textarea id="" name="description" rows="2" cols="50" className="border border-gray-300 p-2 md:p-3" placeholder="Write a short description" defaultValue={description}></textarea>

                    </div>
                    <input type="submit" value="Update Craft" className="w-full btn btn-sm md:btn-md btn-outline custom-btn rounded-none hover:text-white mt-3" />
                </form>
            </div>
        </div>
    );
};

export default UpdateCraft;