import React from 'react';
import { connect } from 'react-redux';

import { fetchMovies } from '../actions';
import MovieList from '../components/movies/MovieList';
import Paginate from '../components/template/Paginate';
import paginationClick from '../utilities/paginationClick';

// render page for movie search results
class search extends React.Component {
    //send paginationClick function as prop to pagination component when clicking page link
    handlePaginationClick = (data) => paginationClick('search', data, this.props.fetchMovies, this.props.keyword);

    render() {
        //get keyword parameter from URL
        const { keyword } = this.props.match.params;
        //set page number if in URL, otherwise set to page 1 for root
        const pageNumber = this.props.match.params.pageNumber ? this.props.match.params.pageNumber : 1;

        return (
            <div className="trending-movies py-3">
                <div className="container">
                    <h1>Search Results</h1>
                    <p>Showing movies for "{keyword}"</p>
                    <MovieList listType="search" args={{ keyword: keyword, pageNumber: pageNumber }} />
                    <div className="my-4">
                        <Paginate pageCount={this.props.movies.total_pages} onPageChange={this.handlePaginationClick} pageNumber={parseInt(pageNumber)} />
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        keyword: state.keyword,
        movies: state.movies
    };
};

export default connect(mapStateToProps, { fetchMovies })(search);