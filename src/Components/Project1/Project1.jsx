import React from 'react'
import { Link } from 'react-router-dom'
import html from '../../Images/Skills/HTML logo.webp'
import js from '../../Images/Skills/JS logo.png'
import react from '../../Images/Skills/React logo.png'
import redux from '../../Images/Skills/Redux logo.png'
import sass from '../../Images/Skills/Sass.jpg'
import css from '../../Images/Skills/css.png'
import './project1.css'

const toolsObj = {
  html: html,
  js: js,
  react: react,
  redux: redux,
  sass: sass, 
  css: css
}

const Project1 = ({title, link, image, tools}) => {
  return (
    <div className='project'>
        <Link to={link} target="_blank">
            <img src={image}/>
        </Link>
        <div className='projectInfo'>
          <h2>{title}</h2>
          <div className="tools">
            <h3>Tools: </h3>
            <div className='toolsPart'>
              {tools.map((tool) => <img src={toolsObj[tool]}/>)}
            </div>
          </div>
        </div>
    </div>
  )
}

export default Project1