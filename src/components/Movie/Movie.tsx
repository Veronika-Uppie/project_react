import {FC} from "react";
import { Link } from 'react-router-dom';

import {IMovie} from "../../interfaces";
import {ApiKey} from "../../constants";
import './movie.css';
import posterImg from './img/poster_img.png'
import {Rating} from "../Rating";


interface IProps{
    movie: IMovie;
}

const Movie: FC<IProps> = ({movie}) => {

    const {id, title, poster_path} = movie;
    const poster_img = poster_path? `https://image.tmdb.org/t/p/w500${poster_path}` : posterImg;

    return (

        <div className={'movie_element'}>

        <Link to={`${id}${ApiKey}`} state={{ ...movie }}>
            <div className={'img-container'}>
                <img src={poster_img} alt={movie.title} />
                <Rating rating={movie.vote_average} />
                <h2>{title}</h2>
            </div>
        </Link>
        </div>

    );
};

export {
    Movie
}