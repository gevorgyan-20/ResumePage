import React from 'react'
import './contactIconBoxes.css'
import { Link } from 'react-router-dom'
import MapIcon from './../../Icons/MapIcon';
import MailIcon from './../../Icons/MailIcon';

const ContactIconBoxes = () => {
  return (
    <div className='contactIconBoxes'>
      <h1>Don't be shy! Hit me up! 👇</h1>
      <div className='contactMainBoxes'>
        <div className='contactBox'>
          <span><MapIcon/></span>
          <div>
            <h3>Location</h3>
            <p>Yerevan, Armenia</p>
          </div>
        </div>
        <div className='contactBox'>
          <span><MailIcon/></span>
          <div>
            <h3>Email</h3>
            <Link to='mailto:gevorgyanh828@gmail.com'>gevorgyanh828@gmail.com</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactIconBoxes;