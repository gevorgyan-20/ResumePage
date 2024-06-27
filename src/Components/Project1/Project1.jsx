import React from 'react'
import './project1.css'
import image from '../../Images/ProjectImages/project1.png'
import { Link } from 'react-router-dom'

const Project1 = () => {
  return (
    <div className='project'>
        <h2>Online Shoping Website</h2>
        <Link to='https://storee-project.vercel.app/' target="_blank">
            <img src={image}/>
        </Link>
    </div>
  )
}

export default Project1