import React, { useState } from 'react';
import PropType from 'prop-types';
import RecipeContext from '../Context/RecipeContext';
import useFoodCategories from '../Hooks/useFoodCategories';
import useDrinkCategories from '../Hooks/useDrinkCategories';

function RecipeProvider(props) {
  const fetchFoodCategories = useFoodCategories();
  const fetchDrinkCategories = useDrinkCategories();
  const [hasSearch, setSearchBtn] = useState(true);
  const [searchBar, setSearchBar] = useState(false);
  const [mealsArray, setMealsArray] = useState([]);
  const [drinksArray, setDrinksArray] = useState([]);
  const [foodCategoriesArray, setFoodCategoriesArray] = useState([]);
  const [drinkCategoriesArray, setDrinkCategoriesArray] = useState([]);
  const [filter, setFilter] = useState('');
  const { children } = props;

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
        foodCategoriesArray,
        drinkCategoriesArray,
        setFoodCategoriesArray,
        setDrinkCategoriesArray,
        fetchDrinkCategories,
        fetchFoodCategories,
        filter,
        setFilter,
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
