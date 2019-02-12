import React from 'react';

import MovieList from '../components/movies/MovieList';

// render page for trending movies
class trending extends React.Component {
    render() {
        return (
            <div className="trending-movies py-3">
                <div className="container">
                    <h1>Trending Movies</h1>
                    <MovieList listType="trending" />
                </div>
            </div>
        );
    }
}
export default trending;