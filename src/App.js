import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import DataComponent from './pages/DataComponent';

function App() {
  return (
    <div>
      
      <nav>
        <Link to="/">Beranda</Link> | <Link to="/gallery">Galeri</Link> | <Link to="/data">Data</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/data" element={<DataComponent />} />
      </Routes>
    </div>
  );
}

export default App;