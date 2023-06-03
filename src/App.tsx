import React from 'react';

import {Navigate, Route, Routes} from "react-router-dom";
import {MainLayout} from "./layouts";
import {MoviePage} from "./pages";
import {MovieDetailsPage} from "./pages";
import './App.css';
import {MovieGenresPage} from "./pages";



const App = () => {
    return (
            <Routes>
                <Route path={'/'} element={<MainLayout/>}>
                    <Route index element={<Navigate to={'movie'}/>}/>
                    <Route path={'movie'} element={<MoviePage/>}/>
                    <Route path={'movie/:id'} element={<MovieDetailsPage/>} />
                    <Route path={'movie-genres/:genreId'} element={<MovieGenresPage/>}/>
                    <Route path={'tv-genres/:genreId'} element={<MovieGenresPage/>}/>
                </Route>
            </Routes>
    );
}

export default App;






