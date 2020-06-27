import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar: React.FunctionComponent = () => (
  <nav>
    <div className="nav-wrapper #4db6ac teal lighten-2 px1">
      <a href="/" className="brand-logo">React + TypeScript</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><NavLink to="/">To-Do list </NavLink></li>
        <li><NavLink to="/about">Information</NavLink></li>
      </ul>
    </div>
  </nav>
);