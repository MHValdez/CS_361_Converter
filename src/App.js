// Import Dependencies
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

// Import Components
import Navigation from './components/Navigation';
import './App.css';

// Import Pages
import HomePage from './pages/HomePage';
import Info from './pages/Info';
import Length from './pages/Length';
import Time from './pages/Time';
import Mass from './pages/Mass';
import Force from './pages/Force';
import Speed from './pages/Speed';

function App() {
  return (
    <>
      <Router>

          <header>
            <h1>Unit Converter</h1>
          </header>

          <Navigation />

          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/info" element={<Info />} />
              <Route path="/Length" element={<Length />} />
              <Route path="/Time" element={<Time />} />
              <Route path="/Mass" element={<Mass />} />
              <Route path="/Force" element={<Force />} />
              <Route path="/Speed" element={<Speed />} />
            </Routes>
            
          </main>

          <footer>
            <p><cite>&copy;{new Date().getFullYear()} Marcos Valdez</cite></p>
          </footer>

      </Router>
    </>
  );
}

export default App;
