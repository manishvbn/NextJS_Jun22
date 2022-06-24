import React from 'react';
import Head from 'next/head';
import Navigation from '../bs-nav/navigation';

const RootLayout = ({ children }) => {
    return (
        <div className="container">
            <Head>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navigation />

            <main role="main">
                {children}
            </main>
        </div>
    );
};

export default RootLayout;