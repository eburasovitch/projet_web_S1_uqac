import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import SquatPage from './components/SquatPage';
import BenchPage from './components/BenchPage';
import DeadliftPage from './components/DeadliftPage';
import Navbar from './components/Navbar';
import MuscleMapPage from './components/MuscleMap'; // Nouvelle importation

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/squat" element={<SquatPage />} />
        <Route path="/bench" element={<BenchPage />} />
        <Route path="/deadlift" element={<DeadliftPage />} />
        <Route path="/muscle-map" element={<MuscleMapPage />} /> {/* Nouvelle route */}
      </Routes>
    </Router>
  );
}

export default App;
