import Head from 'next/head';
import HooksRoot from '../components/hooks-demo/HooksRoot';
import RootLayout from '../components/layouts/RootLayout';

export default function Hooks() {
    return (
        <RootLayout>
            <Head>
                <title>Hooks Page</title>
                <meta name="description" content="Hooks Demo Created by Synechron Team" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <h1 className='text-primary text-center mt-5'>
                    Welcome to Hooks Demo!
                </h1>

                <div className='text-center mt-5'>
                    <HooksRoot />
                </div>
            </main>
        </RootLayout>
    )
}
