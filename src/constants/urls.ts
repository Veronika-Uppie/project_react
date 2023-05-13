const baseURL = 'https://api.themoviedb.org/3/';

const movies = '/movie'

const urls = {
    movieAPI:{
        movies,
        byId:(movie_id:number):string=>`${movies}/${movie_id}`
    }
}

export {
    baseURL,
    urls
}