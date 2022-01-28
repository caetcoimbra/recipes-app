import React, { useState } from 'react';
import PropType from 'prop-types';
import getRecipesByFilter from '../Services';
import './SearchBar.css';

function SearchBar(props) {
  const { pageName } = props;
  const [filter, setFilter] = useState('Ingredient');
  const [input, setInput] = useState('');
  return (
    <>
      <input
        className="search-input"
        data-testid="search-input"
        type="text"
        placeholder="Search recipes"
        onChange={ ({ target }) => { setInput(target.value); } }
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
        onClick={ () => {
          getRecipesByFilter(pageName, filter, input);
        } }
      >
        Search
      </button>
    </>
  );
}

SearchBar.propTypes = {
  pageName: PropType.string.isRequired,
};

export default SearchBar;
