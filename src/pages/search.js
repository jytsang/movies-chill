import React from 'react';
import { connect } from 'react-redux';

import MovieList from '../components/movies/MovieList';
import Paginate from '../components/template/Paginate';

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
                    <div className="my-4">
                        <Paginate />
                    </div>
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