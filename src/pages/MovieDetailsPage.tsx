import React, {FC} from 'react';
import {useAppLocation} from "../hooks/router.hooks";
import {IMovie} from "../interfaces/movie.interface";
import {MovieDetails} from "../components/MovieDetails/MovieDetails";

const MovieDetailsPage: FC = () => {
    const {state} = useAppLocation<IMovie>();
    return (
        <div>
            <MovieDetails movie={state}/>
        </div>
    );
};

export {MovieDetailsPage};