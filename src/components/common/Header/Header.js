import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo-div div">
        <Link to="/">E-Commerce App</Link>
      </div>

      <nav className="top-nav nav top">
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/categories_list">Categories</Link>
          </li>

          <li>
            <Link to="/products_list">Products</Link>
          </li>

          <li>
            <Link to="/offers">Offers</Link>
          </li>

          <li>
            <Link to="/cart">Cart</Link>
          </li>

          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
