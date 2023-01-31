// Import Dependencies
import React from 'react';
// import { useState, useEffect } from 'react';
// import { useHistory } from 'react-router-dom';

// Import Components
import Converter from '../components/Converter';

function Speed() {
    // DISPLAY
    return (
        <>
            <h2>Convert Units of Speed</h2>
            <Converter quantity={'Speed'} />
        </>
    );
}

export default Speed;