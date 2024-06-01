import PropTypes from 'prop-types';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const CategoriesCard = ({ category }) => {
    const { theme } = useContext(AuthContext);
    console.log(theme);
    return (
        <div className="h-[600px] w-4/5 mx-auto">
            <div className="h-full card card-compact w-96 bg-base-100 shadow-xl">
                <figure className="h-[400px]">
                    <img className="w-full h-full object-cover" src={category.image} alt="Category Image" />
                </figure>
                <div className="card-body">
                    <h2 className={`card-title ${theme === 'dark' && 'text-gray-200'}`}>{category.subcategory_name}</h2>
                    <p className={`${theme === 'dark' && 'text-gray-200'}`}>{category.description}</p>
                    <div className="card-actions justify-center">
                        <Link to={`/category/${category.subcategory_name}`}><button className={`btn btn-sm  border-black my-btn mt-3 rounded-none ${theme === 'dark' && 'border-gray-400 text-gray-300 hover:text-black'}`}>View Items</button></Link>
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