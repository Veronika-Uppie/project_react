import {FC} from "react";
import {IMovie} from "../../interfaces/movie.interface";

interface IProps{
    movie: IMovie;

}

const MovieDetails: FC<IProps> = ({movie}) => {
    const {id, original_title, original_language, title, adult, genre_ids, overview, popularity, poster_path, backdrop_path, video, vote_count, vote_average, release_date} = movie;
    return (
        <div>
            <div>id: {id}</div>
            <div>original_title: {original_title}</div>
            <div>original_language: {original_language}</div>
            <div>title: {title}</div>
            <div>adult: {adult}</div>
            <div>genre_ids: {genre_ids}</div>
            <div>overview: {overview}</div>
            <div>popularity: {popularity}</div>
            <div>poster_path: {poster_path}</div>
            <div>backdrop_path: {backdrop_path}</div>
            <div>video: {video}</div>
            <div>vote_count: {vote_count}</div>
            <div>vote_average: {vote_average}</div>
            <div>release_date: {release_date}</div>

        </div>
    );
};

export {MovieDetails}