import { Link } from "react-router-dom";

const CategoryItemsCard = ({ item }) => {
    console.log(item);
    const { _id, image, item_name, description, subcategory_name, price, rating, processing_time } = item;
    return (
        <div className="h-[600px]">
            <div className="card w-96 bg-base-100 shadow-xl h-full">
                <figure className="px-10 pt-10 h-[500px]">
                    <img src={image} alt="Items photo" className="rounded-xl h-full w-full object-cover" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{item_name}</h2>
                    <h3 className="card-title text-base">{subcategory_name}</h3>
                    <p>{description}</p>
                    <div className="card-actions">
                        <Link to={`/crafts/${_id}`}><button className="btn btn-sm  border-black my-btn mt-3 rounded-none">View Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryItemsCard;