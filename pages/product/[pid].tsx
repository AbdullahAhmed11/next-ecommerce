import { getAllProductsId, getProductData } from "@/lib/api/products";
import type {
    GetStaticPathsResult,
    GetStaticPropsContext,
    GetStaticPropsResult,
    InferGetStaticPropsType
} from 'next';
import type { Params, Product } from "@/lib/api/products";
import ProductView from "@/components/Product/ProductView";

export async function getStaticPaths(): Promise<GetStaticPathsResult<Params>> {
    const paths = await getAllProductsId();

    return {
        paths,
        fallback: 'blocking'
    };
}


type ProductProps = {
    pid: string;
    productData: Product | null;
};

export async function getStaticProps({
    params
}: GetStaticPropsContext<Params>): Promise<GetStaticPropsResult<ProductProps>> {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const { pid } = params!;
    const productData = await getProductData(pid);

    return {
        props: {
            pid,
            productData
        }
    };
}

export default function Product({
    pid,
    productData
}: InferGetStaticPropsType<typeof getStaticProps>) {
    return productData ? (
        <>
            <ProductView pid={pid} productData={productData} />
        </>
    ) : (
        <>

        </>
    )

}
