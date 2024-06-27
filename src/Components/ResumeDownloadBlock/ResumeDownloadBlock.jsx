import React from 'react'
import './resumeDownloadBlock.css'
import FileSaver from 'file-saver';

const ResumeDownloadBlock = () => {
  const handleDownload = () => {
    FileSaver.saveAs("Resume.pdf", "Resume.pdf");
  };
  
  return (
    <div className='resumeDownloadBlock'>
      <h1>Download my CV here 👇</h1>
      <button onClick={handleDownload}>
        Download PDF
      </button>
    </div>
  )
}

export default ResumeDownloadBlock