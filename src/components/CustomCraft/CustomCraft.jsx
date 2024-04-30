
const CustomCraft = () => {
    return (
        <div className="mt-20 w-full md:w-4/5 mx-auto flex flex-col md:flex-row items-center justify-between gap-5 md:gap-0 px-7 py-10 bg-base-200">
            <div className="w-full md:w-1/2 md:text-end pr-7 border-r-0 md:border-r border-gray-400 space-y-5" >
                <h1 className="text-6xl font-oswald font-bold">Get your aesthetic enjoyment</h1>
                <p className="font-dancing text-[#ffb901] text-3xl font-bold">Customize Your Crafts</p>
            </div>
            <div className="w-full md:w-1/2 pl-0 md:pl-7 space-y-3">
                <p className="font-light">Whether you are crafting for relaxation, self-expression, or to make heartfelt gifts for loved ones, Krafti is here to support you every step of the way. Start creating something extraordinary today!</p>
                <button className={`btn btn-sm my-btn border-black hover:border-[#ffb901] rounded-none`}>Contact Now</button>
            </div>
        </div>
    );
};

export default CustomCraft;