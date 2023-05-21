import React, {FC, useEffect, useState} from 'react';
import {IMovie} from "../interfaces";
import {MovieDetails} from "../components/MovieDetails/MovieDetails";
import './moviePage.css';
import {useParams} from "react-router-dom";
import {movieService} from "../services/movie.service";
import {useAppLocation} from "../hooks";

const MovieDetailsPage: FC = () => {
    const {id} = useParams();
    const {state} = useAppLocation<IMovie>();
    const [movie, setMovie] = useState<IMovie>(null);

    useEffect(() => {
      if (!state){
          movieService.getById(id).then(value => value.data).then(value => setMovie(value));
      }  else {
          setMovie(state)
      }
    }, [id, state])

    return (
        <div className={'main_container'}>
            <div className={'main_info_container'}>
                {movie && <MovieDetails movie={movie}/>}
            </div>
        </div>
    );
};

export {MovieDetailsPage};