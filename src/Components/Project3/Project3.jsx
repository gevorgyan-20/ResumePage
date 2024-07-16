import React from 'react'
import image from '../../Images/ProjectImages/project3.png'
import './project3.css'
import { Link } from 'react-router-dom'

const Project3 = () => {
  return (
    <div className='project'>
        <Link to='https://travel-project-one-phi.vercel.app/' target="_blank">
            <img src={image}/>
        </Link>
        <h2>Traveling Website</h2>
    </div>
  )
}

export default Project3