import React from 'react'
import './projects.css'
import Project1 from '../../Components/Project1/Project1'
import Project3 from '../../Components/Project3/Project3'
import NewProjects from '../../Components/NewProjects/NewProjects'

const Projects = () => {
  return (
    <div className='projects'>
        <div className='projectsBlock'>
          {/* Will be created by canva soon */}
            <Project3/>
            <Project1/>
            <NewProjects/>
        </div>
    </div>
  )
}

export default Projects