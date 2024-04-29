import { MdHome, MdKeyboardArrowRight } from "react-icons/md";
import Swal from 'sweetalert2'

const AddCrafts = () => {
    const handleAddCraft = e => {
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
        const userEmail = form.userEmail.value;
        const userName = form.userName.value;
        const itemInfo = { image, item_name, subcategory_name, description, price, rating, customization, processing_time, stockStatus, userEmail, userName }
        console.log(itemInfo);
        fetch('http://localhost:5000/crafts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(itemInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success',
                        text: 'Craft Item Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                }
                else {
                    Swal.fire({
                        title: 'Error!',
                        text: 'Failed to Add Craft. Please, Try Again.',
                        icon: 'error',
                        confirmButtonText: 'Ok'
                    })
                }
            })
    }

    return (
        <div>
            <div className="flex justify-between bg-gray-200 py-5 px-7 md:px-20">
                <h3 className="font-oswald tracking-wide">Add Crafts</h3>
                <div className="flex items-center space-x-3">
                    <MdHome className="text-lg"></MdHome>
                    <MdKeyboardArrowRight className="text-lg"></MdKeyboardArrowRight>
                    <p className="font-poppins">Add Crafts</p>
                </div>
            </div>
            <div className="w-4/5 md:w-3/5 mx-auto mt-5">
                <h1 className="border-b border-gray-300 font-oswald tracking-wide text-2xl py-2">Add Craft Items</h1>
                <form onSubmit={handleAddCraft} className="mt-5">
                    <div className="grid grid-cols-2 gap-5 ">
                        <div className="flex flex-col space-y-2">
                            <label>Item Name</label>
                            <input type="text" name="itemName" id="" placeholder="Item Name" className="border border-gray-300 p-2 md:p-3" />
                        </div>
                        <div className="flex flex-col space-y-2">
                            <label>Subcategory</label>
                            <input type="text" name="subcategory" id="" placeholder="Subcategory Name" className="border border-gray-300 p-2 md:p-3" />
                        </div>
                        <div className="flex flex-col space-y-2">
                            <label>Item Photo</label>
                            <input type="text" name="itemPhoto" id="" placeholder="Item Photo url" className="border border-gray-300 p-2 md:p-3" />
                        </div>


                        <div className="flex flex-col space-y-2">
                            <label>Price ($)</label>
                            <input type="text" name="price" id="" placeholder="Item Price" className="border border-gray-300 p-2 md:p-3" />
                        </div>

                        <div className="flex flex-col space-y-2">
                            <label>Rating (Out of 5)</label>
                            <input type="text" name="rating" id="" placeholder="Item Rating" className="border border-gray-300 p-2 md:p-3" />
                        </div>

                        <div className="flex flex-col space-y-2">
                            <label>Customization?</label>
                            <select name="customization" className="border border-gray-300 p-2 md:p-3">
                                <option value="" disabled selected>Select</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                        </div>

                        <div className="flex flex-col space-y-2">
                            <label>Processing Time (days)</label>
                            <input type="text" name="time" id="" placeholder="Processing Time" className="border border-gray-300 p-2 md:p-3" />
                        </div>

                        <div className="flex flex-col space-y-2">
                            <label>Stock Status</label>
                            <select name="stock" className="border border-gray-300 p-2 md:p-3">
                                <option value="" disabled selected>Select</option>
                                <option value="in-stock">In Stock</option>
                                <option value="made-order">Made To Order</option>
                            </select>

                        </div>
                        <div className="flex flex-col space-y-2">
                            <label>User Name</label>
                            <input type="text" name="userName" id="" placeholder="User Name" className="border border-gray-300 p-2 md:p-3" />
                        </div>

                        <div className="flex flex-col space-y-2">
                            <label>User Email</label>
                            <input type="email" name="userEmail" id="" placeholder="Email" className="border border-gray-300 p-2 md:p-3" />
                        </div>
                    </div>
                    <div className="flex flex-col space-y-2 mt-3">
                        <label>Short Description</label>
                        <textarea id="" name="description" rows="2" cols="50" className="border border-gray-300 p-2 md:p-3" placeholder="Write a short description"></textarea>

                    </div>
                    <input type="submit" value="Add Craft" className="w-full btn btn-sm md:btn-md btn-outline custom-btn rounded-none hover:text-white mt-3" />
                </form>
            </div>
        </div>
    );
};

export default AddCrafts;