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
            <Converter quantity={'Length'} />
        </>
    );
}

export default Length;