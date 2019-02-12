import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import { setKeyword } from '../../actions/index';

// render search box for movie titles
class SearchForm extends React.Component {
    onSubmit = (formValues) => {
        if(formValues.keyword){
            this.props.setKeyword(formValues.keyword);
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="form-inline">
                    <Field name="keyword" component="input" type="text" className="form-control mr-2" placeholder="Search movie title..." />
                    <button type="submit" className="btn btn-primary mt-2 mt-md-0">Search Movies</button>
                </form>
            </div>
        );
    }
};

export default connect(null, { setKeyword })(reduxForm({ form: 'searchForm' })(SearchForm));