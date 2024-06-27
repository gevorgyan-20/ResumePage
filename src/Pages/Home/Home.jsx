import React from 'react'
import HomeMainPart from '../../Components/HomeMainPart/HomeMainPart'
import './home.css'
import AboutMePart from '../../Components/AboutMePart/AboutMePart.jsx'
import MySkills from '../../Components/MySkills/MySkills.jsx'

const Home = () => {
  return (
    <div className='homePage'>
        <HomeMainPart/>
        <MySkills/>
        <AboutMePart/>
    </div>
  )
}

export default Home;