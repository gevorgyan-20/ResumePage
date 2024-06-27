import React from 'react'
import './footer.css'
import GithubIcon from '../../Icons/GithubIcon'
import LinkedinIcon from '../../Icons/LinkedinIcon'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
        <div className='footerBlock'>
          <div className='copyright'>
            <h3>
              Copyright © 2024. All rights are reserved!
            </h3>
          </div>
          <div className='links'>
            <Link to='https://github.com/gevorgyan-20' target="_blank"><GithubIcon xxx={"white"}/></Link>
            <Link to='https://linkedin.com/in/hayk-gevorgyan-8456412a7' target="_blank"><LinkedinIcon yyy={"white"}/></Link>
          </div>
        </div>
    </footer>
  )
}

export default Footer