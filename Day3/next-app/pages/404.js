import React from 'react';

const Page404 = () => {
    return (
        <>
            <style jsx>{`
                @import url('https://fonts.googleapis.com/css?family=Audiowide&display=swap');
                
                div{
                    position: absolute;
                    top: 0%;
                    left: 0%;
                    height: 100%;
                    width: 100%;
                    margin: 0px;
                    background: radial-gradient(circle, #fff 0%, #12000b 100%);
                    overflow: hidden;
                }
                
                h1{
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    font-size: 60px;
                    text-transform: uppercase;
                    transform: translate(-50%, -50%);
                    display: block;
                    color: #12000a;
                    font-weight: 300;
                    font-family: Audiowide;
                    text-shadow: 0px 0px 4px #12000a;
                    animation: fadeInText 2s ease-in 3.5s forwards, hueRotate 2s ease-in-out 3s infinite;
                }
                
                @keyframes fadeInText{
                    1% {
                       color: #12000a;
                       text-shadow:0px 0px 4px #12000a;
                   }
                    70% {
                       color: #ff005d;
                       text-shadow:0px 0px 14px #ff005d;
                   }
                    100%{
                       color: #ff005d;
                       text-shadow:0px 0px 4px #ff005d;
                   }
                }
                
                @keyframes hueRotate{
                    0% {
                        filter: hue-rotate(0deg);
                   }
                    50% {
                        filter: hue-rotate(-120deg);
                   }
                    100% {
                        filter: hue-rotate(0deg);
                   }
                }               
            `}</style>
            <div>
                <h1>Page Not Found</h1>
            </div>
        </>
    );
};

export default Page404;