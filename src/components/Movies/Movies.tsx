import {FC, useEffect, useState} from "react";

import {Movie} from "../Movie";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {movieActions} from "../../redux";
import {movieService} from "../../services";


const Movies: FC = () => {
    const {movies} = useAppSelector(state => state.movieReducer);
    const dispatch = useAppDispatch();

    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);


    useEffect(()=>{
        dispatch(movieActions.getMovies(currentPage))
    }, [dispatch, currentPage])

    useEffect(() => {
        movieService.getMovies(currentPage)
            .then(response => response.data)
            .then(data => {
                setTotalPages(data.total_pages);
            });
    }, [currentPage]);


    return (

        <div>
            <div className={'top_movies'}>
                {movies.map(movie => <Movie key={movie.id} movie={movie} />)}
            </div>

            <div className="pagination">
                <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1} className={'button_prev'}>
                    Previous
                </button>
                <span>{currentPage} of {totalPages}</span>
                <button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === totalPages} className={'button_next'}>
                    Next
                </button>
            </div>
        </div>
    );
};


export {
    Movies
}
