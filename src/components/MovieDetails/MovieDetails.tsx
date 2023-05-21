import {FC, useEffect, useState} from "react";

import {IMovie} from "../../interfaces";
import {Rating} from "../Rating";
import posterImg from "../Movie/img/poster_img.png";
import './movieDetails.css';
import {ApiKe} from "../../constants";
import axios from "axios";
import {movieService} from "../../services";


interface IProps{
    movie: IMovie;
}

const MovieDetails: FC<IProps> = ({ movie }) => {
    const { original_language, title, overview, poster_path, backdrop_path, release_date } = movie;
    const year = new Date(release_date).getFullYear();
    const poster_img = poster_path ? `https://image.tmdb.org/t/p/w500${poster_path || backdrop_path}` : posterImg;


    return (
        <div>
            <div className={'details_block'}>
                <div className={'poster_block'}>
                    <img src={poster_img} alt={movie.title} />
                </div>

                <div className={'movie_info_details'}>
                    <h2>{title} ({year})</h2>
                    <div className={'rating'}>
                        <Rating rating={movie.vote_average} />
                    </div>
                    <p>Original language: {original_language}</p>
                    <p>{overview}</p>
                </div>
            </div>
        </div>
    );
};


export {MovieDetails}