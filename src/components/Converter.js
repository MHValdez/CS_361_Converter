// Import Dependencies
import React from 'react';
import { useState } from 'react';

// Import Components
import Dropdown from '../components/Dropdown';
import { units } from "../components/Units";

function sigFigs(magnitude) {
    //** This function considers trailing zeroes 
    //   of whole numbers to be significant */
    const input = magnitude.toString();
    const input_length = input.length;
    let sig_figs = input_length;
    let leading_whole = 0;          // Leading zeroes in whole part of number
    let leading_dec = 0;            // Leading zeroes in decimal part of number


    // Catch leading zeroes
    while (input[leading_whole] == '0') {
        leading_whole++;
    }

    if (leading_whole > 0 && input[leading_whole] == '.') {
        // Catch leading zeroes after decimal
        const start = leading_whole + 1;

        while (input[start + leading_dec] == '0') {
            leading_dec++;
        }
    }

    sig_figs = sig_figs - leading_whole - leading_dec;

    // Catch decimals
    if (input.includes('.')) {
        sig_figs--;
    }
 
    return [sig_figs, leading_whole];
}

function formatInput(magnitude, leading_zeroes) {
    if (magnitude == '0') {
        return magnitude;
    }
    let formatted = magnitude.slice(leading_zeroes);

    if (formatted[0] == '.') {
        formatted = '0' + formatted;
    }

    return formatted;
}

function formatOutput(magnitude, sig_figs) {
    if (magnitude == '0') {
        return magnitude;
    }

    const response = magnitude.toString();
    let decimal = response.indexOf('.');
    let formatted = response;
    let digits = sig_figs;

    if (formatted[0] == '0') {
        // Leading zeroes are not significant
        let i = 2;
        digits++;

        while (formatted[i] == '0') {
            digits++;
            i++;
        }
    }

    if (decimal >= digits) {
        // Show all digits of whole numbers regardless of signficance
        formatted = Math.round(magnitude)
    } else if (decimal > 0 && decimal < digits) {
        let round_factor = 1;

        for (let i = decimal; i < digits; i++) {
            round_factor = round_factor * 10;
        }

        // Round to significant digit of decimal part
        formatted = Math.round(magnitude * round_factor) / round_factor;
    }

    return formatted;
}

function formatFactor(factor) {
    // Truncate displayed factor by magnitude of digits
    const digits = 1000000000;
    return Math.round(factor * digits) / digits;
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
            console.log(`Response: {"magnitude"{${data.magnitude}}:,"factor":{${data.factor}}}`);

            const sig_input = formatInput(magnitude, leading_zeroes);
            const sig_output = formatOutput(data.magnitude, sig_figs);
            const sig_factor = formatFactor(data.factor);

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
                    class='field'
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
                <select class='dropdown' value={unit_from} onChange={(e) => setUnitFrom(e.target.value)}>
                    <Dropdown values={unit_select} />
                </select>
            </label>

            <label>Convert To:
                <select class='dropdown' value={unit_to} onChange={(e) => setUnitTo(e.target.value)}>
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
