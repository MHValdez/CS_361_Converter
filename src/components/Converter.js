// Import Dependencies
import React from 'react';
import { useState, useEffect } from 'react';

import Dropdown from '../components/Dropdown';

import { units } from "../components/Units";

function Converter({ quantity }) {
    const unit_dict = units[0][`${quantity}`]['units']
    const unit_select = Object.keys(unit_dict)
    const unit_type = units[0][`${quantity}`]['type']
    const default_unit = unit_select[0];
    const default_about = unit_dict[default_unit]['about_unit'];
    const about_units = [default_about, default_about];
    const abrv = [default_unit['abbreviation'], default_unit['abbreviation']]
    const sys = [default_unit['system'], default_unit['system']]
    const about_qty = units[0][`${quantity}`]['about_qty'];

    const [magnitude, setMagnitude] = useState('0');
    const [unit_from, setUnitFrom]  = useState(default_unit);
    const [unit_to, setUnitTo]      = useState(default_unit);

    const handleSubmit = (event) => {
        event.preventDefault();

        const input = {
            type: unit_type,
            quantity: quantity, 
            magnitude: magnitude,
            unit_from: unit_from,
            unit_to: unit_to
        };

        const request = JSON.stringify(input);

        console.log(`Request: ${request}`);
        
        fetch('http://localhost:8000/', {
            method: 'POST',
            headers: {'Content-Type': 'application/json',},
            body: request
        }).then((response) => response.json()
        ).then((data) => alert(
            `Result: ${magnitude} ${unit_from} = ${data.magnitude} ${unit_to}\n\nConversion Factor: ${data.factor}`
            ));
    }

    const showUnitInfo = (event) => {
        event.preventDefault();

        about_units[0] = unit_dict[unit_from]['about_unit'];
        about_units[1] = unit_dict[unit_to]['about_unit'];

        abrv[0] = unit_dict[unit_from]['abbreviation']
        abrv[1] = unit_dict[unit_to]['abbreviation']

        sys[0] = unit_dict[unit_from]['system']
        sys[1] = unit_dict[unit_to]['system']

        const str0 = `${about_units[0]}\nAbbreviation(s): ${abrv[0]}\nSystem(s): ${sys[0]}`
        const str1 = `${about_units[1]}\nAbbreviation(s): ${abrv[1]}\nSystem(s): ${sys[1]}`

        alert(`${str0}\n\n${str1}`);
    }

    const showQtyInfo = (event) => {
        event.preventDefault();

        alert(about_qty);
    }

    return (
        <form onSubmit={handleSubmit}>

            <label>Magnitude:
                <input
                    type='number'
                    min={0}
                    step='any'
                    name='magnitude'
                    placeholder='Enter a Magnitude'
                    value={magnitude}
                    onChange={(e) => setMagnitude(e.target.value)}
                />
            </label>

            <label>Convert From:
                <select value={unit_from} onChange={(e) => setUnitFrom(e.target.value)}>
                    <Dropdown values={unit_select} />
                </select>
            </label>

            <label>Convert To:
                <select value={unit_to} onChange={(e) => setUnitTo(e.target.value)}>
                    <Dropdown values={unit_select} />
                </select>
            </label>

            <input type="submit" value="Convert!"></input>

            <br></br><br></br>

            <p>
                The below informational buttons do not navigate away from this page.<br></br>
                A closable overlay will be displayed.
            </p>

            <input type="button" value="About Selected Units" onClick={showUnitInfo}></input>

            <input type="button" value={`About ${quantity}`} onClick={showQtyInfo}></input>
            
        </form>
    );
}

export default Converter;