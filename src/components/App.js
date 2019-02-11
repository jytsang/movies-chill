import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './template/Header';
import MovieList from './movies/MovieList';
import MovieShow from './movies/MovieShow';

const App = () => {
    return (
        <BrowserRouter>
            <div className="wrapper">
                <Header />

                <Route path="/" exact component={MovieList} />
                <Route path="/movies/:id" exact component={MovieShow} />
            </div>
        </BrowserRouter>
    );
};

export default App;