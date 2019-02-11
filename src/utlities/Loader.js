import React from 'react';
//render loading spinner when waiting for data
const Loader = () => {
    return (
        <div class="d-flex justify-content-center flex-fill">
            <div class="spinner-border" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        </div>
    );
};

export default Loader;