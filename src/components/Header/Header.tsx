import React, {FC} from "react";
import '@fortawesome/fontawesome-free/css/all.css';
import {useNavigate} from "react-router-dom";


import {UserInfo} from "../UserInfo";
import './Header.css'
import {Toggle} from "../Toggle";
import {GenreBadge} from "../GenreBadge";

interface IProps {
    isOn: boolean;
    setIsOn: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: FC<IProps> = ({isOn, setIsOn}) => {
    const navigate = useNavigate();

    const handleHomeClick = () => {
        navigate('movie');
    };

    return (
        <div className={isOn ? 'dark-theme' : 'light-theme'}>
            <div className="Header">
                <div className="logo">MovieLife</div>
                <UserInfo />
                <div className="menu">
                    <button className="button_home" onClick={() => handleHomeClick()}>Home</button>
                    <div className="button_mode_toggle">
                        <i className="fa-regular fa-sun"></i>
                        <Toggle isOn={isOn} handleChange={() => setIsOn(!isOn)}/>
                        <i className="fa-regular fa-moon"></i>
                    </div>
                    <GenreBadge/>
                </div>
            </div>
        </div>
    );
};

export {
    Header
};
