// Import Dependencies
import React from 'react';

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