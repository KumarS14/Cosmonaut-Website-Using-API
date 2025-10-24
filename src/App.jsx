import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Future from './pages/Future'
import Astronauts from './pages/Astronauts'

/**
 * Root application component.
 * Sets up client-side routing for my SPA.
 */
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/future" element={<Future />} />
        <Route path="/astronauts" element={<Astronauts />} />
      </Routes>
    </BrowserRouter>
  )
}
