import React, {FC, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {IMovie} from "../interfaces";
import {MovieDetails} from "../components/MovieDetails";
import './moviePage.css';
import {movieService} from "../services";
import {useAppLocation} from "../hooks";

const MovieDetailsPage: FC = () => {
    const { id } = useParams<{ id: string }>();
    const {state} = useAppLocation<IMovie>();
    const [movie, setMovie] = useState<IMovie>();

    useEffect(() => {
        if (id) {
            if (!state) {
                movieService.getById(id)
                    .then(value => value.data)
                    .then(value => setMovie(value));
            } else {
                setMovie(state);
            }
        }
    }, [id, state]);


    return (
        <div className={'main_container'}>
            <div className={'main_info_container'}>
                {movie && <MovieDetails movie={movie}/>}
            </div>
        </div>
    );
};

export {MovieDetailsPage};