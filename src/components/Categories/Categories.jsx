import { useContext, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { AuthContext } from "../../providers/AuthProvider";
import CategoriesCard from "../CategoriesCard/CategoriesCard";
const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const Categories = () => {
    const [categories, setCategories] = useState([]);
    const { theme } = useContext(AuthContext);
    fetch('http://localhost:5000/categories')
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            setCategories(data);
        })
    return (
        <div className="mt-20">
            <div className={`w-full md:w-1/2 mx-auto space-y-3 ${theme === 'dark' && 'text-gray-200'} mb-10`}>
                <h1 className="font-oswald font-semibold text-xl md:text-3xl text-center">ALL CATEGORIES</h1>
                <p className="text-xs md:text-base text-center">Explore the timeless beauty of our jute and wood craft collection, where rustic charm meets eco-conscious elegance.</p>
            </div>
            <Carousel responsive={responsive}>
                {
                    categories.map(category => <CategoriesCard key={category._id} category={category}></CategoriesCard>)
                }
            </Carousel>
        </div>
    );
};

export default Categories;