import React from "react"
import { useShoppingCart } from "@/lib/context/shoppingCart"
import Link from "next/link";
import { MdAdd, MdRemove, MdDelete } from '@/assets/icons';


type CartItem = {
    id: number;
    index: number;
    title: string;
    image: string;
    price: number;
    quantity: number;
}


export default function CartItme({
    id,
    index,
    title,
    image,
    price,
    quantity
}: CartItem) {

    const { deleteProduct, increaseCartQuantity, decreaseCartQuantity, } = useShoppingCart()
    const toProducts = `/product/${id}`;

    return (
        <>
            <div className="flex rounded-lg border-2 mt-3">
                <Link href={toProducts}>
                    <img
                        src={image}
                        className="h-[108px] w-[108px] rounded-lg bg-white  !p-4 "
                        alt={title}
                    />
                </Link>

                <div className="w-full flex flex-col justify-between py-2 px-4">
                    <div>
                        <Link href={toProducts} legacyBehavior>
                            <a
                                className='tab overflow-hidden text-ellipsis font-medium 
                           transition [display:-webkit-box] [-webkit-line-clamp:1]
                           [-webkit-box-orient:vertical] hover:text-secondary'
                            >
                                {title}
                            </a>
                        </Link>
                        <p className="font-bold">${price}</p>
                    </div>
                    <div className="flex flex-wrap justify-between text-sm font-light">
                        <div className="flex gap-1">
                            <p>Quantity: {quantity}</p>
                        </div>
                        <div>
                            <p>
                                Total:{' '}
                                <span>
                                    ${price * quantity}
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className='grid border-l border-border-primary text-sm inner:rounded-none'>
                    <button className="border p-1" onClick={increaseCartQuantity(id)}>
                        <MdAdd className="text-2xl" />
                    </button>
                    <button className="border p-1">
                        <MdRemove className="text-2xl" onClick={decreaseCartQuantity(id)} />
                    </button>
                    <button className="border p-1">
                        <MdDelete className="text-2xl" onClick={deleteProduct(id)} />
                    </button>

                </div>
            </div>
        </>
    )

}