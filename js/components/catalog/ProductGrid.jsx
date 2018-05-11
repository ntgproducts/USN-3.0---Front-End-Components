import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './catalog.styl';

// Make Responsive, Collapse on Mobile sizings

const ProductGrid = (props) => (
  
  <div className="product-grid-wrapper">
    <div className="container product-grid">
      <div className="row row-wrap">
        {props.products.map(product => (
          <div key={product.code} className="product product-card column column-25">
            <div className="product-inner">
              <Link href={product.slug} to={`${product.slug}${product.code}`}>
                <h3>{product.code}</h3>
                <img src="https://www.usnetting.com/data/netting/allpurp/img/prod/Black/s3000-black.jpg" alt={product.code} />
                <p><b>Description: </b><br />{product.description}</p>
                <p>Price: ${product.price}</p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>

);

ProductGrid.defaultProps = {
  products: []
};

ProductGrid.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object)
};


export default ProductGrid;