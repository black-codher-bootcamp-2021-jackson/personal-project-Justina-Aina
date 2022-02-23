import React, { useState, useEffect } from 'react';
import styles from "../styles/SunSign.module.css"
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
    const birthdayMonth = new Intl.DateTimeFormat('en-GB', { month : 'long'}).format(birthdayConvert);

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

        if (birthdayMonth === "December"){

            if (birthdayDay < 22)
            sun_sign_name = "Sagittarius";
            else
            sun_sign_name ="Capricorn";
        }
            
        else if (birthdayMonth === "January"){
            if (birthdayDay < 20)
            sun_sign_name = "Capricorn";
            else
            sun_sign_name = "Aquarius";
        }
            
        else if (birthdayMonth === "February"){
            if (birthdayDay < 19)
            sun_sign_name = "Aquarius";
            else
            sun_sign_name = "Pisces";
        }
            
        else if(birthdayMonth === "March"){
            if (birthdayDay < 21)
            sun_sign_name = "Pisces";
            else
            sun_sign_name = "Aries";
        }
        else if (birthdayMonth === "April"){
            if (birthdayDay < 20)
            sun_sign_name = "Aries";
            else
            sun_sign_name = "Taurus";
        }
            
        else if (birthdayMonth === "May"){
            if (birthdayDay < 21)
            sun_sign_name = "Taurus";
            else
            sun_sign_name = "Gemini";
        }
            
        else if( birthdayMonth === "June"){
            if (birthdayDay < 21)
            sun_sign_name = "Gemini";
            else
            sun_sign_name = "Cancer";
        }
            
        else if (birthdayMonth === "July"){
            if (birthdayDay < 23)
            sun_sign_name = "Cancer";
            else
            sun_sign_name = "Leo";
        }
            
        else if( birthdayMonth === "August"){
            if (birthdayDay < 23)
            sun_sign_name = "Leo";
            else
            sun_sign_name = "Virgo";
        }
            
        else if (birthdayMonth === "September"){
            if (birthdayDay < 23)
            sun_sign_name = "Virgo";
            else
            sun_sign_name = "Libra";
        }
            
        else if (birthdayMonth === "October"){
            if (birthdayDay < 23)
            sun_sign_name = "Libra";
            else
            sun_sign_name = "Scorpio";
        }
            
        else if (birthdayMonth === "November"){
            if (birthdayDay < 22)
            sun_sign_name = "Scorpio";
            else
            sun_sign_name = "Sagittarius";
        };

        return sun_sign_name;
    };

    return ( 
        <div className={styles.sunsignContainer}>
            <h4 className={styles.userSectionTitle}>Sun Sign: {sign}</h4> 
            <p className={styles.appText}>Birthday: {birthdayDay} {birthdayMonth}</p>
            <p className={styles.appText}>{dailyHoroscope}</p>
        </div> 
    )
}
export default SunSign;