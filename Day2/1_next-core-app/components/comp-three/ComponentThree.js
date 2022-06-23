import React from 'react';

const ComponentThree = () => {
    return (
        <div className='para'>
            <style jsx>{`
                .para {
                    font-size: 20px;
                    background-color: yellowgreen;
                }
            `}</style>
            <style jsx global>{`
                body {
                    background: lightgray;
                }
            `}</style>
            <p>Hello from Component Three</p>
        </div>
    );
};

export default ComponentThree;