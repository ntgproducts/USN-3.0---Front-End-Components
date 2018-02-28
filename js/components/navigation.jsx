import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (

  <div className="navigation">
    <ul className="brand">
      <li>
        <Link href="/" to="/">
          <img src="dist/img/system/white-logo-01.png" alt="US Netting"/>
          <span className="sr-only">US Netting</span>
        </Link>
      </li>
    </ul>
    <ul className="navigation-links">
      <li><a href="/example">Another Example</a></li>
      <li><a href="/example">Next Example</a></li>
      <li><a href="/example">Example</a></li>
      <li><a href="/example">Contact</a></li>
    </ul>
  </div>

);

export default Nav;