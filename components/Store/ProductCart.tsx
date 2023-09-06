import React, { useState, useEffect } from "react";
import { Product } from "@/lib/api/products";
import { useShoppingCart } from "@/lib/context/shoppingCart";
import {
    RiStarSFill,
    MdAddShoppingCart,
    MdRemoveShoppingCart
} from '@/assets/icons';



type ProductDataProps = {
    productData: Product;
}

export function ProductCard({ productData }: ProductDataProps) {

    const {
        id,
        title,
        image,
        price,
        rating: { count, rate }
    } = productData;

    const [productQuantity, setProductQuantity] = useState(0)
    const { currentCart, addProduct, deleteProduct } = useShoppingCart()

    const { quantity } = currentCart.find(({ id: cartId }) => cartId === id) ?? {}

    useEffect(() => {
        setProductQuantity(quantity ?? 0);
    }, [quantity]);


    return (
        <>
            <div className="flex flex-col border w-2/3 md:w-full m-auto">
                <div className="">
                    <img src={image} className="w-full h-[230px]" />
                </div>
                <div className="p-2 border-t mt-2 flex flex-col dark:text-white">
                    <div className="">
                        {/* <h1 className="text-sm">{title}</h1> */}
                    </div>
                    <div>
                        <p className="font-bold ">${price}</p>
                    </div>
                    <div className="flex items-center justify-between">
                        <div>
                            <p className='flex items-center gap-1 text-sm font-light'>
                                <i className='text-yellow-400'>
                                    <RiStarSFill />
                                </i>{' '}
                                {rate} | Sold {count}
                            </p>
                        </div>
                        <div className="">
                            {
                                productQuantity ? (
                                    <button className="border w-20 p-2 rounded-md" onClick={deleteProduct(id)}>
                                        remove
                                    </button>

                                ) : (
                                    <button className="border w-20 p-2 rounded-md" onClick={addProduct(productData)}>
                                        Add
                                    </button>

                                )
                            }
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
