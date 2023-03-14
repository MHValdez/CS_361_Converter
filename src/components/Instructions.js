// Import Dependencies
import React from 'react';

function Instructions({ quantity }) {
    return (
        <>
            <h2>Convert Units of {quantity}</h2>
            <h4>
                1) Enter a magnitude (amount to convert from)<br></br>
                2) Select units to convert from<br></br>
                3) Select units to convert to<br></br>
                4) Click <strong>Convert!</strong> to view results in a closable overlay
            </h4>
            <h5>
            ** Results show significant figures only.<br></br>
            For more precision, add zeroes after the decimal.<br></br>
            Trailing zeroes for whole number inputs are considered significant.
            </h5>
        </>
    );
}

export default Instructions;