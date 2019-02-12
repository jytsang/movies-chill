import React from 'react';

import MovieList from '../components/movies/MovieList';

// render page for popular movies
class popular extends React.Component {
    render() {
        return (
            <div className="popular-movies py-3">
                <div className="container">
                    <h1>Popular Movies</h1>
                    <MovieList listType="popular" />
                </div>
            </div>
        );
    }
}
export default popular;