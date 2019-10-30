import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => (
  <ul>
    <li>
      <NavLink activeStyle={{ color: 'tomato' }} exact to="/">
        Home
      </NavLink>
    </li>
    <li>
      <NavLink activeStyle={{ color: 'tomato' }} to="/about">
        About
      </NavLink>
    </li>
    <li>
      <NavLink activeStyle={{ color: 'tomato' }} to="/news">
        News
      </NavLink>
    </li>
  </ul>
);

export default Header;
