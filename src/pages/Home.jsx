import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import './Home.css';

// Import the images
import moonImage from '../assets/moon.svg';
import helmetImage from '../assets/helmet.svg';
import telescopeImage from '../assets/telescope.jpg';

export default function Home() {
  return (
    <section className="home" aria-label="Homepage">
      <NavBar />
      {/* ... header ... */}
      <div className="row">
        <div className="item">
          <div className="circle">
            <button aria-label="Explore astronauts">
              {/* Use the imported variable */}
              <img src={moonImage} alt="Moon" />
            </button>
          </div>
          <p>View our astronaut gallery</p>
        </div>
        <div className="item">
          <div className="circle">
            <Link to="/about" aria-label="About us"> {/* Changed to /about */}
              {/* Use the imported variable */}
              <img src={helmetImage} alt="Helmet" />
            </Link>
          </div>
          <p>Learn about this project</p>
        </div>
        <div className="item">
          <div className="circle">
            <Link to="/future" aria-label="Future missions"> {/* Changed to /future */}
              {/* Use the imported variable */}
              <img src={telescopeImage} alt="Telescope" />
            </Link>
          </div>
          <p>Discover upcoming expeditions</p>
        </div>
      </div>
    </section>
  );
}
