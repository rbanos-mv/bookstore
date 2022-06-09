import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <header className="row">
    <h1 className="title">Bookstore CMS</h1>
    <ul className="row menu">
      <li>
        <Link className="text-style-3" to="/">
          Books
        </Link>
      </li>
      <li>
        <Link className="text-style-3" to="/categories">
          Categories
        </Link>
      </li>
    </ul>
    <i className="fas fa-user" />
  </header>
);
export default NavBar;
