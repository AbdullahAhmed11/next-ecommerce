import React, { useEffect } from "react"
import { Fragment, useRef, useState } from "react"
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import { useShoppingCart } from "@/lib/context/shoppingCart";
import { ShoppingBagIcon } from "@heroicons/react/24/solid";
import CartItme from "./CartItem";



export default function Dialogs() {
    const [open, setOpen] = useState(false)
    const cancelButtonRef = useRef(null)
    const [totalProducts, setTotalProducts] = useState(0)

    const { cartProducts, currentCart, totalPrice, clearCart } = useShoppingCart()

    useEffect(() => {
        setTotalProducts(cartProducts)
    }, [cartProducts])

    const handleShow = () => {
        setOpen(!open)
    }

    const cartLenght = currentCart.length;

    return (
        <>
            <div onClick={handleShow}>
                <ShoppingBagIcon className="w-6 h-6 text-black dark:text-white" />
                <span className="absolute w-4 h-4 rounded-full bg-black dark:bg-white dark:text-black flex items-center justify-center text-white top-6 right-29">{totalProducts}</span>
            </div>
            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                enterTo="opacity-100 translate-y-0 sm:scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            >
                                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                    <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                        {
                                            currentCart.map((cartProduct, index) => (
                                                <CartItme
                                                    index={index}
                                                    key={cartProduct.id}
                                                    {...cartProduct}
                                                />
                                            ))
                                        }
                                    </div>
                                    <div className="bg-gray-50 px-4 py-3  sm:px-6 flex items-center justify-between">
                                        <p className="tex-lg">
                                            Total: {` `}
                                            <span className="font-bold">
                                                {totalPrice}
                                            </span>
                                        </p>
                                        <button
                                            type="button"
                                            className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                            onClick={() => setOpen(false)}
                                            ref={cancelButtonRef}
                                        >
                                            checkout
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>

        </>
    )
}