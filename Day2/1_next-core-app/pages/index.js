import Head from 'next/head';
import ComponentOne from '../components/comp-one/ComponentOne';
import ComponentThree from '../components/comp-three/ComponentThree';
import ComponentTwo from '../components/comp-two/ComponentTwo';

export default function Home() {
  return (
    <>
      <Head>
        <title>Index Page</title>
        <meta name="description" content="Created by Synechron Team" />
      </Head>

      <h1 className='text-primary text-center mt-5'>
        Welcome to Next.js!
      </h1>

      <div className='text-center mt-5'>
        <ComponentOne />
        <ComponentTwo />
        <hr />
        <ComponentThree />
      </div>
    </>
  )
}
