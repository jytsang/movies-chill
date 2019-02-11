import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './template/Header';
import MovieList from './movies/MovieList';

const App = () => {
    return (
        <BrowserRouter>
            <div className="wrapper">
                <Header />

                {/* <Route path="/" exact component={MovieList} /> */}
            </div>
        </BrowserRouter>
    );
};

export default App;