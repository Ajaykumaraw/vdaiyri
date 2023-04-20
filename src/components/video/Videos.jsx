import React from 'react';
import './video.css';
import Dimages from '../../data/data.js'

const Videos = () => {
  return (
    <div className='vd__video-section'>
      {
     console.log(Dimages.map((item) => <img  className='vd__thumbnail' src={item} alt="thumbnails" />))
      }
    </div>
  )
}

export default Videos