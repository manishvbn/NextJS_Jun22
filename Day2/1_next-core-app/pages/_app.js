// // npm i bootstrap bootstrap-icons

// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-icons/font/bootstrap-icons.css'
// import '../styles/globals.css'
// import { useEffect } from 'react'

// // will NOT work and will cause errors
// // import 'bootstrap';

// function MyApp({ Component, pageProps }) {
//   useEffect(() => {
//     import('bootstrap');
//   }, []);

//   return <Component {...pageProps} />
// }

// export default MyApp

// npm i bootstrap bootstrap-icons

// // -------------------------- Single Shared Layout
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-icons/font/bootstrap-icons.css'
// import '../styles/globals.css'

// import { useEffect } from 'react'
// import RootLayout from '../components/layouts/RootLayout';

// function MyApp({ Component, pageProps }) {
//   useEffect(() => {
//     import('bootstrap');
//   }, []);

//   return (
//     <RootLayout>
//       <Component {...pageProps} />
//     </RootLayout>
//   );
// }

// export default MyApp

// -------------------------- Per Page Layout
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import '../styles/globals.css'

import { useEffect } from 'react'
import RootLayout from '../components/layouts/RootLayout';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import('bootstrap');
  }, []);

  const getLayout = Component.getLayout || ((page) => <RootLayout> {page} </RootLayout>)

  return getLayout(<Component {...pageProps} />)
}

export default MyApp
