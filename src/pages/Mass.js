// Import Dependencies
import React from 'react';
// import { useState, useEffect } from 'react';
// import { useHistory } from 'react-router-dom';

// Import Components
import Converter from '../components/Converter';

function Mass() {
    // DISPLAY
    return (
        <>
            <h2>Convert Units of Mass</h2>
            <Converter quantity={'Mass'} />
        </>
    );
}

export default Mass;