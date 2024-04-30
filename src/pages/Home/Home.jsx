import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import CraftCard from "../../components/CraftCard/CraftCard";
import CustomCraft from "../../components/CustomCraft/CustomCraft";
import NewsLetter from "../../components/NewsLetter/NewsLetter";

const Home = () => {
    const crafts = useLoaderData();
    const slicedCrafts = crafts.slice(0, 6);
    // console.log(slicedCrafts);
    return (
        <div>
            <Banner></Banner>
            <div className="mt-20">
                <div className="w-full md:w-1/2 mx-auto space-y-3">
                    <h1 className="font-oswald font-semibold text-xl md:text-3xl text-center">TRENDING PRODUCTS</h1>
                    <p className="text-xs md:text-base text-center">Experience the natural beauty of jute and wood craftsmanship at our store. Explore the trending products and bring a touch of rustic charm to your life!</p>
                </div>
                <div className="w-4/5 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-5 md:mt-12">
                    {
                        slicedCrafts.map(craft =>
                            <CraftCard
                                key={craft._id}
                                craft={craft}
                            ></CraftCard>)
                    }
                </div>
            </div>
            <CustomCraft></CustomCraft>
            <NewsLetter></NewsLetter>
        </div>
    );
};

export default Home;