import React, { useContext } from 'react';
import PropType from 'prop-types';
import { useHistory } from 'react-router-dom';
import './Header.css';
import profileIcon from '../images/profileIcon.svg';
import SearchBar from './SearchBar';
import searchIcon from '../images/searchIcon.svg';
import RecipeContext from '../Context/RecipeContext';

function Header(props) {
  const { pageName } = props;
  const history = useHistory();
  const context = useContext(RecipeContext);
  const { searchBar, setSearchBar, hasSearch } = context;

  function renderSearchButton() {
    return (
      <input
        data-testid="search-top-btn"
        type="image"
        src={ searchIcon }
        alt="search icon"
        onClick={ () => { setSearchBar(!searchBar); } }
      />
    );
  }

  return (
    <>
      <header className="header-conteiner">
        <input
          data-testid="profile-top-btn"
          type="image"
          src={ profileIcon }
          alt="profile icon"
          onClick={ () => history.push('/profile') }
        />
        <div data-testid="page-title">
          { pageName }
        </div>
        { hasSearch && renderSearchButton() }
      </header>
      { searchBar && <SearchBar pageName={ pageName } /> }
    </>
  );
}

Header.propTypes = {
  pageName: PropType.string.isRequired,
};

export default Header;
