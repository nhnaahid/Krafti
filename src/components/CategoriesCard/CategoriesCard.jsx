import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CategoriesCard = ({ category }) => {
    return (
        <div className="h-[600px] w-4/5 mx-auto">
            <div className="h-full card card-compact w-96 bg-base-100 shadow-xl">
                <figure className="h-[400px]">
                    <img className="w-full h-full object-cover" src={category.image} alt="Category Image" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{category.subcategory_name}</h2>
                    <p>{category.description}</p>
                    <div className="card-actions justify-center">
                        <Link to={`/category/${category.subcategory_name}`}><button className="btn btn-sm  border-black my-btn mt-3 rounded-none">View Items</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

CategoriesCard.propTypes = {
    category: PropTypes.object
};

export default CategoriesCard;