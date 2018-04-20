import axios from 'axios';
import Airtable from 'airtable';

import { 
  SET_SEARCH_TERM, 
  ADD_API_DATA, 
  FETCH_ALL_PRODUCTS, 
  FETCH_SINGLE_PRODUCT 
} from './actions';

export function setSearchTerm(searchTerm) {
  return { type: SET_SEARCH_TERM, payload: searchTerm };
}

export function addAPIData(apiData) {
  return { type: ADD_API_DATA, payload: apiData };
}

export function getAPIDetails(imdbID) {
  return (dispatch) => {
    axios
      .get(`http://localhost:3000/${imdbID}`)
      .then(response => {
        dispatch(addAPIData(response.data));
      })
      .catch(error => {
        console.error('axios error', error); // eslint-disable-line no-console
      });
  };
}
export function receiveProducts(products){
  return { type: FETCH_ALL_PRODUCTS, payload: products }
}
export function getAllProducts() {
  return (dispatch) => {
    const API_KEY = 'keyf9Afiu9gLkM61v';
    const BASE_KEY = 'appevup1Wv8nTwJ1j';

    const base = new Airtable({
      apiKey: API_KEY
    }).base(BASE_KEY);

    base('Product Database').select({
      maxRecords: 10,
      view: "Grid view"
    }).eachPage((records) => { // takes callback fetchnextPage
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

      // this.setState({ products: results, isLoaded: true })
      dispatch(receiveProducts)
      // To fetch the next page of records, call `fetchNextPage`.
      // If there are more records, `page` will get called again.
      // If there are no more records, `done` will get called.
      //fetchNextPage();

    }, (err) => {
      if (err) {
        this.setState({ error: err })
      }
    })
  }
}