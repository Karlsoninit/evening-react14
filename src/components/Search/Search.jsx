import React from 'react';
import toggle from '../HOC/ToggleHOC';

const Search = ({ handleSubmit, handleChange }) => (
  <form onSubmit={handleSubmit}>
    <input type="text" onChange={handleChange} />
    <button type="submit">SEARCH</button>
  </form>
);

// export default toggle({ name: 'search' })(Search);

export default Search;
