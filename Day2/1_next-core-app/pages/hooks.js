import Head from 'next/head';
import HooksRoot from '../components/hooks-demo/HooksRoot';
import RootLayout from '../components/layouts/RootLayout';
import Sidebar from '../components/layouts/sidebar/Sidebar';

export default function Hooks() {
    return (
        <>
            <Head>
                <title>Hooks Page</title>
                <meta name="description" content="Hooks Demo Created by Synechron Team" />
            </Head>

            <h1 className='text-primary text-center mt-5'>
                Welcome to Hooks Demo!
            </h1>

            <div className='text-center mt-5'>
                <HooksRoot />
            </div>
        </>
    )
}

Hooks.getLayout = function getLayout(page) {
    return (
        <RootLayout>
            <div className='row'>
                <div className='col-3'>
                    <Sidebar />
                </div>
                <div className='col'>
                    {page}
                </div>
            </div>
        </RootLayout>
    );
}
