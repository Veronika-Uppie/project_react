import React, {FC} from "react";
import {Outlet} from "react-router-dom";
import {Movies} from "../components/Movies/Movies";
import {Search} from "../components/Search/Search";
import './moviePage.css';


import { useState } from 'react';


const MoviePage: FC = () => {
    const [showMovies, setShowMovies] = useState(true);


    const handleSearchMovies = () => {
        setShowMovies(false);
    };

    return (
            <div className="main_info_container">
                <Outlet />
                <Search onSearch={handleSearchMovies} />
                {showMovies && <Movies />}
            </div>
    );
};

export { MoviePage };




// export {MoviePage}const MoviePage: FC = () => {
//     return (
//         <div>
//             <Header/>
//             <Outlet/>
//             <Search/>
//             <Movies/>
//             Movies Page
//         </div>
//     );
// };
//