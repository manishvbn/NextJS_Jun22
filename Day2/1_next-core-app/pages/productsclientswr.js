// npm i swr
import Head from 'next/head'
import useSWR from 'swr';
import { useEffect, useState } from 'react';
import Products from '../components/products/Products';
import LoaderAnimation from '../components/common/LoaderAnimation';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function ProductsClientSWRPage() {
    const { data, error } = useSWR(process.env.NEXT_PUBLIC_PRODUCTS_CLIENT_URL, fetcher);

    return (
        <>
            <Head>
                <title>Products Page</title>
                <meta name="description" content="Products Catalog Page" />
            </Head>

            <h1 className="text-primary text-center mt-5">
                Welcome to my Shop (Client Rendering - SWR)
            </h1>

            {
                error ? <h2 className='text-danger text-center'>{error.message}</h2> :
                    !data
                        ? <LoaderAnimation />
                        : <div className='text-center mt-5'>
                            {
                                data ?
                                    <section>
                                        <div className="row">
                                            <Products products={data} />
                                        </div>
                                    </section>
                                    :
                                    <h2>We are sold out!</h2>
                            }
                        </div>
            }
        </>
    );
}