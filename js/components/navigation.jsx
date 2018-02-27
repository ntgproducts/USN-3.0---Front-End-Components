import React from 'react';
import { Link } from 'react-router-dom';
import '../../style/nav.styl';

const Nav = () => (

  <div className="navigation">
    <ul className="brand">
      <li><Link href="/" to="/">US Netting</Link></li>
    </ul>
    <ul className="navigation-links">
      <li><a href="/example">Some Example</a></li>
      <li><a href="/example">Some Example</a></li>
      <li><a href="/example">Some Example</a></li>
      <li><a href="/example">Some Example</a></li>
    </ul>
  </div>

);

export default Nav;