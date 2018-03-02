import React from 'react';
// Make Responsive, Collapse on Mobile sizings

const Sidebar = () => (

  <div className="container sidebar-container">
    <div className="sidebar filter-sidebar">
      <header className="sr-only">
        <p>Filter Product Controls</p>
      </header>
      <div className="sidebar-content">
        <div className="row">
          <div className="column column-67">
            <div className="navigation sub-navigation">
              <ul className="navigation-links">
                <li>Filter by: </li>
                <li><a href="#name">Product Name</a></li>
                <li><a href="#price">Price</a></li>
                <li><a href="#size">Size</a></li>
              </ul>
            </div>
            
          </div>
          <div className="column">
            <div className="search catalog-filter-search">
              <label htmlFor="catalog-search">
                <input type="text" id="catalog-search" name="catalog-search" value="" placeholder="Search Products..." />
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

);

export default Sidebar;