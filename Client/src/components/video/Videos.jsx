import React from 'react';
import './video.css';
import Dimages from '../../data/data.js';

const Videos = () => {
  return (
    <div className='vd__video-section'>
      <video className='vd__video' id="videoPlayer" width="100%" controls muted="muted" autoPlay>
            <source src="/video" type="video/mp4" />
        </video>
    </div>
  )
}

export default Videos