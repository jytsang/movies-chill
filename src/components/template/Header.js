import React from 'react';
import { Link } from 'react-router-dom';

import SearchForm from '../search/SearchForm';

const Header = () => {
    return (
        <header className="header bg-dark">
            <div className="container navbar">
                <Link to="/" className="navbar-brand text-white">
                    Movies and Chill
                </Link>
                <SearchForm />
            </div>
        </header>
    );
};

export default Header;