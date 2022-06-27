import Head from 'next/head';

export default function About() {
  return (
    <>
      <Head>
        <title>About Page</title>
        <meta name="description" content="Created by Synechron Team" />
      </Head>

      <div className='text-center'>
        <h1 className="text-primary">About Page</h1>
        <h4 className="text-warning">This is a Simple, Next JS Application</h4>
      </div>
    </>
  )
}