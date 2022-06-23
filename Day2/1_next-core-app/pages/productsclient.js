import Head from 'next/head'
import { useEffect, useState } from 'react';
import Products from '../components/products/Products';
import LoaderAnimation from '../components/common/LoaderAnimation';

export default function ProductsClientPage() {
    const [products, setProducts] = useState(null)
    const [isLoading, setLoading] = useState(false)
    const [message, setMessage] = useState("We are Sold out!");

    useEffect(() => {
        setLoading(true);
        fetch(process.env.NEXT_PUBLIC_PRODUCTS_CLIENT_URL)
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
                setLoading(false);
            }).catch(eMsg => {
                setMessage("Error Loading Data...");
                setLoading(false);
            });
    }, []);

    return (
        <>
            <Head>
                <title>Products Page</title>
                <meta name="description" content="Products Catalog Page" />
            </Head>

            <h1 className="text-primary text-center mt-5">
                Welcome to my Shop (Client Rendering)
            </h1>

            {
                isLoading
                    ? <LoaderAnimation />
                    : <div className='text-center mt-5'>
                        {
                            products ?
                                <section>
                                    <div className="row">
                                        <Products products={products} />
                                    </div>
                                </section>
                                :
                                <h2>{message}</h2>
                        }
                    </div>
            }
        </>
    );
}