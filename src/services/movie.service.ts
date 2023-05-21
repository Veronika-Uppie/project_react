import {axiosService} from "./axios.service";

import {IRes} from "../types";
import { urls} from "../constants";
import {IApiRes, IMovie} from "../interfaces";

const movieService = {
    getMovies: (page: number): IRes<IApiRes> => axiosService.get(`${urls.movie.popular}&page=${page}`),
    getGenres: (): IRes<IApiRes> => axiosService.get(`${urls.movie.genres}`),
    getTVGenres: (): IRes<IApiRes> => axiosService.get(`${urls.movie.genresTV}`),
    getById:(id:string):IRes<IMovie> => axiosService.get(urls.movie.byId(id))
}

export {
    movieService
}