import { useLoaderData } from "react-router-dom";
import CategoryItemsCard from "../../components/CategoryItemsCard/CategoryItemsCard";
import { Helmet } from "react-helmet-async";

const CategoryItems = () => {
    const items = useLoaderData();
    console.log(items);
    return (
        <div className="w-full md:w-4/5 mx-auto flex flex-col md:flex-row gap-5 mb-20">
            <Helmet>
                <title>Krafti | Categories</title>
            </Helmet>
            {
                items.map(item => <CategoryItemsCard key={item._id} item={item}></CategoryItemsCard>)
            }
        </div>
    );
};

export default CategoryItems;