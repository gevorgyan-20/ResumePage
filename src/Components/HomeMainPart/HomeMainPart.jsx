import React from 'react'
import './homeMainPart.css'
import { Link } from 'react-router-dom'
import GithubIcon from './../../Icons/GithubIcon';
import LinkedinIcon from './../../Icons/LinkedinIcon';

const HomeMainPart = () => {
  return (
    <div className='homeMainPart'>
        <div className='stackContainer'>
            <div className='textBox'>
                <h1>Front-End React Developer 💻</h1>
                <p>Hi, I'm Hayk Gevorgyan. A Junior Front-End React Developer from Yerevan, Armenia. 📍</p>
                <div>
                    <Link to='https://github.com/gevorgyan-20' target="_blank"><GithubIcon/></Link>
                    <Link to='https://linkedin.com/in/hayk-gevorgyan-8456412a7' target="_blank"><LinkedinIcon/></Link>
                </div>
            </div>
            <div className='myImage'></div>
        </div>
    </div>
  )
}

export default HomeMainPart
