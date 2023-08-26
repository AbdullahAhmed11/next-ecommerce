import React, { useState, useContext, createContext } from "react"
import { useLocalStorage as useStore } from "../hook/useLocalStorage"
import type { ReactNode, ChangeEvent } from "react"
import type { Product } from "../api/products"

type Cart = Product & { quantity: number };
type Carts = Cart[]

type ShoppingCartContext = {
    totalPrice: number;
    currentCart: Carts;
    cartProducts: number;
    clearCart: () => void;
    addProduct: (productData: Product) => () => void;
    deleteProduct: (productId: number) => () => void;
    increaseCartQuantity: (productId: number) => () => void;
    decreaseCartQuantity: (productId: number) => () => void;
}

const ShoppingCartContext = createContext<ShoppingCartContext | null>(null);

export function useShoppingCart(): ShoppingCartContext {
    const context = useContext(ShoppingCartContext)
    if (!context) {
        throw new Error(
            'useShoppingCart must be used within ShoppingCartContext'
        )
    }
    return context;
}

type ShoppingCartProviderProps = {
    children: ReactNode;
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
    const [currentCart, setCurrentCart] = useStore<Carts>('curentCart', []);

    //addProduct to cart fn
    const addProduct = (productData: Product) => (): void => {
        setCurrentCart([{ ...productData, quantity: 1 }, ...currentCart])
    }

    //deleteProduct fn
    const deleteProduct = (productId: number) => (): void => {
        setCurrentCart(currentCart.filter(({ id }) => id !== productId))
    }

    //increaseCartQuantity fn
    const increaseCartQuantity = (productId: number) => (): void => {
        setCurrentCart(currentCart.map((cartProduct) =>
            cartProduct.id === productId ? {
                ...cartProduct, quantity: cartProduct.quantity + 1
            } : cartProduct
        ))
    }


    //decreaseCartQuantity fn
    const decreaseCartQuantity = (productId: number) => (): void => {
        setCurrentCart(currentCart.map((cartProduct) =>
            cartProduct.id === productId ? {
                ...cartProduct, quantity: cartProduct.quantity - 1
            } : cartProduct
        ))
    }

    //clearAllCart fn
    const clearCart = (): void => setCurrentCart([])

    //totalPrice fn
    const [cartProducts, totalPrice] = currentCart.reduce(
        ([products, total], { price, quantity }) => [
            products + quantity,
            total + price * quantity
        ],
        [0, 0]
    );

    const value = {
        totalPrice,
        currentCart,
        cartProducts,
        clearCart,
        addProduct,
        deleteProduct,
        increaseCartQuantity,
        decreaseCartQuantity
    };


    return (
        <ShoppingCartContext.Provider value={value}>
            {children}
        </ShoppingCartContext.Provider>
    )
}
