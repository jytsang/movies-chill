import React from 'react';

import MovieList from '../components/movies/MovieList';
import Paginate from '../components/template/Paginate';

// render page for trending movies
class trending extends React.Component {
    render() {
        return (
            <div className="trending-movies py-3">
                <div className="container">
                    <h1>Trending Movies</h1>
                    <MovieList listType="trending" />
                    <div className="my-4">
                        <Paginate />
                    </div>
                </div>
            </div>
        );
    }
}
export default trending;