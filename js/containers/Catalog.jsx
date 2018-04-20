import React from 'react';
import Airtable from 'airtable';
import ProductGrid from '../components/catalog/ProductGrid';
import Sidebar from '../components/catalog/Sidebar';
import Spinner from '../utils/Spinner';

class Catalog extends React.Component {  
    
  constructor(props) {
    super(props);
    
    this.state = {
      isLoaded: false
    };
  }

  componentDidMount = () => {
    this.getProducts('Product Database')
  }

  getProducts(basename) {
    
    // possibly move these methods to be interchangeable (lib for ajax) 
    const API_KEY = 'keyf9Afiu9gLkM61v';
    const BASE_KEY = 'appevup1Wv8nTwJ1j';

    const base = new Airtable({
      apiKey: API_KEY
    }).base(BASE_KEY);

    base(basename).select({
      maxRecords: 10,
      view: "Grid view"
    }).eachPage((records, fetchNextPage) => {
        const results = [];
        
        records.forEach((record) => {
          results.push({ 
            code: record.get('Code'),
            price: record.get('MSRP'),
            description: record.get('Product Description'),
            included: record.get('Included'),
            slug: record.get('Slug')
          })
        });

        this.setState({ products: results, isLoaded: true })

        // To fetch the next page of records, call `fetchNextPage`.
        // If there are more records, `page` will get called again.
        // If there are no more records, `done` will get called.
        fetchNextPage();

    }, (err) => {
      if(err){ 
        this.setState({ error: err })
      }
    })
    
  }
  
  render() {
    return (
      <div className="catalog-container">
        {this.state.error && 
          <h2>{this.state.error}</h2>
        }
        <Sidebar />
        { this.state.isLoaded ?   (
          <ProductGrid products={this.state.products} /> 
          ) : (
            <Spinner />
          )
        }
      </div>
    )
  }
}

Catalog.defaultProps = {};

Catalog.propTypes = {};

export default Catalog;