import React, { useEffect, useState } from 'react';

const EffectHookDemo = () => {
    const [flag, setFlag] = useState(false);
    const [person, setPerson] = useState({ fname: "Manish", lname: "Sharma" });

    // With second parameter as empty array, useEffect behaves like ComponentDidMount()
    // useEffect(() => {
    //     console.log("With second parameter, useEffect behaves like ComponentDidMount()");
    // }, []);

    // Without second parameter, useEffect behaves like ComponentDidMount() and ComponentDidUpdate()
    // useEffect(() => {
    //     console.log("Without second parameter, useEffect behaves like ComponentDidMount() and ComponentDidUpdate()");
    // });

    useEffect(() => {
        console.log("useEffect is called, whenever componentMounts and flag updates....");
    }, [flag]);

    return (
        <>
            <h2 className='text-info'>Effect Hook</h2>
            <h3 className="text-info">Firstname: {person.fname}</h3>
            <h3 className="text-info">Lastname: {person.lname}</h3>
            <button className='btn btn-info' onClick={(e) => { setFlag(!flag); }}>Change Flag</button>
            <button className='btn btn-info' onClick={(e) => { setPerson({ fname: "Abhijeet", lname: "Gole" }); }}>Change Person</button>
        </>
    );
};

export default EffectHookDemo;