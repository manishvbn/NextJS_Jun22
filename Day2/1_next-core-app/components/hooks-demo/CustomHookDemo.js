import React, { useEffect, useState } from 'react';

function useLocalStorageState(key, initialData) {
    const [state, setState] = useState(() => {
        let value;

        try {
            value = JSON.parse(window.localStorage.getItem(key) || String(initialData))
        } catch (e) {
            value = initialData;
        }

        return value;
    });

    useEffect(() => {
        window.localStorage.setItem(key, state);
    }, [state]);

    return [state, setState];
}

const Counter = () => {
    const [count, setCount] = useLocalStorageState("ch-count", 0);

    return (
        <>
            <div className="text-center">
                <h1 className="text-info">Counter Component</h1>
            </div>
            <div className="d-grid gap-2 mx-auto col-6">
                <div className="text-center">
                    <h2 className="text-info">{count}</h2>
                </div>
                <button className="btn btn-info"
                    onClick={e => { setCount(count + 1); }}>
                    <span className='fs-4'>+</span>
                </button>
                <button className="btn btn-info"
                    onClick={e => { setCount(count - 1); }}>
                    <span className='fs-4'>-</span>
                </button>
            </div>
        </>
    );
}

const CustomHookDemo = () => {
    return (
        <>
            <h2>Custom Hook Demo</h2>
            <Counter />
        </>
    );
};

export default CustomHookDemo;