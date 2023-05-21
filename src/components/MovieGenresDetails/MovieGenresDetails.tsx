import React, {FC} from 'react';
import {Link} from "react-router-dom";

import {IMovie} from "../../interfaces";
import {Rating} from "../Rating";
import posterImg from "../Movie/img/poster_img.png";
import {Movies} from "../Movies";
import {ApiKey} from "../../constants";


interface IProps {
    movies: IMovie[];
}

const MovieGenresDetails: FC<IProps> = ({ movies }) => {

    return (
        <div>
            {movies.length > 0 ? movies.map((movie) => (
                <div key={movie.id}>
                    <div className={'details_block'}>
                            <div className={'poster_block'}>
                                <Link to={`/movie/${movie.id}?api_key=${ApiKey}`} state={{ ...movie }}>

                                <img src={movie.poster_path? `https://image.tmdb.org/t/p/w500${movie.backdrop_path || movie.poster_path}` : posterImg} alt={movie.title} />
                                </Link>
                            </div>
                        <div className={'movie_info_details'}>
                            <h2>{movie.title} ({new Date(movie.release_date).getFullYear()})</h2>
                            <div className={'rating'}>
                                <Rating rating={movie.vote_average}/>
                            </div>
                            <p>Original language: {movie.original_language}</p>
                            <p>{movie.overview}</p>
                        </div>
                    </div>

                </div>
            ))
                :
                <div>
                    <div className={'details_block'}>
                        <p className={'no_movies_message'}>
                            Currently, there are no movies available for the selected genre. Please choose another genre.
                        </p>
                    </div>
                    {<Movies />}

                </div>




            }



        </div>
    );
};

export {
    MovieGenresDetails
};