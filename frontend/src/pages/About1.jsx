import React from 'react'
import '../styles/About1.css'

const About1 = () => {
  return (
    <div className='about1' id='about1'>
        <div className='about1-img'>
            <img src="assets/abt1img.png" alt="Photos of the cottage" />
        </div>
        <div className='about1-content'>
        <div className='about1-text'>
                <h1 className='about1-title'>MODERN <br/>YET AFFORDABLE</h1>
                <p className='about1-description'>
                Experience nature, from the comfort of our cottage. <br /><br />
                Kaduvakanam mountain view cottages offer you a unique holiday experience 
                with the best service & modern facilities, that too at affordable rates. 
                Vagamon has a number of unexplored and inspiring spots and it’s rated as 
                one of the top adventure tour destinations in Kerala. It offers you the 
                opportunity to walk deep into the soul of nature with lots of fun and curiosity.
                </p>
            </div>
        </div>
    </div>
  )
}

export default About1