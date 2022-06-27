import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import '../styles/globals.css'

import { useEffect, useState } from 'react'
import RootLayout from '../components/layout/root-layout';
import Head from 'next/head';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    import('bootstrap');
  }, []);

  function authGuard(url) {
    // redirect to login page if accessing a secured page and not logged in
    const publicPaths = ['/login'];
    const path = url.split('?')[0];
    if (!publicPaths.includes(path)) {
      setAuthorized(false);
      router.push({
        pathname: '/login',
        query: { returnUrl: router.asPath }
      });
    } else {
      setAuthorized(true);
    }
  }

  return (
    <>
      <Head>
        <title>JWT Authentication Example</title>
      </Head>

      <div className="bg-light">
        <div className="container pt-4 pb-4">
          {
            authorized && <Component {...pageProps} />
          }
        </div>
      </div>
    </>
  );
}

export default MyApp
