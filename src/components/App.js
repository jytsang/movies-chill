import React from 'react';
import { Router, Route, Redirect, Switch } from 'react-router-dom';
import history from '../utilities/history';

import Header from './template/Header';
import Footer from './template/Footer';
import trending from '../pages/trending';
import popular from '../pages/popular';
import search from '../pages/search';
import MovieShow from './movies/MovieShow';
import PersonShow from './cast/PersonShow';
import ScrollToTop from '../utilities/ScrollToTop';

const App = () => {
    return (
        //use Router for history compatibility
        //use Switch and exact for routes to match correct URL once
        <Router history={history}>
            <ScrollToTop>
                <div className="wrapper">
                    <Header />
                    <Switch>
                        <Route path="/" exact render={() => <Redirect to='/trending'/>} />
                        <Route path="/trending" exact component={trending} />
                        <Route path="/trending/:pageNumber" exact component={trending} />
                        <Route path="/popular" exact component={popular} />
                        <Route path="/popular/:pageNumber" exact component={popular} />
                        <Route path="/search/:keyword" exact component={search} />
                        <Route path="/search/:keyword/:pageNumber" exact component={search} />
                        <Route path="/movies/:id" exact component={MovieShow} />
                        <Route path="/person/:id" exact component={PersonShow} />
                        <Redirect to="/" />
                    </Switch>
                    <Footer />
                </div>
            </ScrollToTop>
        </Router>
    );
};

export default App;