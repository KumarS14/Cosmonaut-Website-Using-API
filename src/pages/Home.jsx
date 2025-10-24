import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from '../components/NavBar'
import './Home.css'

/**
 * Landing page with three calls-to-action:
 * List of cosmonauts, About, Future missions.
 */
export default function Home() {
  return (
    <section className="home" aria-label="Homepage">
      <NavBar />

      <header className="banner">
        <h1>The Cosmonauts Of The Round Table</h1>
        <hr />
        <h2>The Life And Legacy Of The World’s Finest</h2>
      </header>

      <div className="row">
        <div className="item">
          <div className="circle">
            <button aria-label="Explore astronauts">
              <img src="assets/moon.svg" alt="Moon" />
            </button>
          </div>
          <p>View our astronaut gallery</p>
        </div>

        <div className="item">
          <div className="circle">
            <Link to="about" aria-label="About us">
              <img src="assets/helmet.svg" alt="Helmet" />
            </Link>
          </div>
          <p>Learn about this project</p>
        </div>

        <div className="item">
          <div className="circle">
            <Link to="future" aria-label="Future missions">
              <img src="assets/telescope.jpg" alt="Telescope" />
            </Link>
          </div>
          <p>Discover upcoming expeditions</p>
        </div>
      </div>
    </section>
  )
}
