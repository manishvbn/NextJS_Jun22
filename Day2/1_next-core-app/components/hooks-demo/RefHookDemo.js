import React, { useEffect, useRef, useState } from 'react';

function AccessElement() {
    const inputElement = useRef();
    // console.log(inputElement);

    const focusInput = () => {
        inputElement.current.focus();
    };

    return (
        <>
            <input type="text" ref={inputElement} />
            <button onClick={focusInput}>Focus Input</button>
        </>
    );
}

const Counter = () => {
    console.log("Counter Rendered.....");

    const [count, setCount] = useState(0);
    const [flag, setFlag] = useState(false);
    // const [clickCount, setclickCount] = useState(0);
    const clickCount = useRef(0);

    // useEffect(() => {
    //     setclickCount(clickCount + 1);
    //     if (clickCount > 9) {
    //         setFlag(true);
    //     }
    // }, [count]);

    // useEffect(() => {
    //     clickCount.current += 1;
    //     if (clickCount.current > 9) {
    //         setFlag(true);
    //     }
    //     console.log("useEffectExecuted: ", clickCount);
    // }, [count]);

    const isInitialMount = useRef(true);

    useEffect(() => {
        if (isInitialMount.current) {
            isInitialMount.current = false;
        } else {
            clickCount.current += 1;
            if (clickCount.current > 9) {
                setFlag(true);
            }
            console.log("useEffectExecuted: ", clickCount);
        }
    });

    return (
        <>
            <div className="text-center">
                <h1 className="text-info">Using Function Syntax</h1>
            </div>
            <div className="d-grid gap-2 mx-auto col-6">
                <div className="text-center">
                    <h2 className="text-info">{count}</h2>
                </div>
                <button className="btn btn-info" disabled={flag}
                    onClick={e => { setCount(count + 1); }}>
                    <span className='fs-4'>+</span>
                </button>
                <button className="btn btn-info" disabled={flag}
                    onClick={e => { setCount(count - 1); }}>
                    <span className='fs-4'>-</span>
                </button>
                <button className="btn btn-info" disabled={!flag}
                    style={!flag ? { cursor: 'not-allowed', pointerEvents: 'all' } : {}}
                    onClick={e => { reset(e); }}>
                    <span className='fs-4'>Reset</span>
                </button>
            </div>
        </>
    );

    function reset(e) {
        setCount(0);
        setFlag(false);
        // setclickCount(0);
        clickCount.current = 0;
    }
}

const RefHookDemo = () => {
    return (
        <div>
            <h2>Ref Hook Demo</h2>
            {/* <AccessElement /> */}
            <Counter />
        </div>
    );
};

export default RefHookDemo;