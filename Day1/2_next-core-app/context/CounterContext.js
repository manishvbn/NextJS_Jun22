import React, { useState } from 'react';

export const CounterContext = React.createContext();

const CounterContextProvider = (props) => {
    const [count, setCount] = useState(0);

    return (
        <CounterContext.Provider value={[count, setCount]}>
            {props.children}
        </CounterContext.Provider>
    );
}

export default CounterContextProvider;
