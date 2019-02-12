import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import Header from './template/Header';
import trending from '../pages/trending';
import popular from '../pages/popular';
import search from '../pages/search';
import MovieShow from './movies/MovieShow';
import PersonShow from './cast/PersonShow';

const App = () => {
    return (
        <BrowserRouter>
            <div className="wrapper">
                <Header />
                <Switch>
                    <Route path="/" exact render={() => <Redirect to='/trending'/>} />
                    <Route path="/trending" exact component={trending} />
                    <Route path="/popular" exact component={popular} />
                    <Route path="/search/:keyword" exact component={search} />
                    <Route path="/movies/:id" exact component={MovieShow} />
                    <Route path="/person/:id" exact component={PersonShow} />
                    <Redirect to="/" />
                </Switch>
            </div>
        </BrowserRouter>
    );
};

export default App;