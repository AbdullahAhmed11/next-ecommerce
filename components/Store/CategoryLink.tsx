import Link from "next/link";
import React from "react";
import cn from "clsx"
type CategoryLinkProps = {
    search: string | undefined;
    category: string | undefined;
    categoryName: string;
    currentCategory: string | null;
}

export function CategoryLink({
    search,
    category,
    categoryName,
    currentCategory
}: CategoryLinkProps) {

    const isActive = categoryName === "all" ? !category : category === categoryName;

    return (
        <>
            <Link
                legacyBehavior
                href={{
                    pathname: "/store",
                    query: {
                        ...(search && { search }),
                        ...(categoryName !== "all" && { category: categoryName })
                    }
                }}
            >
                <a
                    className={cn(
                        'tab transition hover:brightness-125',
                        currentCategory && isActive && 'text-balck text-bold text-2xl'
                    )}
                >
                    {categoryName}
                </a>
            </Link>
        </>
    )
}
