import Layout from "@/components/Layout/Layout";
import MaxWidthWrapper from "@/components/MaxWidthWrapper/MaxWidthWrapper";
import { Aside } from "@/components/Store/Aside";
import { CategoryLink } from "@/components/Store/CategoryLink";
import { Listing } from "@/components/Store/Listing";
import { Products } from "@/lib/api/products";
import React from "react";
import type { InferGetStaticPropsType } from 'next';
import { getAllProducts } from "@/lib/api/products";
import SeoLayout from "@/components/Seo/SeoLayout";


type StaticProps = {
    props: {
        allProducts: Products
    }

}


export async function getStaticProps(): Promise<StaticProps> {
    const allProducts = await getAllProducts();

    return {
        props: {
            allProducts
        }
    };
}


function Store({ allProducts }: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <>
            <SeoLayout
                title='Store - Best Online Shopping Platform'
                description='The one stop shop for all your shopping needs.'
                image='/home.png'
            >

                <div>
                    <Layout>
                        <MaxWidthWrapper>

                            <div className="flex items-center mt-5 mb-5 gap-3 md:flex-row flex-col">
                                <Aside />
                                <Listing isMobile={false} allProducts={allProducts} />
                            </div>
                        </MaxWidthWrapper>
                    </Layout>
                </div>
            </SeoLayout>
        </>
    )
}
export default Store;