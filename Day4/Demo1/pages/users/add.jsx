import Head from 'next/head';
import { AddEdit } from '../../components/users/AddEdit';

export default function AddUserPage() {
    return (
        <>
            <Head>
                <title>Add User Page</title>
                <meta name="description" content="Created by Synechron Team" />
            </Head>

            <div className='text-center'>
                <AddEdit />
            </div>
        </>
    )
}