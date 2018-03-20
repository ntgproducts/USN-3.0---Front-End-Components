import React from 'react';
import ImageGrid from '../components/product/ImageGrid';
import EnhancedCalc from '../components/calcs/Calculator-Square-Foot';
import TabLayout from '../components/product/TabLayout';
import TabData from '../data/mockTabData';
import '../../style/product.styl';

const data = [
  { name: 'Example', url: '#', mediaType: 'image' },
  { name: 'Example1', url: '#', mediaType: 'image' },
  { name: 'Example2', url: '#', mediaType: 'image' }
]
class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="product-container container">
        <div className="row">
          <div className="column column-6">
            <ImageGrid media={data} />
          </div>
          <div className="column column-6">
            <EnhancedCalc />
            <p>Value proposition here with some basic text paragraphing. To let you know whats up with this product.</p>
            <h2>Features:</h2>
            <ul>
              <li>Example Feature</li>
              <li>Example Feature</li>
              <li>Example Feature</li>
              <li>Example Feature</li>
            </ul>
          </div>
        </div>
        <div className="row">
          <TabLayout tabs={TabData} />
          
        </div>
      </div>
    )
  }
}

Product.defaultProps = {};

Product.propTypes = {};

export default Product;