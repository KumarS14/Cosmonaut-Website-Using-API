import React from 'react'
import { Link } from 'react-router-dom'
import './Future.css'
import NavBar from '../components/NavBar'
/**
 * Showcases upcoming missions with images, text, and embedded video.
 */
const EXPEDITIONS = [
  {
    id: 'artemis',
    title: 'Artemis III — First Woman and Person of Colour on the Moon',
    img: 'https://images-assets.nasa.gov/image/jsc2022e046267/jsc2022e046267~orig.jpg',
    video: 'https://images-assets.nasa.gov/video/The First Element of the Spacecraft For Artemis III on This Week @NASA August 28, 2020/The First Element of the Spacecraft For Artemis III on This Week @NASA August 28, 2020~orig.mp4',
    blurb: 'Artemis III will return astronauts to the lunar south-pole region, test xEMU suits, deploy a mobile power station and prepare a habitat pad for month-long surface stays.'
  },
  {
    id: 'gateway',
    title: 'Lunar Gateway — The First Deep Space Station',
    img: 'https://images-assets.nasa.gov/image/jsc2024e041788 (1)/jsc2024e041788 (1)~orig.jpg',
    video: 'https://images-assets.nasa.gov/video/jsc2023m000213_Gateway_LunarSpaceStationTrailer_4K/jsc2023m000213_Gateway_LunarSpaceStationTrailer_4K~orig.mp4',
    blurb: 'Gateway is a modular outpost that will orbit in a near-rectilinear halo path, provide 60 kW of solar electric propulsion and stage landers reaching every latitude.'
  },
  {
    id: 'europa',
    title: 'Europa Clipper — Searching for Life Beneath the Ice',
    img: 'https://images-assets.nasa.gov/image/KSC-20241014-PH-SPX01_0002/KSC-20241014-PH-SPX01_0002~orig.jpg',
    video: 'https://images-assets.nasa.gov/video/JPL-20220811-Europa Clipper Arrives in its New Home-UHD_wMetadata/JPL-20220811-Europa Clipper Arrives in its New Home-UHD_wMetadata~orig.mp4',
    blurb: 'Europa Clipper will fly by Jupiter’s ocean moon nearly fifty times, using radar, thermal mapping and in-situ sampling to assess habitability.'
  }
]

export default function Future () {
  return (
    <section className='future' aria-label='Future expeditions'>

      <NavBar />

      <header className='banner'>
        <h1>Future Expeditions</h1>
        <hr />
        <h2>Upcoming Missions Pushing the Next Frontier</h2>
      </header>

      <div className='deck'>
        {EXPEDITIONS.map(({ id, title, img, video, blurb }) => (
          <article key={id} className='card'>
            <img src={img} alt={title} />
            <div className='card-body'>
              <h3>{title}</h3>
              <p>{blurb}</p>
              <div className='video'>
                <iframe
                  src={video}
                  title={title}
                  allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
                  allowFullScreen
                />
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
