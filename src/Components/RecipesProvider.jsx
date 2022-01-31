import React, { useState } from 'react';
import PropType from 'prop-types';
import RecipeContext from '../Context/RecipeContext';

function RecipeProvider(props) {
  const [hasSearch, setSearchBtn] = useState(true);
  const [searchBar, setSearchBar] = useState(false);
  const { children } = props;

  return (
    <RecipeContext.Provider
      value={ {
        hasSearch,
        setSearchBtn,
        searchBar,
        setSearchBar,
      } }
    >
      {children}
    </RecipeContext.Provider>
  );
}

RecipeProvider.propTypes = {
  children: PropType.node.isRequired,
};

export default RecipeProvider;
