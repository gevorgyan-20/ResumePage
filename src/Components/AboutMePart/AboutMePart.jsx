import React from 'react'
import image1 from '../../Images/aboutMeImage.webp'
import './aboutMePart.css'

const AboutMePart = () => {
  return (
    <div className='aboutMePart'>
        <div className='stackContainer'>
            <div className='myImage'>
                <img src={image1} />
            </div>
            <div className='textBox'>
                <h2>About me</h2>
                <h1>Front-End Software Developer with React ⚛️</h1>
                <p>Hey, my name is Hayk, and I'm a Front-End Developer. My passion is to create and develop a clean UI/UX for my users.</p>
                <p>My main stack currently is React.js/Redux in combination with SASS/SCSS.</p>
            </div>
        </div>
    </div>
  )
}

export default AboutMePart;