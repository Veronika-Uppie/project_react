import React, {FC} from 'react';

import { useParams } from 'react-router-dom';
import {useAppSelector} from "../hooks";
import {MovieGenresDetails} from "../components/MovieGenresDetails/MovieGenresDetails";



const MovieGenresPage: FC = () => {
    const { genreId } = useParams();

    const { movies } = useAppSelector((state) => state.movieReducer);
    const filteredMovies = movies.filter((movie) =>
        movie.genre_ids.includes(Number(genreId))
    );

    return (
        <div className={'main_container'}>
            <div className={'main_info_container'}>
                {movies && < MovieGenresDetails movies={filteredMovies}/>}
            </div>
        </div>
    );
};


export {
    MovieGenresPage
};

