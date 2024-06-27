import React from 'react'
import './contact.css'
import ContactIconBoxes from '../../Components/ContactIconBoxes/ContactIconBoxes';
import ResumeDownloadBlock from '../../Components/ResumeDownloadBlock/ResumeDownloadBlock';

const Contact = () => {
  return (
    <div className='contact'>
      <div className='contactBlock'>
        <ContactIconBoxes/>
        <ResumeDownloadBlock/>
      </div>
    </div>
  )
}

export default Contact;