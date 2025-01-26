import React from 'react'
import './project1.css'
import { Link } from 'react-router-dom'

const Project1 = ({title, link, image}) => {
  return (
    <div className='project'>
        <Link to={link} target="_blank">
            <img src={image}/>
        </Link>
        <div className='projectInfo'>
          <h2>{title}</h2>
        </div>
    </div>
  )
}

export default Project1