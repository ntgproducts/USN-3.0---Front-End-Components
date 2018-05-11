/* eslint no-console: 0 */
import React from 'react';
import PropTypes from 'prop-types';
import Airtable from 'airtable';
// import ImageGrid from '../components/product/ImageGrid';
import EnhancedCalc from '../components/calcs/Calculator-Square-Foot';
import Tabs from '../components/Tabs';
import '../../style/product.styl';
import Accordion from '../components/Accordion';
import { lowerShortenRemoveSpaces } from '../utils/utils';

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
          slug: record.get('Slug'),
          features: record.get('Features'),
          benefits: record.get('Benefits'),
          name: record.get('Product Name')
        };
      });
      this.setState({product});
    }, (err) => {
      if(err) console.error(err);
    });
  }

  render() {
    return (
      <div>
        {this.state.product &&
          <div className="product-container container">
            <div className="row">
              <div className="column column-12">
                <h1>{this.state.product.name}</h1>
                <p>
                  <span className="single-product product-code">{this.state.product.code}</span> -  
                  <span className="single-product product-price"> ${this.state.product.price}</span>
                </p>
                <div className="single-product image-gallery">
                  <div className="image-gallery inner-gallery-wrapper">
                    <img src="#" style={{
                      backgroundColor: "#fff",
                      width: "100%",
                      height: "300px",
                      borderRadius: "5px",
                      display: "block"
                    }} alt="Product"/>
                  </div>
                </div>
              </div>
              { /* <div className="column column-12">
                <ImageGrid media={data} />
              </div> */ }
              <div className="column column-6">
                <EnhancedCalc />
                {this.state.message && 
                  <div className="alert-msg-box">
                    {this.state.message}
                  </div>
                }
                <p><b>Product Description:</b></p>
                <p>{this.state.product.description}</p>
                <Accordion>
                  <Accordion.Button title="Expand Me Please" />
                  <Accordion.Expanded>Hello</Accordion.Expanded>
                </Accordion>
              </div>
            </div>
            {this.state.product.features && 
              <div className="row">
                <h2>Features:</h2>
                {this.state.product.features.split(';').map((feature) => (

                <div key={lowerShortenRemoveSpaces(feature, 9)} className="feature">
                    <span className="feature-icon" />
                    <p>{feature}</p>
                  </div>
                ))}
              </div>
            }
            <div className="row">
              <Tabs activeTab="Yo">
                <Tabs.Tab title="Click Me">
                  Something
                </Tabs.Tab>
                <Tabs.Tab title="Click Me 2">
                  Something Else
                </Tabs.Tab>
                <Tabs.Tab title="Click Me 3">
                  Something More
                </Tabs.Tab>
              </Tabs>
            </div>
          </div>
        }
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