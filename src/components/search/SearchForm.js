import React from 'react';
import { Field, reduxForm } from 'redux-form';

// render search box for movie titles
class SearchForm extends React.Component {
    onSubmit = (formValues) => {
        console.log('SearchForm Component Submit');
    }

    render() {
        return (
            <form onSubmit={this.onSubmit} className="form-inline">
                <Field name="keyword" component="input" type="text" className="form-control mr-2" placeholder="Search movie title..." />
                <button type="submit" className="btn btn-primary">Search Movies</button>
            </form>
        );
    }
};

export default reduxForm({
    form: 'searchForm'
})(SearchForm);