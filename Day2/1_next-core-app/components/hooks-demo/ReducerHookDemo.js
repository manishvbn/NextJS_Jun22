import React, { useReducer } from 'react';

const initialState = { count: 0 };

const counterReducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { count: state.count + (action.payload || 1) };
        case 'decrement':
            return { count: state.count - (action.payload || 1) };
        default:
            throw new Error('Invalid Action');
    }
}

const Counter = () => {
    const [state, dispatch] = useReducer(counterReducer, initialState);

    return (
        <>
            <div className="text-center">
                <h1 className="text-info">Counter Component</h1>
            </div>
            <div className="d-grid gap-2 mx-auto col-6">
                <div className="text-center">
                    <h2 className="text-info">{state.count}</h2>
                </div>
                <button className="btn btn-info"
                    onClick={e => {
                        dispatch({ type: 'increment', payload: 5 });
                    }}>
                    <span className='fs-4'>+</span>
                </button>
                <button className="btn btn-info"
                    onClick={e => {
                        dispatch({ type: 'decrement', payload: 5 })
                    }}>
                    <span className='fs-4'>-</span>
                </button>
            </div>
        </>
    );
}

// Will Have a different Copy of State
// If you want to share the same state, combine the with contextHook
const CounterSibling = () => {
    const [state] = useReducer(counterReducer, initialState);

    return (
        <div className="text-center">
            <h1 className="text-info">Counter Sibling Component</h1>
            <h2>Current Count is: {state.count}</h2>
        </div>
    );
}

const ReducerHookDemo = () => {
    return (
        <>
            <h2 className='text-info'>Reducer Hook</h2>
            <Counter />
            <hr />
            <CounterSibling />
        </>
    );
};

export default ReducerHookDemo;