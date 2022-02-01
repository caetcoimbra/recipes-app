import React, { useEffect, useState } from 'react';
import PropType from 'prop-types';
import RecipeContext from '../Context/RecipeContext';
import useDrinks from '../Hooks/useDrinks';
import useFoods from '../Hooks/useFoods';

function RecipeProvider(props) {
  const fetchedDrinks = useDrinks();
  const fetchedFoods = useFoods();
  const [hasSearch, setSearchBtn] = useState(true);
  const [searchBar, setSearchBar] = useState(false);
  const [mealsArray, setMealsArray] = useState([]);
  const [drinksArray, setDrinksArray] = useState([]);
  const { children } = props;
  useEffect(() => {
    setMealsArray(fetchedFoods);
    setDrinksArray(fetchedDrinks);
  }, [fetchedDrinks, fetchedFoods]);

  return (
    <RecipeContext.Provider
      value={ {
        hasSearch,
        setSearchBtn,
        searchBar,
        setSearchBar,
        mealsArray,
        setMealsArray,
        drinksArray,
        setDrinksArray,
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
