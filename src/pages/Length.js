// Import Dependencies
import React from 'react';

// Import Components
import Instructions from '../components/Instructions';
import Converter from '../components/Converter';

function Length() {
    // DISPLAY
    return (
        <>
            <Instructions quantity={'Length'}/>
            <Converter quantity={'Length'} />
        </>
    );
}

export default Length;