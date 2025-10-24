import React from 'react'
import NavBar from '../components/NavBar'
import './About.css'

/**
 * Describes project purpose, features, and how to contribute.
 */

export default function About() {
  return (
    <section className="about" aria-label="About">
      // fixed nav reused everywhere
      <NavBar />

      <header className="banner">
        <h1>About Us</h1>
        <hr />
        <h2>Illuminating the Human Side of Spaceflight</h2>
      </header>

      <article className="content">
        <h3>Our Mission</h3>
        <p>
          Cosmonauts of the Round Table delivers concise multimedia
          profiles of pioneering spacefarers. We aggregate mission
          patches, archival images, video explainers, and personal
          anecdotes to showcase their human stories.
        </p>

        <h3>What You’ll Discover</h3>
        <ul>
          <li>Interactive astronaut profiles</li>
          <li>Gallery of authentic mission patches and photos</li>
          <li>Embedded videos on past and future missions</li>
          <li>Details on Artemis, Gateway, and Europa Clipper</li>
        </ul>

        <h3>Why It Matters</h3>
        <p>
          Space exploration is a collective achievement.
          By highlighting individual journeys, we hope
          to inspire the next generation of scientists and engineers.
        </p>

        <h3>Get Involved</h3>
        <p>
          Have a patch scan or rare photo? Share it with us:
          <a href="mailto:hello@cosmonautsroundtable.org">
            hello@cosmonautsroundtable.org
          </a>
        </p>
        // contact form placeholder 
        <h3>Feedback</h3>
        <form className="contact-form" onSubmit={e => e.preventDefault()}>
          <label>
            <span>Email</span>
            <input type="email" placeholder="you@example.com" required />
          </label>
          <label>
            <span>Your Message</span>
            <textarea rows="4" placeholder="What do you think?" required />
          </label>
          <button type="submit">Submit</button>
        </form>
      </article>
    </section>
  )
}
