import React from 'react';

import MovieList from '../components/movies/MovieList';

// render page for trending movies
class trending extends React.Component {
    render() {
        return (
            <div className="movies-list py-3">
                <div className="container">
                    <MovieList listType="trending" />
                </div>
            </div>
        );
    }
}
export default trending;