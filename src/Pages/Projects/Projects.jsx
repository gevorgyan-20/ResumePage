import React from 'react'
import Project1 from '../../Components/Project1/Project1'
import NewProjects from '../../Components/NewProjects/NewProjects'
import image1 from '../../Images/ProjectImages/project1.png'
import image2 from '../../Images/ProjectImages/project2.png'
import image3 from '../../Images/ProjectImages/project3.png'
import './projects.css'

const projectsData = [
  {
    id: 1,
    title: '"STAGE" Store',
    link: 'https://storee-project.vercel.app/',
    image: image1,
    tools: ['html', 'css', 'sass', 'react', 'js', 'redux']
  },
  {
    id: 2,
    title: '"Budss" Store',
    link: 'https://ggg-flax-nine.vercel.app/',
    image: image2,
    tools: ['html', 'css', 'sass', 'js']
  },
  {
    id: 3,
    title: '"Highland Tracks" Agency',
    link: 'https://travel-project-one-phi.vercel.app/',
    image: image3,
    tools: ['html', 'css', 'sass', 'js', 'react', 'redux']
  }
]

const Projects = () => {
  return (
    <div className='projects'>
        <div className='projectsBlock'>
            {projectsData.map((project) => <Project1 tools={project.tools} key={project.id} title={project.title} link={project.link} image={project.image}/> )}
            <NewProjects/>
        </div>
    </div>
  )
}

export default Projects;