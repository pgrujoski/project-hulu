import React from 'react';
import './Nav.css';

const Nav = () => {
  return (
    <nav className="nav">
      <div className="nav__container">
        <h2 className="nav__item">Trending</h2>
        <h2 className="nav__item">Top Rated</h2>
        <h2 className="nav__item">Action</h2>
        <h2 className="nav__item">Comedy</h2>
        <h2 className="nav__item">Horror</h2>
        <h2 className="nav__item">Romance</h2>
        <h2 className="nav__item">Mystery</h2>
        <h2 className="nav__item">Sci-Fi</h2>
        <h2 className="nav__item">Western</h2>
        <h2 className="nav__item">Animation</h2>
        <h2 className="nav__item">TV Movie</h2>
      </div>
      <div className="nav__gradient"></div>
    </nav>
  );
};

export default Nav;
