import {FC, useEffect, useState} from "react";
import {IMovie} from "../../interfaces/movie.interface";
import {movieService} from "../../services/movie.service";
import {Movie} from "../Movie/Movie";

const Movies: FC = () => {
    const [movies, setMovies] = useState<IMovie[]>([]);

    useEffect( () => {
        movieService.getAll().then(value => value.data).then(value => setMovies(value));
    }, [])
    return (
        <div>
            {movies.map(movie=> <Movie key={movie.id} movie={movie}/>)}
        </div>
    );
};

export {Movies}