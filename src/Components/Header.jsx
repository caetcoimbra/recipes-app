import React, { useState } from 'react';
import PropType from 'prop-types';
import { useHistory } from 'react-router-dom';
import './Header.css';
import profileIcon from '../images/profileIcon.svg';
import SearchBar from './SearchBar';
import searchIcon from '../images/searchIcon.svg';

function Header(props) {
  const { pageName } = props;
  const history = useHistory();

  const [searchBar, setSearchBar] = useState(false);
  return (
    <>
      <header>
        <button
          data-testid="profile-top-btn"
          type="button"
          onClick={ () => history.push('/profile') }
        >
          <img src={ profileIcon } alt="profile icon" />
        </button>
        <div data-testis="page-title">
          { pageName }
        </div>
        <button
          data-testis="search-top-btn"
          type="button"
          onClick={ () => { setSearchBar(!searchBar); } }
        >
          <img src={ searchIcon } alt="search icon" />
        </button>
      </header>
      { searchBar && <SearchBar pageName={ pageName } /> }
    </>
  );
}

Header.propTypes = {
  pageName: PropType.string.isRequired,
};

export default Header;
