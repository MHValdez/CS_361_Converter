// Import Dependencies
import React from 'react';
// import { useState, useEffect } from 'react';
// import { useHistory } from 'react-router-dom';

// Import Components
import Converter from '../components/Converter';

function Time() {
    // DISPLAY
    return (
        <>
            <h2>Convert Units of Time</h2>
            <Converter quantity={'Time'} />
        </>
    );
}

export default Time;