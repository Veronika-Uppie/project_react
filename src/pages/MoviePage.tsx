import {FC} from "react";
import {Outlet} from "react-router-dom";
import {Movies} from "../components/Movies/Movies";


const MoviePage: FC = () => {
    return (
        <div>
            <Outlet/>
            <Movies/>
        </div>
    );
};

export {MoviePage}