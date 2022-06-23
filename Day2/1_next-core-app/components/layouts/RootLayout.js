import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

const RootLayout = ({ children }) => {
    return (
        <div className="container">
            <Head>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className='text-center'>
                <span className='me-3'>
                    <Link href="/">Index</Link>
                </span>
                <span className='me-3'>
                    <Link href="/hooks">Hooks</Link>
                </span>
                <span className='me-3'>
                    <Link href="/imagepage">Image</Link>
                </span>
                <span className='me-3'>
                    <Link href="/fontpage">Font</Link>
                </span>
                <span className='me-3'>
                    <Link href="/envdemo">Environment</Link>
                </span>
            </div>

            <main>
                {children}
            </main>
        </div>
    );
};

export default RootLayout;