import React, {FC, useState} from 'react';

import './search.css';
import {ApiKe} from "../../constants";
import axios from "axios";
import {baseURL} from "../../constants";
import {Movie} from "../Movie";
import {IApiRes, IMovie} from "../../interfaces";


interface SearchProps {
    onSearch: () => void;
}

const Search: FC<SearchProps> = ({ onSearch }) => {
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [movies, setMovies] = useState<IMovie[]>([]);

    const searchMovies = async () => {
        try {
            const response = await axios.get<IApiRes>(`${baseURL}/search/movie`, {
                params: {
                    api_key: ApiKe,
                    query: searchQuery,
                },
            });
            setMovies(response.data.results);
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
                {movies && movies.map(movie => <Movie key={movie.id} movie={movie}/>)}
            </div>
        </div>
    );
};


export {
    Search
}
