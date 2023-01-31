// Import Dependencies
import React from 'react';
// import { useState, useEffect } from 'react';
// import { useHistory } from 'react-router-dom';

function HomePage() {
    // DISPLAY
    return (
        <>
            <p>
                Welcome to this <strong>Unit Converter</strong>.
            </p>
            <p>
                To get started converting immediately, use the navigation bar above to select a <strong>Quantity to Convert</strong><br></br>
                (type of thing being measured) and click <strong> GO</strong> to go to the converter for that quantity.
            </p>
            <p>
                To learn more about <strong>Measurement Systems</strong> in use today, or select <strong>About Measurement Systems</strong>.<br></br>
                
            </p>
            <p>
                Select <strong>Home</strong> on any page to return this screen.<br></br>
                Use your browser's <strong> Back</strong> button to return to the previous page.
            </p>
        </>
    );
}

export default HomePage;