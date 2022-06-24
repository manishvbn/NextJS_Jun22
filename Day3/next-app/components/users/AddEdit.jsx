import { useRouter } from 'next/router';
import { useState } from 'react';

export function AddEdit(props) {
    // console.log(props);

    const user = props?.user;
    const isAddMode = !user;
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);

    return (
        <form>
            <h1>{isAddMode ? 'Add User' : 'Edit User'}</h1>
        </form>
    );
}