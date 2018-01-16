import React from 'react';
import './Nav.css';

const SideNavBar = () => {
  return (
    <div className='mySidenav'>
      <ul>
        <a href='/'>Home</a>
        <a href='/dinners'>Dinners</a>
        <a href='/dinners/new'>New Dinner</a>
      </ul>
    </div>
  );
};

export default SideNavBar;
