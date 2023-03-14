// Import Dependencies
import React from 'react';

// Import Components
import Instructions from '../components/Instructions';
import Converter from '../components/Converter';

function Mass() {
    // DISPLAY
    return (
        <>
            <Instructions quantity={'Mass'}/>
            <Converter quantity={'Mass'} />
        </>
    );
}

export default Mass;