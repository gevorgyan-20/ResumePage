import React from 'react'
import HtmlLogo from '../../Images/Skills/HTML logo.webp'
import JsLogo from '../../Images/Skills/JS logo.png'
import ReactLogo from '../../Images/Skills/React logo.png'
import ReduxLogo from '../../Images/Skills/Redux logo.png'
import SassLogo from '../../Images/Skills/Sass.jpg'
import CssLogo from '../../Images/Skills/css.png'
import TailwindLogo from '../../Images/Skills/tailwind logo.png'
import './mySkills.css'

const MySkills = () => {
  return (
    <div className='mySkills'>
        <div className='mySkillsContainer'>
            <p>My Skills  |    </p>
            <div id='html'>
                <img src={HtmlLogo}/>
            </div>
            <div id='css'>
                <img src={CssLogo}/>
            </div>
            <div id='js'>
                <img src={JsLogo}/>
            </div>
            <div id='react'>
                <img src={ReactLogo}/>
            </div>
            <div id='redux'>
                <img src={ReduxLogo}/>
            </div>
            <div id='sass'>
                <img src={SassLogo}/>
            </div>
            <div id='tailwind'>
                <img src={TailwindLogo}/>
            </div>
        </div>
    </div>
  )
}

export default MySkills