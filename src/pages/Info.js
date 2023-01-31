// Import Dependencies
import React from 'react';
// import { useState, useEffect } from 'react';
// import { useHistory } from 'react-router-dom';

//import systemInfo from '../components/Systems';

function Info() {
    // DISPLAY
    return (
        <>

        <h2>About Measurement Systems</h2>

        <h3>International System of Units (SI)</h3>
        <p>
        The most highly standardized and widely used system of units. Derived from the traditional metric system.
        </p>

        <h3>Imperial System of Units (BI)</h3>
        <p>
            Used alongside SI in the UK and Commonwealth nations. Derived traditional Eglish units. Large overlap with USC.
        </p>

        <h3>United States Customary Units (USC)</h3>
        <p>
            Used alongside SI in the US. Derived traditional Eglish units. Large overlap with BI.
        </p>

        <h3>Other Systems</h3>
        <p>
        There are many non-standard units in traditional English and metric systems as well as other archaic systems<br></br>
        that are not supported by this converter. Some units that are not part of the major systems are in common use and<br></br>
        are supported. Their systems are listed as NA.
        </p>

        </>
    );
}

export default Info;