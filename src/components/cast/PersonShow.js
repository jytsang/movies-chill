import React from 'react';
import { connect } from 'react-redux';

import { fetchPerson } from '../../actions';
import loader from '../../utlities/Loader';

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
                            <img 
                                src={`${process.env.REACT_APP_IMAGE_BASE_URL}w342${person.profile_path}`}
                                alt={person.name}
                                className="img-fluid"
                            />
                        </div>
                        <div className="col-12 col-md-9">
                            <h1 className="mb-1">{person.name}</h1>
                            <div className="text-muted mb-3">
                                Born: {person.place_of_birth} on {person.birthday}
                            </div>
                            <h2 className="h4">Biography</h2>
                            <p>{person.biography}</p>
                        </div>
                    </div>
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