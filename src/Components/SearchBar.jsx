import React, { useState } from 'react';
import './SearchBar.css';

function SearchBar() {
  const [filter, setFilter] = useState('Ingredient');
  return (
    <>
      <input
        data-testid="search-input"
        type="text"
        placeholder="Search recipes"
      />
      <div className="input-button-container">
        <label htmlFor="input-ingredient">
          <input
            data-testid="ingredient-search-radio"
            type="radio"
            name="search"
            id="input-ingredient"
            value="Ingredient"
            className="radio-button"
            onChange={ ({ target }) => { setFilter(target.value); } }
          />
          Ingredients
        </label>
        <label htmlFor="input-name">
          <input
            data-testid="name-search-radio"
            type="radio"
            name="search"
            id="input-name"
            value="Name"
            className="radio-button"
            onChange={ ({ target }) => { setFilter(target.value); } }
          />
          Name
        </label>
        <label htmlFor="input-first">
          <input
            data-testid="first-letter-search-radio"
            type="radio"
            name="search"
            id="input-first"
            value="First Letter"
            className="radio-button"
            onChange={ ({ target }) => { setFilter(target.value); } }
          />
          First Letter
        </label>
      </div>
      <button
        data-testid="exec-search-btn"
        className="search-button"
        type="button"
        onClick={ () => { console.log(filter); } }
      >
        Search
      </button>
    </>
  );
}

export default SearchBar;
