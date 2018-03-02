import React from 'react';
import Products from './sample';
import './catalog.styl';

// Make Responsive, Collapse on Mobile sizings

const ProductGrid = () => (

  <div className="container product-grid">
    <div className="row row-wrap">
      {Products.map(product => (
        <div key={product.id} className="product product-card column column-25">
          <div className="product-inner">
            <a href="#ProductLink">
              <h3>{product['Product Title']}</h3>
              <img src={`https://www.usnetting.com${product.imgUrl}`} alt={product['Product Title']} />
              <p>Price: ${product.price}</p>
            </a>
          </div>
        </div>
      )
      )}
      </div>
  </div>

);

export default ProductGrid;