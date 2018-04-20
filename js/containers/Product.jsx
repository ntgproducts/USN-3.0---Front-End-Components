/* eslint no-console: 0 */
import React from 'react';
import PropTypes from 'prop-types';
import Airtable from 'airtable';
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

  componentDidMount(){
    const API_KEY = 'keyf9Afiu9gLkM61v';
    const BASE_KEY = 'appevup1Wv8nTwJ1j';

    const base = new Airtable({
      apiKey: API_KEY
    }).base(BASE_KEY);

    base('Product Database').select({ filterByFormula: `Code = "${this.props.match.params.code}"`}).eachPage((records) => {
      let product;
      records.forEach((record) => {
        product = {
          code: record.get('Code'),
          price: record.get('MSRP'),
          description: record.get('Product Description'),
          included: record.get('Included'),
          slug: record.get('Slug')
        };
        
      });
      this.setState({product});
    }, (err) => {
      if(err) console.error(err);
    });

  }

 

  render() {
    return (
      <div className="product-container container">
        <div className="row">
          {this.state.product && 
            <h1>{this.state.product.code}</h1>
          }
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

Product.defaultProps = {
  match: {}
};

Product.propTypes = {
  match: PropTypes.shape({
    isExact: PropTypes.bool,
    params: PropTypes.object,
    path: PropTypes.string
  })
};

export default Product;