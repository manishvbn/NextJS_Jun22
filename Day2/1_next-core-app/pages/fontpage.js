import Head from 'next/head'

export default function FontPage() {
    return (
        <>
            <style jsx global>{`
                html,
                body {
                    padding: 0;
                    margin: 0;
                    font-family: Lobster;
                }

                * {
                    box-sizing: border-box
                }
            `}</style>

            <Head>
                <title>Font Page</title>
                <meta name="description" content="Understanding Font Loading in NextJS" />
            </Head>

            <h1 className='text-primary text-center mt-5'>
                Understanding Font Optimization
            </h1>

            <div className='text-center mt-5'>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                    ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
        </>
    )
}

