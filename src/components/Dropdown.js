// Import Dependencies
import React from 'react';
import { useState, useEffect } from 'react';

function Dropdown({ values }) {

    const items = values.map((value) =>
        <option value={ value }>{ value }</option>
    );

    return (
        <>
            {items}
        </>
    );
}

export default Dropdown;