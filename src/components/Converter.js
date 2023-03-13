// Import Dependencies
import React from 'react';
import { useState, useEffect } from 'react';

import Dropdown from '../components/Dropdown';

import { units } from "../components/Units";

function sigFigs(magnitude) {
    const input_length = magnitude.length;
    let sig_figs = input_length;

    let leading_zeroes = false;
    let trailing_zeroes = false;
    let decimal = false;

    let num_leading = 0;
    let num_trailing = 0;

    let i = 0;

    if (magnitude[0] == '0') {
        leading_zeroes = true;
    } 

    while (leading_zeroes && i < input_length - 1) {
        // Count leading zeroes
        if (magnitude[i] == '0') {
            sig_figs--;
            num_leading++;
            i++;
        } else {
            leading_zeroes = false;
        }
    }

    while (i < input_length && decimal == false) {
        // Check for decimals
        if (magnitude[i] != '.') {
            sig_figs--;
            decimal = true;
        }
        i++;
    }

    i = input_length-1;

    if (decimal == false && magnitude[i] == '0') {
        trailing_zeroes = true;
    }

    while (trailing_zeroes && i > 0) {
        // Count trailing zeroes for magnitudes without a decimal part
        if (magnitude[i] == '0') {
            sig_figs--;
            num_trailing++;
            i--;
        } else {
            trailing_zeroes = false;
        }
    }

    return [sig_figs, num_leading, num_trailing];
}

function formatInput(magnitude, leading_zeroes) {
    if (magnitude == '0') {
        return magnitude
    }
    return magnitude.slice(leading_zeroes);
}

function formatOutput(magnitude, sig_figs) {
    if (magnitude == '0') {
        return magnitude
    }

    let formatted = magnitude.toString();
    const in_length = formatted.length;
    let out_length = sig_figs;
    let decimal = undefined;
    let i = 0;


    while (decimal == undefined && i < in_length) {
        if (formatted[i] == '.') {
            decimal = i;
        }
        i++;
    }

    if (decimal != undefined && decimal < out_length) {
        out_length++;
    } else if (decimal > out_length) {
        // Return all digits up to decimal
        return formatted.slice(0, decimal);
    }

    // Return significant figures beyond decimal
    return formatted.slice(0, out_length);
}

function Converter({ quantity }) {
    // Extract info on query quantity from Units library
    const unit_dict = units[0][`${quantity}`]['units'];
    const unit_type = units[0][`${quantity}`]['type'];
    const about_qty = units[0][`${quantity}`]['about_qty'];

    const unit_select = Object.keys(unit_dict);
    const default_unit = unit_select[0];

    const default_about = unit_dict[default_unit]['about_unit'];
    const about_units = [default_about, default_about];

    const abrv = [default_unit['abbreviation'], default_unit['abbreviation']];
    const sys = [default_unit['system'], default_unit['system']];
    
    const [magnitude, setMagnitude] = useState('0');
    const [unit_from, setUnitFrom]  = useState(default_unit);
    const [unit_to, setUnitTo]      = useState(default_unit);

    // Even handlers
    const handleSubmit = (event) => {
        // Query microservice and display results
        event.preventDefault();

        const input = {
            type: unit_type,
            quantity: quantity, 
            magnitude: magnitude,
            unit_from: unit_from,
            unit_to: unit_to
        };

        const sig_fig_data = sigFigs(magnitude);
        const sig_figs = sig_fig_data[0];
        const leading_zeroes = sig_fig_data[1];

        const request = JSON.stringify(input);

        console.log(`Request: ${request}`);
        
        fetch('http://localhost:5189/unitConversion', {
            method: 'POST',
            headers: {'Content-Type': 'application/json',},
            body: request
        }).then((response) => response.json()
        ).then((data) => {
            const sig_input = formatInput(magnitude, leading_zeroes);
            const sig_output = formatOutput(data.magnitude, sig_figs);
            const sig_factor = formatOutput(data.factor, sig_figs);

            const result = `Result: ${sig_input} ${unit_from} = ${sig_output} ${unit_to}`;
            const factor = `\n\nConversion Factor: ${sig_factor}`;

            alert(result + factor);
        });
    }

    const showUnitInfo = (event) => {
        // Display explanatory dialog
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
        // Display explanatory dialog
        event.preventDefault();

        alert(about_qty);
    }

    // Form body
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
