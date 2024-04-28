import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './banner.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import banner1 from '../../assets/banner1.jpg'
import banner2 from '../../assets/banner2.jpg'
import banner3 from '../../assets/banner3.jpg'
const Banner = () => {
    return (
        <div className='h-[300px] md:h-dvh w-full relative'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide><img src={banner1} alt="" /></SwiperSlide>
                <SwiperSlide><img src={banner2} alt="" /></SwiperSlide>
                <SwiperSlide><img src={banner3} alt="" /></SwiperSlide>

            </Swiper>
            <div className='absolute top-0 z-10 w-full h-full flex flex-col justify-center items-center bg-black bg-opacity-50 space-y-2 md:space-y-5'>
                <h1 className='font-dancing text-2xl md:text-5xl text-[#ffb901]'>Big Discount</h1>
                <h1 className='font-oswald text-3xl md:text-6xl font-semibold text-white'>SAVE UPTO 40%</h1>
                <p className='text-xs md:text-base font-poppins  text-white text-center'>Discover the Best of Stylist Catalogue, 2024</p>
                <button className={`btn btn-sm md:btn-md btn-outline my-btn border-[#ffb901] text-white hover:text-black rounded-none`}>Shop Now</button>
            </div>
        </div>
    );
};

export default Banner;