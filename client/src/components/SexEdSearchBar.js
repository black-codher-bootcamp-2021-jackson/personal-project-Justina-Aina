import React, { useState, useEffect } from 'react';
import { externalSearchFunction } from "../services/journeyService";

const SexEdSearchBar = () => {
    const [term, setTerm] = useState("");
    const [sexEdResult, setSexEdResult] = useState("");
    
    useEffect(() => {
        
        // THIS DOESN'T WORK DUE TO CORS ERROR
        setTerm("testing");
        async function getSexEdResult() {
            if (term !== "") {
                
                const response = await externalSearchFunction(term);
                
                setSexEdResult(response);  
            };
        };
        getSexEdResult();
    }, [term]);
    
    // console.log(sexEdResult);

    return (
        <div>
            <h4>School of Sexuality Education</h4>
            <p>Search Here</p>
            <p>{sexEdResult}</p>
        </div>
    )
};

export default SexEdSearchBar;