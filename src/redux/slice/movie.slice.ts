import {IError, IMovie} from "../../interfaces";
import {createAsyncThunk, createSlice, isRejectedWithValue} from "@reduxjs/toolkit";
import {movieService} from "../../services";
import {AxiosError} from "axios";
import {IGenre} from "../../interfaces";


interface IState{
    movies:IMovie[],
    genres:IGenre[],
    genresTV:IGenre[],
    errors:IError,
    trigger:boolean
}

const initialState:IState={
    movies:[],
    genres:[],
    genresTV:[],
    errors:null,
    trigger:false
};

const getMovies = createAsyncThunk<IMovie[], number>(
    'movieSlice/getMovies',
    async (page,{rejectWithValue})=>{
        try {
            const {data} = await movieService.getMovies(page);
            return data.results
        }catch (e){
            const err = e as AxiosError
            return rejectWithValue(err.response?.data)
        }
    }
)

const getGenres = createAsyncThunk<IGenre[]>(
    'genreSlice/getGenres',
            async  (_, {rejectWithValue}) =>{
        try {
            const {data} = await movieService.getGenres();
            return data.genres
        }catch (e){
            const err = e as AxiosError
            return rejectWithValue(err.response?.data)
        }

            }
)
const getTVGenres = createAsyncThunk<IGenre[]>(
    'genreTVSlice/getTVGenres',
            async  (_, {rejectWithValue}) =>{
        try {
            const {data} = await movieService.getTVGenres();
            return data.genres
        }catch (e){
            const err = e as AxiosError
            return rejectWithValue(err.response?.data)
        }
            }
)


const slice = createSlice({
    name:'movieSlice',
    initialState,
    reducers:{},
    extraReducers:builder =>
        builder
            .addCase(getMovies.fulfilled, (state, action) => {
                state.movies = action.payload
            })
            .addMatcher(isRejectedWithValue(), (state, action) => {
                state.errors = action.payload
            })
});

const sliceGenre = createSlice({
    name:'genreSlice',
    initialState,
    reducers:{},
    extraReducers:builder =>
        builder
            .addCase(getGenres.fulfilled, (state, action) => {
                state.genres = action.payload
            })
            .addMatcher(isRejectedWithValue(), (state, action) => {
                state.errors = action.payload
            })
});

const sliceTVGenre = createSlice({
    name:'genreTVSlice',
    initialState,
    reducers:{},
    extraReducers:builder =>
        builder
            .addCase(getTVGenres.fulfilled, (state, action) => {
                state.genresTV = action.payload
            })
            .addMatcher(isRejectedWithValue(), (state, action) => {
                state.errors = action.payload
            })
});


const {actions, reducer:movieReducer} = slice;
const {actions: actionsGenre, reducer:genreReducer} = sliceGenre;
const {actions: actionsTVGenre, reducer:genreTVReducer} = sliceTVGenre;

const movieActions = {
    ...actions,
    getMovies
}
const genreActions = {
    ...actionsGenre,
    getGenres
}
const genreTVActions = {
    ...actionsTVGenre,
    getTVGenres
}


export {
    movieActions,
    genreActions,
    genreTVActions,
    movieReducer,
    genreReducer,
    genreTVReducer
}