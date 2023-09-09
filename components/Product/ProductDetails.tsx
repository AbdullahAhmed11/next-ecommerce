import { RiStarSFill } from "@/assets/icons";
import React from "react";



interface ProductDetailProps {
    title: string;
    count: number;
    rate: number;
    price: number;
    category: string;
    description: string;
}


export default function ProductDetails({
    title,
    count,
    rate,
    price,
    category,
    description
}: ProductDetailProps) {
    return (
        <>
            <div className="md:w-[500px] w-full  border-2 border-borderPrimary p-3 rounded-md dark:text-white flex flex-col gap-3">
                <div className="flex flex-col">
                    <h1 className="text-xl font-bold">{title}</h1>
                    <p className='flex items-center gap-1 text-sm font-light'>
                        <i className='text-yellow-400'>
                            <RiStarSFill />
                        </i>{' '}
                        {rate} | Sold {count}
                    </p>
                    <h1 className="text-xl font-bold mt-4">${price}</h1>
                </div>
                <div className="w-full h-[1px] bg-black dark:bg-white"></div>
                <div className="flex flex-col gap-3">
                    <p>category: {category}</p>
                    <p>{description}</p>
                </div>
            </div>
        </>
    )
}