import React, { useState, useEffect } from "react"
import cn from "clsx"
import { useRouter } from "next/router"
import { CategoryLink } from "./CategoryLink"


const categories = [
    'electronics',
    'jewelery',
    "men's clothing",
    "women's clothing"
];

export type QueryType = {
    isReady: boolean;
    pathname: string;
    query: {
        [queryName: string]: string | undefined
    }
}

type AsideProps = {
    isMobile: boolean
}


export function Aside() {

    const [currentCategory, setCurrentCategory] = useState<null | string>(null)
    const {
        isReady,
        pathname,
        query: { search, category }
    } = useRouter() as QueryType;

    useEffect(() => {

        if (!isReady) return;
        if (pathname === "/store") setCurrentCategory(category ?? "all");
    }, [category])



    return (
        <>
            <div className='top-28 flex w-full max-w-none flex-col gap-4 self-start rounded-lg
                 border border-border-primary p-4 md:sticky md:max-w-sm dark:text-white'>
                <div
                    className={cn(
                        'flex flex-wrap items-center justify-center gap-2 text-center md:block md:text-left',
                        !currentCategory && 'animate-pulse'
                    )}
                >
                    <h1 className='text-xl'>Store /</h1>
                    <p className='text-2xl font-bold capitalize md:text-4xl'>
                        {currentCategory ?? '...'}
                    </p>
                </div>
                <hr />
                <ul className='flex flex-wrap justify-center gap-2 inner:text-lg inner:capitalize inner:text-secondary md:block'>
                    <li>
                        <CategoryLink
                            search={search}
                            category={category}
                            currentCategory={currentCategory}
                            categoryName='all'
                        />
                    </li>
                    {categories.map((categoryName) => (
                        <li key={categoryName}>
                            <CategoryLink
                                search={search}
                                category={category}
                                currentCategory={currentCategory}
                                categoryName={categoryName}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}