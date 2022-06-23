import React, { useState } from 'react';
import Assignment from './assignment/Assignment';
import CallbackAndMemoHookDemo from './CallbackAndMemoHookDemo';
import ContextHookDemo from './ContextHookDemo';
import CustomHookDemo from './CustomHookDemo';
import EffectHookDemo from './EffectHookDemo';
import ReducerAndContextHookDemo from './ReducerAndContextHookDemo';
import ReducerHookDemo from './ReducerHookDemo';
import RefHookDemo from './RefHookDemo';
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
        case 7:
            return <RefHookDemo />;
        case 8:
            return <CustomHookDemo />;
        case 9:
            return <Assignment />;
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
                        <button className='btn btn-primary' onClick={e => { setHookNo(7) }}>Ref Hook</button>
                    </div>
                    <div className='col'>
                        <button className='btn btn-primary' onClick={e => { setHookNo(8) }}>Custom Hook</button>
                    </div>
                    <div className='col'>
                        <button className='btn btn-primary' onClick={e => { setHookNo(9) }}>Assignment</button>
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