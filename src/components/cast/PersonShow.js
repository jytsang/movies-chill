import React from 'react';
import { connect } from 'react-redux';

import { fetchPerson } from '../../actions';
import loader from '../../utilities/Loader';
import NoImage from '../template/NoImage';

import MovieList from '../movies/MovieList';

class PersonShow extends React.Component {

    componentDidMount() {
        //fetch person details from api
        this.props.fetchPerson(this.props.match.params.id);
    }

    render() {

        //wait for person details
        if (!this.props.person) {
            return loader();
        }

        //assign person props to variable
        const { ...person } = this.props.person;

        return (
            <div className="person-show py-4">
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-6 col-md-3">
                            {person.profile_path ? (
                                <img 
                                    src={`${process.env.REACT_APP_IMAGE_BASE_URL}w342${person.profile_path}`}
                                    alt={person.name}
                                    className="img-fluid"
                                />
                            ) : (
                                <NoImage />
                            )
                            }
                        </div>
                        <div className="col-12 col-md-9">
                            <h1 className="mb-1">{person.name}</h1>
                            <div className="text-muted mb-3">
                                Born in {person.place_of_birth} on {person.birthday}
                            </div>
                            <h2 className="h4">Biography</h2>
                            <p>{person.biography ? person.biography : 'Biography not available'}</p>
                        </div>
                    </div>
                    <h2 className="h4">Filmography</h2>
                    <MovieList listType="filmography" args={{ personId: person.id }} />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        person: state.cast[ownProps.match.params.id]
    };
};

export default connect(mapStateToProps, { fetchPerson })(PersonShow);