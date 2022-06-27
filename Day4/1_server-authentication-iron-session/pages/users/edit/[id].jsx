import Head from 'next/head';
import { AddEdit } from '../../../components/users/AddEdit';

import { userService } from '../../../services';

export default function EditUserPage(props) {
    return (
        <>
            <Head>
                <title>Edit User Page</title>
                <meta name="description" content="Created by Synechron Team" />
            </Head>

            <div className='text-center'>
                <AddEdit {...props} />
            </div>
        </>
    )
}

export async function getServerSideProps({ params }) {
    const user = await userService.getById(params.id);

    return {
        props: {
            user
        }
    }
}