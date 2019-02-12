import React from 'react';
import { connect } from 'react-redux';

import MovieList from '../components/movies/MovieList';

// render page for movie search results
class search extends React.Component {
    render() {
        //get keyword parameter from URL
        const { keyword } = this.props.match.params;

        return (
            <div className="trending-movies py-3">
                <div className="container">
                    <h1>Search Results</h1>
                    <p>Showing movies for "{keyword}"</p>
                    <MovieList listType="search" args={{ key: 'keyword', data: keyword }} />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        keyword: state.keyword
    };
};

export default connect(mapStateToProps)(search);