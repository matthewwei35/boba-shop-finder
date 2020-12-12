import React from 'react';
import { NavLink } from 'react-router-dom';
import './Title.css';

function Title() {
  return (
    <div className="Title">
      <header>
        <h1>BOBA SHOP FINDER</h1>
        <div className="Title-Subtitle">Boba Places in the Sunset District</div>
      </header>
      <div className="Nav">
        <NavLink
          className="nav-link"
          activeClassName="nav-link-active"
          exact
          to="/">List</NavLink>
        <NavLink
          className="nav-link"
          activeClassName="nav-link-active"
          to="/about">About</NavLink>
      </div>
    </div>
  )
}

export default Title;
