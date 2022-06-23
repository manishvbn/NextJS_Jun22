import Head from 'next/head'

// console.log(process.env.GREETING);

export default function EnvDemo() {
    return (
        <>
            <Head>
                <title>Font Page</title>
                <meta name="description" content="Understanding Environment Variables" />
            </Head>

            <h1 className='text-primary text-center mt-5'>
                Understanding Environment Variables
            </h1>

            <div className='text-center mt-5'>
                <h2 className='text-danger'>Greeting: {process.env.GREETING}</h2>
                <h2 className='text-success'>Public Greeting: {process.env.NEXT_PUBLIC_GREETING}</h2>
                <h2 className='text-success'>Public Greeting: {process.env.NEXT_PUBLIC_GREETING_ONE}</h2>
            </div>
        </>
    )
}