import React from 'react';
import { connect } from 'react-redux';

import CastList from '../cast/CastList';

import { fetchMovie } from '../../actions';
import loader from '../../utilities/Loader';
import convertMinutes from '../../utilities/ConvertMinutes';

class MovieShow extends React.Component {

    componentDidMount() {
        //fetch movie details from api
        this.props.fetchMovie(this.props.match.params.id);
    }

    render() {
        //wait for movie details
        if (!this.props.movie) {
            return loader();
        }

        //assign movie props to variable
        const { ...movie } = this.props.movie;

        return (
            <div className="movie-show py-4">
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-12">
                            <div className="row no-gutters">
                                <div className="col-6 col-md-4">
                                    {movie.poster_path &&
                                        <img 
                                            src={`${process.env.REACT_APP_IMAGE_BASE_URL}w342${movie.poster_path}`}
                                            alt={movie.title}
                                            className="img-fluid"
                                        />
                                    }
                                </div>
                                <div className="col-12 col-md-8 p-0 p-md-3">
                                    <h1 className="mb-1">{movie.title}</h1>
                                    <p className="text-muted">Release Date: {movie.release_date}</p>
                                    <div className="mb-4">
                                        <span className="display-4 text-info">{movie.vote_average}</span>
                                        <span className="ml-2 text-muted">{movie.vote_count} votes</span>
                                    </div>
                                    <h2 className="h4">Overview</h2>
                                    <p>{movie.overview ? movie.overview : 'Overview not available'}</p>
                                    <div className="d-inline-block mr-4"><span className="font-weight-bold">Status:</span> {movie.status}</div>
                                    <div className="d-inline-block mr-4"><span className="font-weight-bold">Runtime:</span> {convertMinutes(movie.runtime)}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h2 className="h4">Cast</h2>
                    <CastList castId={this.props.match.params.id} />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        movie: state.movies[ownProps.match.params.id]
    };
};

export default connect(mapStateToProps, { fetchMovie })(MovieShow);