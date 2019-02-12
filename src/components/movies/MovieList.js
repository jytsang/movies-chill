import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchMovies } from '../../actions';
import loader from '../../utlities/Loader';

// render list of movies
class MovieList extends React.Component {
    componentDidMount() {
        //fetch movies from api
        this.props.fetchMovies(this.props.listType, this.props.personId);
    }

    //render list of movies
    renderList() {
        //wait for list of results
        if (!this.props.movies.results) {
            return loader();
        }
        
        //create and return html for each movie in list
        return this.props.movies.results.map(movie => {
            return (
                <div key={movie.id} className="col-12 col-md-6 col-lg-4 my-3 d-flex align-items-stretch">
                    <div className="card shadow-sm overflow-hidden w-100">
                        <div className="row no-gutters">
                            <div className="col-4">
                                <Link to={`/movies/${movie.id}`}>
                                    <img 
                                        src={`${process.env.REACT_APP_IMAGE_BASE_URL}w342${movie.poster_path}`}
                                        alt={movie.title}
                                        className="img-fluid"
                                    />
                                </Link>
                            </div>
                            <div className="col-8 p-3">
                                <h2 className="card-title h6 mb-2"><Link to={`/movies/${movie.id}`} className="text-reset text-decoration-none">{movie.title}</Link></h2>
                                <p className="card-subtitle small text-muted">{movie.release_date}</p>
                                <div>
                                    <span className="display-4 text-info">{movie.vote_average}</span>
                                    <span className="ml-2 text-muted">{movie.vote_count} votes</span>
                                </div>
                                <Link to={`/movies/${movie.id}`}>View details</Link>
                            </div>
                        </div>
                    </div>
                </div>
            );
        });
    }

    render() {
        return (
            <div className="movies-list py-3">
                <div className="row">
                    {this.renderList()}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        movies: state.movies
    };
};

export default connect(mapStateToProps, { fetchMovies })(MovieList);