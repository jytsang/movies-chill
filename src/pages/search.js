import React from 'react';

import MovieList from '../components/movies/MovieList';

// render page for movie search results
class search extends React.Component {
    render() {
        const { keyword } = this.props.match.params;

        return (
            <div className="trending-movies py-3">
                <div className="container">
                    <h1>Search Results</h1>
                    <MovieList listType="search" args={{ key: 'keyword', data: keyword }} />
                </div>
            </div>
        );
    }
}

export default search;