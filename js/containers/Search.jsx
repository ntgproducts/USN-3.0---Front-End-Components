/* eslint class-methods-use-this: ["error", { "exceptMethods": ["productList"] }] */
// TODO: Remove the SearchPage style component from the container and place it in pages dir
import React from 'react';
import { ReactiveBase, DataSearch, ResultList } from '@appbaseio/reactivesearch';
import '../components/search/search.styl';

class Search extends React.Component {
  
  productList(data) {
    return {
      title: <div className="result-title"><h2>{data.name}</h2></div>,
      description: (
        <div className="result-description">
          <p className="code"><b>Product Code:</b> {data.code}</p>
          <p className="description">{data.description}</p>
        </div>
      ),
      image: data.imgUrl,
      url: `/products/loading-dock-safety-nets/${data.code}`
    };
  }
  render(){
    return (
      <div id="search-results" className="search container search-container">
        <ReactiveBase
          app="USNSearchApplication"
          credentials="0e50q15Ar:0693a732-22f3-4f02-9722-8ca67c47bc8a">
          <DataSearch
            componentId="searchField"
            dataField={['name','code', 'description']}
            placeholder="Search Products"
            fieldWeights={[3,1,2]}
            highlight
            highlightField="name"
            queryFormat="or"
            fuzziness={0}
            debounce={100}
            showFilter
            showIcon={false}
          />
          <ResultList
            className="search-results-list"
            // specify any number of custom styles.
            style={{ "paddingBottom": "40px" }}
            dataField="name"
            pagination
            size={10}
            loader="Loading Results..."
            componentId="productResultList"
            onData={this.productList}
            // register a callback function with the `onData` prop.
            // specify how and which results are filtered using `react` prop.
            react={
              { and: 'searchField' }
            }
            innerClass={{
              resultsInfo: "results-info",
              listItem: 'results-list-item',
              pagination: 'results-pagination',
              title: 'result-inner-title',
              image: 'result-image',
              list: 'result-list',
              resultStats: 'result-stats',
              sortOptions: 'result-sort-options'
            }}
          />
        </ReactiveBase>
      </div>
    );
  }
  
}


const SearchContainer = (props) => <Search {...props } />


export default SearchContainer;