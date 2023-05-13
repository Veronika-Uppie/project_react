import {FC} from "react";

import './Header.css'
import {IUseState} from "../../types/useState.type";
import {PageEnum} from "../../constants/page.enum";

interface IProps{
    setChoice:IUseState<PageEnum>
}

const Header: FC<IProps> = ({setChoice}) => {
    return (
        <div className={'Header'}>

            <div className={'logo'}>MOVIE</div>
            <button onClick={() => setChoice(PageEnum.HOME)}>Home</button>
            <button>Mode</button>
            <div className={'user_item'}></div>

        </div>
    );
};

export {Header}