import React from 'react';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchCast } from '../../actions';

class CastList extends React.Component {

    componentDidMount() {
        //fetch cast list from api
        this.props.fetchCast(this.props.castId);
    }

    //render list of cast
    renderList() {        
        //wait for list of results
        if (!this.props.cast) {
            //if no cast available return
            return <div>No cast available</div>;
        }
        
        //create and return html for each person in cast list
        return this.props.cast.map(person => {
            return (
                <div key={person.id} className="col-6 col-lg-2 my-3 d-flex align-items-stretch">
                    <Link to={`/person/${person.id}`} className="card shadow-sm w-100 overflow-hidden">
                        {person.profile_path &&
                            <img 
                                src={`${process.env.REACT_APP_IMAGE_BASE_URL}w400${person.profile_path}`}
                                alt={person.name}
                                className="img-fluid"
                            />
                        }
                        <h3 className="h6 text-center p-2 m-0">{person.name}</h3>
                    </Link>
                </div>
            );
        });
    }

    render() {
        return (
            <div className="cast-list">
                <div className="row">
                    {this.renderList()}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        //use lodash for ie support
        cast: _.values(state.cast)
    };
};

export default connect(mapStateToProps, { fetchCast })(CastList);