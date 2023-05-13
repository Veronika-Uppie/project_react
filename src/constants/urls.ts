const baseURL = 'https://api.themoviedb.org/3/';

const movies = '/movie'

const urls = {
    movies:{
        movies,
        byId:(id:number):string=>`${movies}/${id}`
    }
}

export {
    baseURL,
    urls
}