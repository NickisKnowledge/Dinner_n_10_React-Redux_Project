import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const SideNavBar = () => {
  return (
    <div className='mySidenav'>
      <ul>
        <Link to='/'>Home</Link>
        <Link to='/dinners'>Dinners</Link>
        <Link to='/dinners/new'>New Dinner</Link>
      </ul>
    </div>
  );
};

export default SideNavBar;
