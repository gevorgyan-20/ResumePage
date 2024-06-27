import React from 'react'
import './projects.css'
import Project1 from '../../Components/Project1/Project1'
import Project2 from '../../Components/Project2/Project2'
import NewProjects from '../../Components/NewProjects/NewProjects'

const Projects = () => {
  return (
    <div className='projects'>
        <div className='projectsBlock'>
            <h2>These websites are made using JSON-SERVER. That's why there are request errors.</h2>
            <Project1/>
            <Project2/>
            <NewProjects/>
        </div>
    </div>
  )
}

export default Projects