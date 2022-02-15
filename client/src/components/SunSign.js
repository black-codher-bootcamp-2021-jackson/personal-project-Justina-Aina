import React, { useState, useEffect } from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { sunSignMessage } from "../services/journeyService";

const SunSign = (props) => {
    const [day, setDay] = useState(null);
    const [sign, setSign] = useState("");
    const [dailyHoroscope, setDailyHoroscope] = useState("");
    const { birthday } = props;
    const today = "today";
    
    const birthdayConvert = new Date(birthday);
    const birthdayDay = birthdayConvert.getDate(); 
    const birthdayMonth = new Intl.DateTimeFormat('en-GB', { month : 'long'}).format(birthdayConvert).toLowerCase();

    // console.log("this is dailyhoroscope" + dailyHoroscope);
    useEffect(() => {
        setDay(today);
        setSign(zodiacSign(birthdayDay, birthdayMonth));
        async function getDailyHoroscope() {
            if (sign !== "") {
                
                const response = await sunSignMessage(sign, today);
                
                setDailyHoroscope(response);  
            }
        }
        getDailyHoroscope();
    }, [today, sign, birthdayDay, birthdayMonth]);

    // console.log(new Intl.DateTimeFormat('en-GB', { month : 'long'}).format(birthdayConvert).toLowerCase());

    const zodiacSign = (birthdayDay, birthdayMonth) => {
        let sun_sign_name = "";

        if (birthdayMonth === "december"){

            if (birthdayDay < 22)
            sun_sign_name = "Sagittarius";
            else
            sun_sign_name ="capricorn";
        }
            
        else if (birthdayMonth === "january"){
            if (birthdayDay < 20)
            sun_sign_name = "Capricorn";
            else
            sun_sign_name = "aquarius";
        }
            
        else if (birthdayMonth === "february"){
            if (birthdayDay < 19)
            sun_sign_name = "Aquarius";
            else
            sun_sign_name = "pisces";
        }
            
        else if(birthdayMonth === "march"){
            if (birthdayDay < 21)
            sun_sign_name = "Pisces";
            else
            sun_sign_name = "aries";
        }
        else if (birthdayMonth === "april"){
            if (birthdayDay < 20)
            sun_sign_name = "Aries";
            else
            sun_sign_name = "taurus";
        }
            
        else if (birthdayMonth === "may"){
            if (birthdayDay < 21)
            sun_sign_name = "Taurus";
            else
            sun_sign_name = "gemini";
        }
            
        else if( birthdayMonth === "june"){
            if (birthdayDay < 21)
            sun_sign_name = "Gemini";
            else
            sun_sign_name = "cancer";
        }
            
        else if (birthdayMonth === "july"){
            if (birthdayDay < 23)
            sun_sign_name = "Cancer";
            else
            sun_sign_name = "leo";
        }
            
        else if( birthdayMonth === "august"){
            if (birthdayDay < 23)
            sun_sign_name = "Leo";
            else
            sun_sign_name = "virgo";
        }
            
        else if (birthdayMonth === "september"){
            if (birthdayDay < 23)
            sun_sign_name = "Virgo";
            else
            sun_sign_name = "libra";
        }
            
        else if (birthdayMonth === "october"){
            if (birthdayDay < 23)
            sun_sign_name = "Libra";
            else
            sun_sign_name = "scorpio";
        }
            
        else if (birthdayMonth === "november"){
            if (birthdayDay < 22)
            sun_sign_name = "scorpio";
            else
            sun_sign_name = "sagittarius";
        };

        return sun_sign_name;
    };

    return ( 
        <div className='sunsign-container'>
            <h4>Sun Sign</h4> 
            <h5>{sign}</h5>
            <p>{dailyHoroscope}</p>
        </div> 
    )
}
export default SunSign;