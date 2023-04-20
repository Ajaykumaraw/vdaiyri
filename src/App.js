import React from 'react';
import './App.css';
import {Header,Profile,Video,PostSection} from './components/index';

function App() {
  return (
    <div className="App">
        <div className='vd__header'><Header/></div>
        <div className='vd__App-section'>
          <div className='vd__profile-section'><Profile/></div>
          <div className='vd__videos-section'>
            <Video/>
            <Video/>
            <Video/>
            <Video/>
            <PostSection/>
          </div>

         </div> 

    </div>
  );
}

export default App;
