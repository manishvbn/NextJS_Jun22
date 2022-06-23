import React from 'react';

import styles from './ComponentOne.module.css';

const ComponentOne = () => {
    return (
        <>
            <h2 className='text-warning'>Hello from Component One</h2>
            <h2 className={styles.card}>From Component One</h2>
        </>
    );
};

export default ComponentOne;