import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Posts() {
    const router = useRouter();
    console.log(router);

    function handleClick() {
        router.push('?postid=10', undefined, { shallow: true });
    }

    useEffect(() => {
        console.log("Changed", router.query.postid);
    }, [router.query.postid])

    return (
        <>
            <Head>
                <title>Posts Page</title>
                <meta name="description" content="Created by Synechron Team" />
            </Head>

            <div className='text-center'>
                <h1 className="text-primary">Shallow Routing</h1>
                <button className='btn btn-warning' onClick={e => {
                    handleClick(e);
                }}>Click To Route</button>
            </div>
        </>
    )
}