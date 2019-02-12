import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';

import Header from './template/Header';
import trending from '../pages/trending';
import popular from '../pages/popular';
import MovieShow from './movies/MovieShow';
import PersonShow from './cast/PersonShow';

const App = () => {
    return (
        <BrowserRouter>
            <div className="wrapper">
                <Header />

                <Route path="/" exact render={() => <Redirect to='/trending'/>} />
                <Route path="/trending" exact component={trending} />
                <Route path="/popular" exact component={popular} />
                <Route path="/movies/:id" exact component={MovieShow} />
                <Route path="/person/:id" exact component={PersonShow} />
            </div>
        </BrowserRouter>
    );
};

export default App;