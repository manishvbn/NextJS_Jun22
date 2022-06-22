import React from 'react';
import Link from 'next/link'

const RootLayout = ({ children }) => {
    return (
        <div className="container">
            <div className='text-center'>
                <Link href="/">Index</Link> {" "}
                <Link href="/hooks">Hooks</Link>
            </div>
            {children}
        </div>
    );
};

export default RootLayout;