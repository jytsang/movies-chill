import React from 'react';
import { connect } from 'react-redux';

import { fetchMovies } from '../actions';
import MovieList from '../components/movies/MovieList';
import Paginate from '../components/template/Paginate';
import paginationClick from '../utilities/paginationClick';

// render page for popular movies
class popular extends React.Component {
    //send paginationClick function as prop to pagination component when clicking page link
    handlePaginationClick = (data) => paginationClick('popular', data, this.props.fetchMovies);

    render() {
        //set page number if in URL, otherwise set to page 1 for root
        const pageNumber = this.props.match.params.pageNumber ? this.props.match.params.pageNumber : 1;
        
        return (
            <div className="popular-movies py-3">
                <div className="container">
                    <h1>Popular Movies</h1>
                    <MovieList listType="popular" args={{ pageNumber }} />
                    <nav className="my-4 table-responsive">
                        <Paginate onPageChange={this.handlePaginationClick} pageNumber={parseInt(pageNumber)} />
                    </nav>
                </div>
            </div>
        );
    }
}
export default connect(null, { fetchMovies })(popular);