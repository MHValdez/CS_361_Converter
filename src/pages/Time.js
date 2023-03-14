// Import Dependencies
import React from 'react';

// Import Components
import Instructions from '../components/Instructions';
import Converter from '../components/Converter';

function Time() {
    // DISPLAY
    return (
        <>
            <Instructions quantity={'Time'}/>
            <Converter quantity={'Time'} />
        </>
    );
}

export default Time;