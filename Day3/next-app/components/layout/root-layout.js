import React from 'react';
import Head from 'next/head';

const RootLayout = ({ children }) => {
    return (
        <div className="container">
            <Head>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main role="main">
                {children}
            </main>
        </div>
    );
};

export default RootLayout;