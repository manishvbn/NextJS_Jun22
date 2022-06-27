import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import '../styles/globals.css'

import { useEffect } from 'react'
import RootLayout from '../components/layout/root-layout';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import('bootstrap');
  }, []);

  const getLayout = Component.getLayout || ((page) => <RootLayout> {page} </RootLayout>)

  return getLayout(<Component {...pageProps} />)
}

export default MyApp
