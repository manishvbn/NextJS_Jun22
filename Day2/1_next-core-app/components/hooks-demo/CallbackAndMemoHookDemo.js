import React, { useCallback, useEffect, useMemo, useState } from 'react';

// It is a HOC, that prevents a component from re-rendering 
// if the props (or values within it) have not changed.
const Counter = React.memo(function Counter(props) {
    console.log('Counter rendered : ', props.children);
    return (
        <button onClick={props.handleClick}>
            {props.children}
        </button>
    );
});

// var data1 = { name: "Manish" };
// var data2 = { name: "Manish" };

// console.log(data1 === data2);

function MyComponent() {
    // const data = {
    //     name: "Manish"
    // };

    const [number, setNumber] = useState(0);

    // With useMemo(), we can return memoized values and avoid 
    // re-rendering if the dependencies to a function have not changed.
    const data = useMemo(() => {
        return {
            name: "Manish"
        }
    }, [number]);

    useEffect(() => {
        console.log('MyComponent Effect Hook Executed');
    }, [data]);
}

const CallbackAndMemoHookDemo = () => {
    const [incrementValue, setIncrementValue] = useState(0);
    const [mulValue, setMulValue] = useState(2);

    // const increment = () => {
    //     setIncrementValue(incrementValue + 1);
    // }

    // const multiply = () => {
    //     setMulValue(mulValue * 2);
    // }

    const increment = useCallback(
        () => setIncrementValue(incrementValue + 1), [incrementValue]
    )

    const multiply = useCallback(
        () => setMulValue(mulValue * 2), [mulValue]
    )

    return (
        <>
            <h2>Callback and Memo Hook Demo</h2>
            <Counter handleClick={increment} value={incrementValue}>
                Incrementer
            </Counter>
            <hr />
            <Counter handleClick={multiply} value={mulValue}>
                Multiplier
            </Counter>
            <hr />
            <MyComponent></MyComponent>
        </>
    );
};

export default CallbackAndMemoHookDemo;