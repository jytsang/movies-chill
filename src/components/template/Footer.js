import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <footer className="footer text-center py-3 bg-dark text-white">
            <div>
                <Link to="/" className="text-white">
                    Movies and Chill
                </Link> 
            </div>
            created by <a href="https://www.jytsang.com/" rel="noopener noreferrer" target="_blank" className="text-white">Jeun Yun Tsang</a> 
        </footer>
    );
};

export default Header;