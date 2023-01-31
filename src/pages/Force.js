// Import Dependencies
import React from 'react';
// import { useState, useEffect } from 'react';
// import { useHistory } from 'react-router-dom';

// Import Components
import Converter from '../components/Converter';

function Force() {
    // DISPLAY
    return (
        <>
            <h2>Convert Units of Force</h2>
            <Converter quantity={'Force'} />
        </>
    );
}

export default Force;