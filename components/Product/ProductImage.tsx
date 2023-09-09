import React from "react";

interface ProductImageProps {
    image: string;
    title: string;
}


export default function ProductImage({
    image,
    title
}: ProductImageProps) {
    return (
        <>
            <div className="w-full sm:w-auto border-2">
                <img
                    src={image}
                    alt={title}
                    className="!p-4 h-full w-full shrink-0  bg-primary sm:w-[300px] aspect-square"
                />
            </div>
        </>
    )
}