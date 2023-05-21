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


// має бути інтерцептор
// обов`язкове використання redux-toolkit & TypeScript
// має бути вивід всіх фільмів з пагінацією
// мають бути зірочки рейтингу кожного фільму
// має бути захаркоджений юзер
// пошук фильма за назвою
// фільтрація фільмів по жанрам
// окремий роут з детальною інформацією про фільм (опис, постери, GenreBadge, можете додати трейлер)
// світчер теми




