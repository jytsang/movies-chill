import React from 'react';

import MovieList from '../components/movies/MovieList';
import Paginate from '../components/template/Paginate';

// render page for popular movies
class popular extends React.Component {
    render() {
        return (
            <div className="popular-movies py-3">
                <div className="container">
                    <h1>Popular Movies</h1>
                    <MovieList listType="popular" />
                    <div className="my-4">
                        <Paginate />
                    </div>
                </div>
            </div>
        );
    }
}
export default popular;