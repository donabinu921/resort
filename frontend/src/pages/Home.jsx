import React from 'react'
import '../styles/Home.css'
import Nav from '../components/Nav'

const Home = () => {
  return (
    <div className='home' id='home'>
        <Nav />
        <div className='home-title'>
            <h1>KADUVAKANAM COTTAGES</h1>
            <h1>VAGAMON</h1>
        </div>
        <p className='home-description'>
            Kaduvakanam Cottages Vagamon is a blend of heavenly calmness with modern facilities,
            a perfect spot to spend holidays with your beloved one’s. Located amidst evergreen 
            tea plantations with awesome mountain views, this is an ideal place to relax and loosen 
            up from the distractions of daily busy life.
        </p>
    </div>
  )
}

export default Home