import {ApiKe} from "./ApiKey";

const baseURL = 'https://api.themoviedb.org/3';

const movie = '/movie'
const popular = '/movie/popular'
const search = '/search/movie/popular'
const genres = '/genre/movie/list'
const genresTV  = '/genre/tv/list'



const urls = {
    movie:{
        movie: movie,
        popular: `${popular}?api_key=${ApiKe}`,
        byId:(id:string):string=>`${movie}/${id}?api_key=${ApiKe}`,
        search: `${search}?api_key=${ApiKe}`,
        genres: `${genres}?api_key=${ApiKe}`,
        genresTV: `${genresTV}?api_key=${ApiKe}`
    }
}

export {
    baseURL,
    urls
}