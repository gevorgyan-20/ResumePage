import React from 'react'
import './project2.css'
import image from '../../Images/ProjectImages/project2.png'
import { Link } from 'react-router-dom'

const Project2 = () => {
  return (
    <div className='project'>
        <Link to='https://social-pagee.vercel.app/' target="_blank">
            <img src={image}/>
        </Link>
        <h2>Social Page Website</h2>
    </div>
  )
}

export default Project2