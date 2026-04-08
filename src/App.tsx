import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Add from './routes/Add';
import Games from './routes/Games';
import Home from './routes/Home';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Add />} />
        <Route path="/games" element={<Games />} />
      </Routes>
    </BrowserRouter>
  );
}