import {ApiKey} from "./ApiKey";

const baseURL = 'https://api.themoviedb.org/3';

const movie = '/movie'
const popular = '/movie/popular?api_key=a2ae2296d501b6f7abcd7d559f57ccb8'
const search = '/search/movie/popular?api_key=a2ae2296d501b6f7abcd7d559f57ccb8'
const genres = '/genre/movie/list?api_key=a2ae2296d501b6f7abcd7d559f57ccb8'
const genresTV  = '/genre/tv/list?api_key=a2ae2296d501b6f7abcd7d559f57ccb8'
const videos = '/videos?api_key=a2ae2296d501b6f7abcd7d559f57ccb8'

const urls = {
    movie:{
        movie: movie,
        popular: popular,
        byId:(id:string):string=>`${movie}/${id}${ApiKey}`,
        search: search,
        genres: genres,
        genresTV: genresTV,
        videos:(id:string): string=> `${movie}/${id}${videos}`

    }
}

export {
    baseURL,
    urls
}