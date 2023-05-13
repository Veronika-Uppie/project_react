import {axiosService} from "./axios.service";
import {IRes} from "../types/res.type";
import {IMovie} from "../interfaces/movie.interface";
import {urls} from "../constants/urls";

const movieService = {
    getAll:():IRes<IMovie[]> => axiosService.get(urls.movieAPI.movies)
}