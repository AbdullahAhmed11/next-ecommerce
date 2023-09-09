import React, { useEffect, useState } from "react"
import { Product } from "@/lib/api/products";
import { useShoppingCart } from "@/lib/context/shoppingCart";
import {
    MdAdd,
    MdRemove,
    MdAddShoppingCart,
    MdRemoveShoppingCart
} from '@/assets/icons';
type AddCartProps = {
    id: number;
    productData: Product;
};

export default function ProductCart({ id, productData }: AddCartProps) {
    const [productQuantity, setProductQuantity] = useState(0)

    const { addProduct, deleteProduct, currentCart } = useShoppingCart()

    const { quantity } = currentCart.find(({ id: cartId }) => cartId === id) ?? {};

    useEffect(() => {
        setProductQuantity(quantity ?? 0)
    }, [quantity])
    return (
        <>
            <div className="md:w-[400px] w-full  border-2 rounded-md p-3 h-auto flex flex-col gap-3 dark:text-white">
                <h1 className="font-bold">Buy Product</h1>
                <div className="w-full h-[1px] bg-black dark:bg-white"></div>
                <div>
                    {
                        productQuantity ? (
                            <div className="flex flex-col gap-3 mt-5">
                                <div className="flex items-center gap-3 justify-center">
                                    <span className="w-6 h-6 border-2 rounded-full flex items-center justify-center">
                                        <MdRemove />
                                    </span>

                                    <span
                                        onClick={addProduct(productData)}
                                        className="w-6 h-6 border-2 rounded-full flex items-center justify-center">
                                        <MdAdd />
                                    </span>
                                </div>
                                <button
                                    className="w-full border-2 p-2 rounded-xl hover:bg-sky-700 hov"
                                    onClick={deleteProduct(id)}
                                >remove cart</button>
                            </div>
                        ) : (
                            <>
                                <button
                                    onClick={addProduct(productData)}
                                    className="w-full border-2 p-2 rounded-xl hover:bg-sky-700 hov"

                                >Add to cart</button>
                            </>
                        )
                    }
                </div>
            </div>
        </>
    )
}