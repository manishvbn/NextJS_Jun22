import Head from 'next/head'
import Products from '../components/products/Products';

// import { getProducts } from '../data';

export default function ProductsPage({ products }) {
    return (
        <>
            <Head>
                <title>Products Page</title>
                <meta name="description" content="Products Catalog Page" />
            </Head>

            <h1 className="text-primary text-center mt-5">
                Welcome to my Shop
            </h1>

            <div className='text-center mt-5'>
                <section>
                    <div className="row">
                        <Products products={products} />
                    </div>
                </section>
            </div>
        </>
    );
}

// use getStaticProps whenever possible, so the content is pre-rendered at build time.
// export async function getStaticProps() {
//     const products = await getProducts();
//     return {
//         props: {
//             products
//         }
//     };
// }

// use getServerSideProps when data changes a lot and you need to get fresh content.
// The content is pre-rendered on the server side upon the client's request. 
// This is a slower option. If you uncomment this, and comment getStaticProps, the app
// should still work
// export async function getServerSideProps() {
//     const products = await getProducts();
//     return {
//         props: {
//             products
//         }
//     };
// }


// API Call

// SSG
// export async function getStaticProps() {
//     const res = await fetch('http://localhost:8001/products')
//     const products = await res.json();

//     return {
//         props: {
//             products
//         }
//     };
// }

// SSR
// export async function getServerSideProps() {
//     const res = await fetch('http://localhost:8001/products')
//     const products = await res.json();

//     return {
//         props: {
//             products
//         }
//     };
// }

// ISR
// export async function getStaticProps() {
//     const res = await fetch('http://localhost:8001/products')
//     const products = await res.json();

//     return {
//         props: {
//             products
//         },
//         revalidate: 10
//     };
// }

export async function getStaticProps() {
    const res = await fetch(process.env.PRODUCTS_URL)
    const products = await res.json();

    return {
        props: {
            products
        },
        revalidate: 10
    };
}