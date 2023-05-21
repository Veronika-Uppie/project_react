import React, {FC, useState} from 'react';

import './search.css';
import {ApiKe} from "../../constants";
import axios from "axios";
import {baseURL} from "../../constants";
import {Movie} from "../Movie";
import {IApiRes, IMovie} from "../../interfaces";
import {Link} from "react-router-dom";


interface SearchProps {
    onSearch: () => void;
}

const Search: FC<SearchProps> = ({ onSearch }) => {
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [movies, setMovies] = useState<IMovie[]>([]);
    const [searchError, setSearchError] = useState<boolean>(false);

    const searchMovies = async () => {
        try {
            const response = await axios.get<IApiRes>(`${baseURL}/search/movie`, {
                params: {
                    api_key: ApiKe,
                    query: searchQuery,
                },
            });
            const searchResults = response.data.results;
            if (searchResults.length === 0) {
                setSearchError(true);
            } else {
                setSearchError(false);
                setMovies(searchResults);
            }
            onSearch();
        } catch (error) {
            console.error('Error searching movies:', error);
        }
    };

    return (
        <div className={'search_block'}>
            <div className={'search_input_block'}>
                <input
                    type="text"
                    placeholder={'Search your interesting...'}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                            searchMovies();
                        }
                    }}
                />
            </div>

            <div className={'search_movie'}>
                {searchError ? (

                    <p>No movies found. Please try a different search query.</p>

                ) : (
                    movies.map(movie => <Movie key={movie.id} movie={movie} />)
                )}
            </div>
        </div>
    );
};



export {
    Search
}
