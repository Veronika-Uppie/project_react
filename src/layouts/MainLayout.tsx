import React, {FC, useState} from 'react';
import {Outlet} from "react-router-dom";
import './mainlayout.css';
import {Header} from "../components/Header/Header";

const MainLayout:FC = () => {
    const [isOn, setIsOn] = useState(false);


    return (

        <div className={isOn ? 'dark-theme' : 'light-theme'}>

        <div className={'main_load'} >
                <div className="header_container">
                    <Header isOn={isOn} setIsOn={setIsOn}/>
                </div>
                <Outlet/>
            </div>
</div>

    );
};

export {MainLayout};