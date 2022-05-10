import {Header} from "./modules/header/Header";
import {Navbar} from "./modules/navbar/navbar";
import {Main} from "./modules/main/main";
import React ,{useEffect, useState} from "react";

let startDate = new Date()

export const SecondsContext = React.createContext(null);

export const App = () => {
    const [seconds, setSeconds] = useState(0);
    useEffect(() => {
        const timer = setInterval(() => {
            setSeconds(Math.round((Date.now() - startDate) / 1000));
        }, 1000);
        return () => clearInterval(timer);
    });

    return (
    <div className='wrapper d-flex flex-column' style={{minHeight:'100vh', fontFamily: 'Roboto, sans-serif', background: '#E5E5E5'}}>
        <Header />
        <Navbar />
        <SecondsContext.Provider value={seconds}>
            <Main />
        </SecondsContext.Provider>
    </div>
)}
