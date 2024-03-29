// Import Dependencies
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

// Import Components
import '../App.css';

// Import Data
import { units } from "./Units";


function Navigation() {
  const quantities = Object.keys(units[0]);
  const paths = quantities.map((path) =>
        <option value={ path }>{ path }</option>
    );
  const first = quantities[0]
  const [selection, setSelection] = useState(first);

  return (
    <nav class='navbar'>
        <Link to='/'>Home</Link>
        <Link to='/info'>About Measurement Systems</Link>
        <label class='dropdown'>Select Quantity to Convert:
        <select class='dropdown' value={selection} onChange={(e) => setSelection(e.target.value)}>
            {paths}
        </select>
        <Link to={`/${selection}`}>GO!</Link>
        </label>
    </nav>
  );
}

export default Navigation;