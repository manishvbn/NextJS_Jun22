import React, { useState } from 'react';
import CallbackAndMemoHookDemo from './CallbackAndMemoHookDemo';
import ContextHookDemo from './ContextHookDemo';
import EffectHookDemo from './EffectHookDemo';
import ReducerAndContextHookDemo from './ReducerAndContextHookDemo';
import ReducerHookDemo from './ReducerHookDemo';
import StateHookDemo from './StateHookDemo';

function hRender(no) {
    switch (no) {
        case 1:
            return <StateHookDemo />;
        case 2:
            return <EffectHookDemo />;
        case 3:
            return <ContextHookDemo />;
        case 4:
            return <ReducerHookDemo />;
        case 5:
            return <ReducerAndContextHookDemo />;
        case 6:
            return <CallbackAndMemoHookDemo />;
        default:
            return null;
    }
}

const HooksRoot = () => {
    const [hookNo, setHookNo] = useState(1);

    return (
        <>
            <div className='card d-flex'>
                <div className='row mt-1 mb-1 align-items-center'>
                    <div className='col'>
                        <button className='btn btn-primary' onClick={e => { setHookNo(1) }}>State Hook</button>
                    </div>
                    <div className='col'>
                        <button className='btn btn-primary' onClick={e => { setHookNo(2) }}>Effect Hook</button>
                    </div>
                    <div className='col'>
                        <button className='btn btn-primary' onClick={e => { setHookNo(3) }}>Context Hook</button>
                    </div>
                    <div className='col'>
                        <button className='btn btn-primary' onClick={e => { setHookNo(4) }}>Reducer Hook</button>
                    </div>
                    <div className='col'>
                        <button className='btn btn-primary' onClick={e => { setHookNo(5) }}>Reducer And Context Hook</button>
                    </div>
                    <div className='col'>
                        <button className='btn btn-primary' onClick={e => { setHookNo(6) }}>Callback and Memo Hook</button>
                    </div>
                    <div className='col'>
                        <button className='btn btn-primary'>Ref Hook</button>
                    </div>
                    <div className='col'>
                        <button className='btn btn-primary'>Custom Hook</button>
                    </div>
                    <div className='col'>
                        <button className='btn btn-primary'>Assignment</button>
                    </div>
                </div>
            </div>

            <div className='mt-5'>
                {hRender(hookNo)}
            </div>
        </>
    );
};

export default HooksRoot;