import React from "react"
import { Product } from "@/lib/api/products";
import ProductImage from "./ProductImage";
import Layout from "../Layout/Layout";
import ProductDetails from "./ProductDetails";
import MaxWidthWrapper from "../MaxWidthWrapper/MaxWidthWrapper";
import ProductCart from "./ProductCart";

type ProductViewProps = {
    pid: string;
    productData: Product;
};


export default function ProductView({
    pid,
    productData
}: ProductViewProps) {

    const {
        id,
        title,
        price,
        description,
        category,
        image,
        rating: { count, rate }
    } = productData;


    return (
        <>
            <Layout>
                <MaxWidthWrapper>
                    <div className=" mt-10 mb-28 flex  gap-3 md:flex-row flex-col">
                        <ProductImage image={image} title={title} key={id} />
                        <ProductDetails
                            title={title}
                            count={count}
                            rate={rate}
                            price={price}
                            category={category}
                            description={description}
                            key={title}
                        />
                        <ProductCart id={id} productData={productData} key={price} />
                    </div>

                </MaxWidthWrapper>
            </Layout>
        </>
    )
}