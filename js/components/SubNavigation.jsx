import React from 'react';
import { Link } from 'react-router-dom';
//  TODO: Make responsive for collapse on mobile
const SubNav = () => (

  <div className="navigation sub-navigation">
      
    <ul className="navigation-links">
      <li><Link className="fancy-underline fancy-underline-blue" to="/calculators" href="/calculators">Calculator Example</Link></li>
      <li><Link className="fancy-underline fancy-underline-blue" to="/catalog" href="/catalog">Catalog Example</Link></li>
      <li><Link className="fancy-underline fancy-underline-blue" to="/search" href="/search">Search Page</Link></li>
      <li><Link className="fancy-underline fancy-underline-blue" to="/category-boxes" href="/category-boxes">Category Boxes</Link></li>
      <li><Link className="fancy-underline fancy-underline-blue" to="/product-example" href="/product-example">Product Example</Link></li>
    </ul>
  </div>

);

export default SubNav;