import React from "react";

const Search = ({ name, category, description, open, schedule, id }) => {
  return (
    <div className='search-bar'>
      <form action='/food_carts' method='get' className='form'>
        <label htmlFor='header-search'>
          <span className='visually-hidden'>Find by name or location</span>
        </label>
        <input
          type='search'
          className='form-control'
          placeholder='Find by name or location'
          name='query'
          id='query'
        />
        <button type='submit' className='search-button'>
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
