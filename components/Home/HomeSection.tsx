import React from "react";
import { ImageLoader } from "../ui/ImageLoader";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

function HomeSection() {

    const IMAGE_PROPS = [
        {
            srcImg: "/images/electronics.jpg",
            alt: "imgOne",
        },
        {
            srcImg: "/images/jewelery.jpg",
            alt: "imgOne",
        },
        {
            srcImg: "/images/mens-clothing.jpg",
            alt: "imgOne",
        },
        {
            srcImg: "/images/womens-clothing.jpg",
            alt: "imgOne",
        },
    ]


    return (
        <>
            <div className="mt-7 p-5 flex items-center justify-center ">
                <Swiper
                    pagination={{
                        dynamicBullets: true,
                        clickable: true
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >

                    {
                        IMAGE_PROPS.map((imgLink) => (
                            <SwiperSlide
                                key={imgLink.srcImg}

                            >

                                <img
                                    src={imgLink.srcImg}
                                    className="flex h-60 min-w-full justify-center sm:h-80 object-cover"
                                />

                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
            <div className="flex items-center justify-center flex-col text-center mt-5 mb-5 ">
                <h1 className="font-bold text-2xl dark:text-primary ">The One Stop Shop for All Your<br /> Shopping Needs!</h1>
                <p className='text-base text-secondary sm:text-lg'>
                    Hi! Welcome to our shopping website. We are excited to offer you a great
                    selection of products at amazing prices. We are sure you will find
                    something you love. Thank you for choosing us.
                </p>
                <button className="border-2 mt-2 p-2 rounded-lg dark:text-white shadow-md">
                    Start shopping
                </button>
            </div>
        </>
    )
}
export default HomeSection;