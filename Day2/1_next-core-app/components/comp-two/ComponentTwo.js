import React from 'react';

import styles from './ComponentTwo.module.css';

const ComponentTwo = () => {
    return (
        <>
            <h2 className='text-success'>Hello from Component Two</h2>
            <h2 className={styles.card}>From Component Two</h2>
        </>
    );
};

export default ComponentTwo;