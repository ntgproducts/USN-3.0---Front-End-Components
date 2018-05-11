import React from 'react';
// Make Responsive, Collapse on Mobile sizings

const CatalogToolBar = () => (

  <div className="container toolbar-container">
    <div className="catalog-toolbar">
      <header className="sr-only">
        <p>Sort Product Controls</p>
      </header>
      <div className="sidebar-content">
        <div className="row">
          <div className="column column-67">
            <div className="navigation sub-navigation">
              <ul className="navigation-links">
                <li>Sort by: </li>
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

export default CatalogToolBar;