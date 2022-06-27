import Head from 'next/head';
import Link from 'next/link';

import { useEffect, useState } from 'react';

import { userService } from '../../services';

import * as helpers from '../../helpers';

export default function Employees() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        userService.getAll().then(x => setUsers(x));
    }, [])

    function deleteUser(id) {
        setUsers(users.map(x => {
            if (x.id === id) { x.isDeleting = true; }
            return x;
        }));
        userService.delete(id).then(() => {
            setUsers(users => users.filter(x => x.id !== id));
        });
    }

    return (
        <>
            <Head>
                <title>Users Page</title>
                <meta name="description" content="Created by Synechron Team" />
            </Head>

            <div className='text-center'>
                <h1 className="text-primary">Users Page</h1>

                <>
                    <Link href="/users/add">
                        <a className="btn btn-sm btn-success mb-2">
                            Add User
                        </a>
                    </Link>

                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {users && users.map(user =>
                                <tr key={user.id}>
                                    <td>{user.title} {user.firstName} {user.lastName}</td>
                                    <td>{user.email}</td>
                                    <td>{user.role}</td>
                                    <td>
                                        <Link href={`/users/edit/${user.id}`}>
                                            <a className="btn btn-sm btn-primary mr-1">
                                                Edit
                                            </a>
                                        </Link>
                                    </td>
                                    <td>
                                        <button onClick={() => deleteUser(user.id)} className="btn btn-sm btn-danger btn-delete-user" disabled={user.isDeleting}>
                                            {user.isDeleting
                                                ? <span className="spinner-border spinner-border-sm"></span>
                                                : <span>Delete</span>
                                            }
                                        </button>
                                    </td>
                                </tr>
                            )}
                            {!users &&
                                <tr>
                                    <td colSpan="4" className="text-center">
                                        <div className="spinner-border spinner-border-lg align-center"></div>
                                    </td>
                                </tr>
                            }
                            {users && !users.length &&
                                <tr>
                                    <td colSpan="4" className="text-center">
                                        <div className="p-2">No Users To Display</div>
                                    </td>
                                </tr>
                            }
                        </tbody>
                    </table>
                </>
            </div>
        </>
    )
}

export const getServerSideProps = helpers.withSessionSsr(async function ({ req, res }) {
    const user = req.session.user;

    if (user === undefined) {
        res.setHeader("location", "/login?returnURL=users");
        res.statusCode = 302;
        res.end();
        return { props: {} };
    } else {
        return {
            props: {
                    user: req.session.user
            }
        }
    }
})