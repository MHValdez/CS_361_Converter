// Import Dependencies
import React from 'react';

// Import Components
import Instructions from '../components/Instructions';
import Converter from '../components/Converter';

function Speed() {
    // DISPLAY
    return (
        <>
            <Instructions quantity={'Speed'} />
            <Converter quantity={'Speed'} />
        </>
    );
}

export default Speed;