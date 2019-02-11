import React from 'react';
//render loading spinner when waiting for data
const Loader = () => {
    return (
        <div className="d-flex justify-content-center flex-fill">
            <div  className="spinner-border" role="status">
                <span  className="sr-only">Loading...</span>
            </div>
        </div>
    );
};

export default Loader;