import Head from 'next/head'
import Image from 'next/image'

import inkwater from '../public/ink-water.png';

const myLoader = ({ src, width, quality }) => {
    return `https://images.unsplash.com/${src}?w=${width}&q=${quality || 75}`
}

export default function ImagePage() {
    return (
        <>
            <Head>
                <title>Image Page</title>
                <meta name="description" content="Understanding Image Loading in NextJS" />
            </Head>

            <h1 className='text-primary text-center mt-5'>
                Understanding NextJS Image
            </h1>

            <div className='text-center mt-5'>
                {/* <img src={inkwater.src} alt="Picture of the Ink in Water"/> */}

                {/* <Image src={inkwater} alt="Picture of the Ink in Water" width={1000} height={500} /> */}

                {/* <Image src={inkwater} alt="Picture of the Ink in Water" layout={'fill'} /> */}

                {/* <Image
                    loader={myLoader}
                    src="photo-1558494949-ef010cbdcc31"
                    alt="Picture of the Server"
                    width={1934}
                    height={1000} /> */}

                <Image
                    loader={myLoader}
                    src="photo-1558494949-ef010cbdcc31"
                    alt="Picture of the Server"
                    // layout={'fill'}
                    width={1934}
                    height={1000}
                    priority={false}
                    placeholder="blur"
                    blurDataURL={str}
                />
            </div>
        </>
    )
}

const str= "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8DwHwAFBQIAX8jx0gAAAABJRU5ErkJggg==";

