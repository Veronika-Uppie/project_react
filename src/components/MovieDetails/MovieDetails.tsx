import {FC, useEffect, useState} from "react";

import {IMovie} from "../../interfaces";
import {Rating} from "../Rating";
import posterImg from "../Movie/img/poster_img.png";
import './movieDetails.css';


interface IProps{
    movie: IMovie;
}

const MovieDetails: FC<IProps> = ({movie}) => {
    const {id, original_language, title, overview, poster_path, backdrop_path, release_date} = movie;
    const year = new Date(release_date).getFullYear();
    const poster_img = poster_path? `https://image.tmdb.org/t/p/w500${poster_path || backdrop_path}` : posterImg;
    const [video, setVideo] = useState('');

    useEffect(() => {
        const fetchVideo = async () => {
            try {
                const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=a2ae2296d501b6f7abcd7d559f57ccb8`);
                const data = await response.json();
                if (data.results.length > 0) {
                    setVideo(data.results[0].key);
                }
            } catch (error) {
                console.error('Error fetching video:', error);
            }
        };

        fetchVideo();
    }, [id]);


    return (
        <div>
            <div className={'details_block'}>

                <div className={'poster_block'}>
                    <img src={poster_img} alt={movie.title} />
                </div>

                <div className={'movie_info_details'}>
                    <h2>{title} ({year})</h2>
                    <div className={'rating'}>
                        <Rating rating={movie.vote_average}/>
                    </div>
                    <p>Original language: {original_language}</p>
                    <p>{overview}</p>
                </div>

            </div>
                {video && (
                    <div className={'video_block'}>
                        <iframe
                            width="700"
                            height="455"
                            src={`https://www.youtube.com/embed/${video}`}
                            title="Movie Trailer"
                            allowFullScreen
                        ></iframe>
                    </div>
                )}
        </div>
    );
};

export {MovieDetails}