// src/components/NavBar.jsx
import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavBar.css' // Local styles for this component

// Primary navigation with links to Home, About, Future, and Astronauts pages
export default function NavBar() {
  return (
    <nav className="top-nav">
      <NavLink to="/"         end>Home</NavLink>
      <NavLink to="/about">   About</NavLink>
      <NavLink to="/future">  Future</NavLink>
      <NavLink to="/astronauts">Astronauts</NavLink>
      
    </nav>
  )
}
