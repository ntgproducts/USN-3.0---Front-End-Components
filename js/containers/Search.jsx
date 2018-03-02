import React from 'react';


const Search = (props) => (
  <div className="search search-bar">
    <label htmlFor="searchBar">
      <pre>
        {props && props}
      </pre>
      <input type="text" name="searchBar" id="searchBar" />
    </label>
  </div>
);

export default Search;