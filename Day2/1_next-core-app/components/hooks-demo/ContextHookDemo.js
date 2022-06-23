import React, { useContext } from 'react';
import CounterContextProvider, { CounterContext } from '../../context/CounterContext';

const Counter = () => {
    const [count, setCount] = useContext(CounterContext);

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

const CounterSibling = () => {
    const [count] = useContext(CounterContext);

    return (
        <div className="text-center">
            <h1 className="text-info">Counter Sibling Component</h1>
            <h2>Current Count is: {count}</h2>
        </div>
    );
}

const ContextHookDemo = () => {
    return (
        <CounterContextProvider>
            <h2>Context Hook Demo</h2>
            <Counter />
            <hr />
            <CounterSibling />
        </CounterContextProvider>
    );
};

export default ContextHookDemo;