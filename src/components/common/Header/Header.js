import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import profile_logo from '../../../assets/images/profile.png';

function Header() {
  return (
    <header className="header">
      <div className="logo-div">
        <Link to="/" className="logo-link">
          E-Commerce App
        </Link>
      </div>

      <nav className="top-nav">
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
          <li className="auth-links">
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
          </li>
          <li>
            <Link to="/profile" className="profile-link">
              Profile
              <img
                src={profile_logo}
                alt="User Logo"
                className="profile-logo"
              />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
