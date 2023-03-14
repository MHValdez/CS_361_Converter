// Import Dependencies
import React from 'react';

// Import Components
import Instructions from '../components/Instructions';
import Converter from '../components/Converter';

function Force() {
    // DISPLAY
    return (
        <>
            <Instructions quantity={'Force'}/>
            <Converter quantity={'Force'} />
        </>
    );
}

export default Force;