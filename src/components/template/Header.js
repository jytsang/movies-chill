import React from 'react';
import { Link } from 'react-router-dom';

import SearchForm from '../search/SearchForm';

const Header = () => {
    return (
        <header className="header bg-dark">
            <nav className="container navbar navbar-dark navbar-expand-md">
                <Link to="/" className="navbar-brand text-white">
                    Movies and Chill
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to="/trending" className="nav-link">Trending</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/popular" className="nav-link">Popular</Link>
                        </li>
                    </ul>
                    <SearchForm />
                </div>
            </nav>
        </header>
    );
};

export default Header;