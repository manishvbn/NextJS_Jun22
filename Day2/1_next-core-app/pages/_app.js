// npm i bootstrap bootstrap-icons

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import '../styles/globals.css'
import { useEffect } from 'react'

// will NOT work and will cause errors
// import 'bootstrap';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import('bootstrap');
  }, []);

  return <Component {...pageProps} />
}

export default MyApp
