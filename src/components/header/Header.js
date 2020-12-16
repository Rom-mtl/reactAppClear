import React from 'react';
import './header.css';
import { slide as Menu } from 'react-burger-menu';

function Header() {
  const showSettings = (e) => {
    e.preventDefault();
  };

  return (
    <header>
      <Menu>
        <a id='home' className='menu-item' href='/'>
          Home
        </a>
        <a id='about' className='menu-item' href='/about'>
          About
        </a>
        <a id='contact' className='menu-item' href='/contact'>
          Contact
        </a>
        <a onClick={showSettings} className='menu-item--small' href='/'>
          Settings
        </a>
      </Menu>
      <div className='headerTitle'>
        <h1>Hello on my site</h1>
      </div>
    </header>
  );
}

export default Header;
