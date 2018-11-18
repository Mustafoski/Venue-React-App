import React from 'react';

const Location = () => {
    return (
        <div className="location_wrapper">

            <iframe src = "https://www.google.com/maps/embed?pb="
            width = "100%"
            height = "500"
            frameborder = "0"
            allowfullscreen
            autofocus >
            </iframe>
            <div className="location_tag">
            
            </div>
        </div>
    );
};

export default Location;