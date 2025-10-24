import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Astronauts.css';

/**
 * Data for astronaut gallery.
 * Local images live in public/assets/images.
 */
// src/pages/Astronauts.jsx
const ASTRONAUTS = [
    // Make shift data used for pages
    {
      id: 'armstrong',
      name: 'Neil A. Armstrong',
      thumb: '/assets/images/Neil_Armstrong.jpg',
      role:  'Commander, Apollo 11',
      bio:   `On 20 July 1969 Armstrong became the first person to walk on the
              Moon. An aeronautical engineer and naval aviator, he logged more
              than 2 000 flight hours before joining NASA’s astronaut corps.`
    },
    {
      id: 'tereshkova',
      name: 'Valentina V. Tereshkova',
      thumb:'assets/images/Valentina_Tereshkova.jpg',
      role:  'Pilot, Vostok 6',
      bio:   `Tereshkova orbited Earth 48 times in June 1963, becoming the first
              woman in space. A former textile-mill worker and skydiver, her call
              sign “Chaika” (seagull) became a symbol of Soviet space prowess.`
    },
    {
      id: 'collins',
      name: 'Michael Collins',
      thumb:'assets/images/Michael_Collins.jpg',
      role:  'Command Module Pilot, Apollo 11',
      bio:   `While Armstrong and Aldrin explored the lunar surface, Collins
              remained in lunar orbit aboard Columbia, ensuring a safe rendezvous.
              He later directed the Smithsonian’s National Air & Space Museum.`
    },
    {
      id: 'ride',
      name: 'Sally K. Ride',
      thumb:'assets/images/Sally_Ride.jpg',
      role:  'Mission Specialist, STS-7',
      bio:   `Ride became the first American woman in space on 18 June 1983.
              She flew twice on Challenger, then championed STEM education,
              co-founding Sally Ride Science to inspire young scientists.`
    },
    {
      id: 'whitson',
      name: 'Peggy A. Whitson',
      thumb:'assets/images/Peggy_Whitson.jpg',
      role:  'Commander, ISS (Exp. 51)',
      bio:   `With 675 days in orbit, Whitson holds the U.S. record for cumulative
              time in space. A biochemist by training, she conducted hundreds of
              micro-gravity experiments across three long-duration missions.`
    },
    {
      id: 'pesquet',
      name: 'Thomas Pesquet',
      thumb: 'assets/images/Thomas_Pesquet.jpg',
      role:  'Commander, ISS (Exp. 66)',
      bio:   `An aerospace engineer, airline pilot and ESA astronaut, Pesquet
              performed EVA upgrades to the ISS power grid and became widely known
              for breathtaking orbital photography shared via social media.`
    }
  ];
  
/**
 * Gallery of astronaut cards that open a modal on click.
 */
function Modal({ open, onClose, astronaut }) {
  if (!open) return null;
  return (
    <div className="modal-overlay" role="dialog" aria-modal="true">
      <div className="modal-window">
        <button className="close-btn" onClick={onClose} aria-label="Close">&times;</button>
        <img src={astronaut.thumb} alt={astronaut.name} />
        <h3>{astronaut.name}</h3>
        <p className="role">{astronaut.role}</p>
        <p>{astronaut.bio}</p>
      </div>
    </div>
  );
}

export default function Astronauts() {
  const [selected, setSelected] = useState(null);

  return (
    <section className="home" aria-label="Astronaut gallery">

      {/* fixed nav reused everywhere */}
      <nav className="top-nav">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/future">Future</Link>
        <Link to="/astronauts">Astronauts</Link>
      </nav>

      <header className="banner">
        <h1>Meet the Pioneers</h1>
        <hr />
        <h2>Human Stories Behind the Missions</h2>
      </header>

      <div className="grid">
        {ASTRONAUTS.map(a => (
          <button
            key={a.id}
            className="astro-card"
            onClick={() => setSelected(a)}
            aria-label={`More about ${a.name}`}
          >
            <img src={a.thumb} alt={a.name} />
            <h3>{a.name}</h3>
            <p className="role">{a.role}</p>
          </button>
        ))}
      </div>

      <Modal
        open={Boolean(selected)}
        astronaut={selected}
        onClose={() => setSelected(null)}
      />
    </section>
  );
}
