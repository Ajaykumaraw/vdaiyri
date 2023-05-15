import React from 'react';
import logo from '../../assest/logo.png';
import'./header.css';

const Header = () => {
  return (
    <div className='vd__logo'>
        <img src={logo} alt="App-logo" />
    </div>
  )
}

export default Header