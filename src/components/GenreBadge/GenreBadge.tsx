import React, {FC, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks";
import {genreActions, genreTVActions} from "../../redux";
import {useNavigate} from "react-router-dom";

import './style_genre_badge.css'

const GenreBadge: FC = () => {
    const {genres} = useAppSelector(state => state.genreReducer);
    const {genresTV} = useAppSelector(state => state.genreTVReducer);
    const dispatch = useAppDispatch();
    const dispatchTV = useAppDispatch();
    const navigate = useNavigate();
    const navigateTV = useNavigate();


    const handleGenreClick = (genreId: number) => {
        navigate(`/movie-genres/${genreId}`);
    };

    const handleGenreTVClick = (genreId: number) => {
        navigateTV(`/tv-genres/${genreId}`);
    };

    useEffect(()=>{
        dispatch(genreActions.getGenres())
    }, [dispatch])

    useEffect(()=>{
        dispatchTV(genreTVActions.getTVGenres())
    }, [dispatchTV])


    return (
        <div className={'genre_badge_container'}>

            <div>
                <div className={'list'}>
                    Movie List:
                </div>

                {genres.length > 0 && genres.map(genre => (
                    <a key={genre.id} href="#" onClick={() => handleGenreClick(genre.id)}>{genre.name}</a>
                ))}
            </div>

            <div>
                <div className={'list'}>
                    TV List:
                </div>

                {genresTV.length > 0 && genresTV.map(genreTV => (
                    <a key={genreTV.id} href="#" onClick={() => handleGenreTVClick(genreTV.id)}>{genreTV.name}</a>
                ))}
            </div>
        </div>
    );

};

export {
    GenreBadge
};