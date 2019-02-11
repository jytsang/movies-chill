import React from 'react';
//convert minutes to hours and minutes text
const ConvertMinutes = (minutes = 0) => {
    const h = Math.floor( minutes / 60);
    const m = minutes % 60;

    return (
        <span>{h}h {m}m</span>
    );
};

export default ConvertMinutes;