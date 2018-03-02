import React from 'react';
import ProductGrid from '../components/catalog/ProductGrid';
import Sidebar from '../components/catalog/Sidebar';

class Catalog extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};
    }

  render() {
    return (
      <div className="catalog-container">
        <Sidebar />
        <ProductGrid />
      </div>
    )
  }
}

Catalog.defaultProps = {};

Catalog.propTypes = {};

export default Catalog;