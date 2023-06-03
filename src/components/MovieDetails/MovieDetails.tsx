import {FC} from "react";

import {IMovie} from "../../interfaces";
import {Rating} from "../Rating";
import posterImg from "../Movie/img/poster_img.png";
import './movieDetails.css';
import {ApiKe, ApiKey, baseURL} from "../../constants";



interface IProps{
    movie: IMovie;
}

const MovieDetails: FC<IProps> = ({ movie }) => {
    const {id, original_language, title, overview, poster_path, backdrop_path, release_date } = movie;
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
            {/*<div className={'video_block'}>*/}
            {/*    <iframe src={`https://www.youtube.com/embed/${id}${ApiKe}`} title={title} />*/}

            {/*    <div>*/}
            {/*        <iframe src={`https://www.youtube.com/embed/${movie.id}${ApiKey}`} title={movie.title} />*/}
            {/*    </div>*/}

            {/*    {`${baseURL}/movie/${id}/videos${ApiKey}`}*/}
            {/*    /!*https://api.themoviedb.org/3/movie/550/videos?api_key=a2ae2296d501b6f7abcd7d559f57ccb8*!/*/}
            {/*    /!*https://api.themoviedb.org/3/movie/{movie_id}/videos*!/*/}
            {/*/!*    'https://api.themoviedb.org/3/genre/movie/list'*!/*/}
            {/*</div>*/}

        </div>
    );
};


export {MovieDetails}

