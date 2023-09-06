import React, { useState, useEffect, useMemo } from "react"
import { useRouter } from "next/router"
import cn from "clsx"
import { filterQuery } from "@/lib/query"
import type { QueryType } from "./Aside"
import type { Products } from "@/lib/api/products"
import { ProductCard } from "./ProductCart"

type ListingProps = {
    isMobile: boolean;
    allProducts: Products;
}

export function Listing({ isMobile, allProducts }: ListingProps) {

    const [currentCategory, setCurrentCategory] = useState<string | null>(null);
    const [searchQuery, setSearchQuery] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const {
        isReady,
        pathname,
        query: { search, category }
    } = useRouter() as QueryType;

    useEffect(() => {
        if (!isReady) setIsLoading(true);
        else {
            const timeoutId = setTimeout(() => setIsLoading(false), 500)
            return () => clearTimeout(timeoutId)
        }
    }, [isReady])

    useEffect(() => {
        if (pathname === "/store") setSearchQuery(search ?? '')
    }, [search])

    useEffect(() => {
        if (pathname === "/store") setCurrentCategory(category ?? null)
    })

    let filteredProducts = allProducts.filter(
        ({ category }) => category === currentCategory || !currentCategory

    )

    if (searchQuery)
        filteredProducts = filteredProducts.filter(({ title }) =>
            filterQuery(title, searchQuery)
        );

    const productsNotFound = filteredProducts.length === 0;

    const key = useMemo(() => Math.random(), [currentCategory, searchQuery]);




    return (
        <>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-4 w-full">
                {
                    filteredProducts.map((productData) => (
                        <div className="" key={productData.id}>
                            <ProductCard productData={productData} />
                        </div>

                    ))
                }
            </div>
        </>
    )
}