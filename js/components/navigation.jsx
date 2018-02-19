import React from 'react';
import { Link } from 'react-router-dom';
import '../../style/nav.styl';

const Nav = () => (

  <div className="navigation">
    <ul>
      <li><Link href="/something" to="/something">Something Else</Link></li>
    </ul>
  </div>

);

export default Nav;