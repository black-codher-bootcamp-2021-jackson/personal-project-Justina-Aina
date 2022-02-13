import React, { useState, useEffect } from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { sunSign } from "../services/journeyService";

const SunSign = (props) => {
    const [day, setDay] = useState(null);
    const [sign, setSign] = useState(null);
    const { birthday } = props;
    const today = new Date();

    useEffect(() => {
        setDay(today);
    }, [])
    

    // const findSunSign = (props) => {

    //     console.log(props);

    //     return (
    //         <div>
    //             <p>{`${props}`}</p>
    //         </div>
    //     )
    // };

    return ( 
        <div>{`${day}`}</div> 
    )
}
export default SunSign;