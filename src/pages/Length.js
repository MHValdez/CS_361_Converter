// Import Dependencies
import React from 'react';
// import { useState, useEffect } from 'react';
// import { useHistory } from 'react-router-dom';

// Import Components
import Converter from '../components/Converter';

function Length() {
    // DISPLAY
    return (
        <>
            <h2>Convert Units of Length</h2>
            <h4>
                1) Enter a magnitude (amount to convert from)<br></br>
                2) Select units to convert from<br></br>
                3) Select unit to convert to<br></br>
                4) Click <strong>Convert!</strong> to view results in a closable overlay
            </h4>
            <Converter quantity={'Length'} />
        </>
    );
}

export default Length;