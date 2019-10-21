import React from 'react';

const Search = ({ handleSubmit, handleChange }) => (
  <form onSubmit={handleSubmit}>
    <input type="text" onChange={handleChange} />
    <button type="submit">SEARCH</button>
  </form>
);

export default Search;
