import React, { useContext, useReducer } from 'react';

const CountContext = React.createContext();

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
    const countContext = useContext(CountContext);

    return (
        <>
            <div className="text-center">
                <h1 className="text-info">Counter Component</h1>
            </div>
            <div className="d-grid gap-2 mx-auto col-6">
                <div className="text-center">
                    <h2 className="text-info">{countContext.countState.count}</h2>
                </div>
                <button className="btn btn-info"
                    onClick={e => {
                        countContext.countDispatch({ type: 'increment', payload: 5 });
                    }}>
                    <span className='fs-4'>+</span>
                </button>
                <button className="btn btn-info"
                    onClick={e => {
                        countContext.countDispatch({ type: 'decrement', payload: 5 })
                    }}>
                    <span className='fs-4'>-</span>
                </button>
            </div>
        </>
    );
}

const CounterSibling = () => {
    const countContext = useContext(CountContext);

    return (
        <div className="text-center">
            <h1 className="text-info">Counter Sibling Component</h1>
            <h2>Current Count is: {countContext.countState.count}</h2>
        </div>
    );
}

const ReducerAndContextHookDemo = () => {
    const [count, dispatch] = useReducer(counterReducer, initialState);

    return (
        <CountContext.Provider
            value={{ countState: count, countDispatch: dispatch }}>
            <h2 className='text-info'>Reducer & Context Hook</h2>
            <Counter />
            <hr />
            <CounterSibling />
        </CountContext.Provider>
    );
};

export default ReducerAndContextHookDemo;