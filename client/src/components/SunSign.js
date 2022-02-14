import React, { useState, useEffect } from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { sunSign } from "../services/journeyService";

const SunSign = (props) => {
    const [day, setDay] = useState(null);
    //const [sign, setSign] = useState(null);
    //const { birthday } = props;
    const today = new Date();

    useEffect(() => {
        setDay(today);
    }, []);

    const birthdayDay = 19;
    const birthdayMonth = "may";

    function zodiac_sign(birthdayDay, birthdayMonth){
       
        if (birthdayMonth == "december"){
            var sun_sign_name = "";

            if (birthdayDay < 22)
            sun_sign_name = "Sagittarius";
            else
            sun_sign_name ="capricorn";
        }
            
        else if (birthdayMonth == "january"){
            if (birthdayDay < 20)
            sun_sign_name = "Capricorn";
            else
            sun_sign_name = "aquarius";
        }
            
        else if (birthdayMonth == "february"){
            if (birthdayDay < 19)
            sun_sign_name = "Aquarius";
            else
            sun_sign_name = "pisces";
        }
            
        else if(birthdayMonth == "march"){
            if (birthdayDay < 21)
            sun_sign_name = "Pisces";
            else
            sun_sign_name = "aries";
        }
        else if (birthdayMonth == "april"){
            if (birthdayDay < 20)
            sun_sign_name = "Aries";
            else
            sun_sign_name = "taurus";
        }
            
        else if (birthdayMonth == "may"){
            if (birthdayDay < 21)
            sun_sign_name = "Taurus";
            else
            sun_sign_name = "gemini";
        }
            
        else if( birthdayMonth == "june"){
            if (birthdayDay < 21)
            sun_sign_name = "Gemini";
            else
            sun_sign_name = "cancer";
        }
            
        else if (birthdayMonth == "july"){
            if (birthdayDay < 23)
            sun_sign_name = "Cancer";
            else
            sun_sign_name = "leo";
        }
            
        else if( birthdayMonth == "august"){
            if (birthdayDay < 23)
            sun_sign_name = "Leo";
            else
            sun_sign_name = "virgo";
        }
            
        else if (birthdayMonth == "september"){
            if (birthdayDay < 23)
            sun_sign_name = "Virgo";
            else
            sun_sign_name = "libra";
        }
            
        else if (birthdayMonth == "october"){
            if (birthdayDay < 23)
            sun_sign_name = "Libra";
            else
            sun_sign_name = "scorpio";
        }
            
        else if (birthdayMonth == "november"){
            if (birthdayDay < 22)
            sun_sign_name = "scorpio";
            else
            sun_sign_name = "sagittarius";
        };

        return sun_sign_name;
    };
    
    console.log(zodiac_sign(birthdayDay, birthdayMonth));

    return ( 
        <div>
            <h4>Sun Sign</h4> 
            <h5>{`${zodiac_sign(birthdayDay, birthdayMonth)}`}</h5>
        </div> 
    )
}
export default SunSign;