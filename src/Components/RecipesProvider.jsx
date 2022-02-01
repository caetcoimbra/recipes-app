import React, { useEffect, useState } from 'react';
import PropType from 'prop-types';
import RecipeContext from '../Context/RecipeContext';
import useDrinks from '../Hooks/useDrinks';
import useFoods from '../Hooks/useFoods';
import useFoodCategories from '../Hooks/useFoodCategories';
import useDrinkCategories from '../Hooks/useDrinkCategories';

function RecipeProvider(props) {
  const fetchedDrinks = useDrinks();
  const fetchedFoods = useFoods();
  const fetchFoodCategories = useFoodCategories();
  const fetchDrinkCategories = useDrinkCategories();
  const [hasSearch, setSearchBtn] = useState(true);
  const [searchBar, setSearchBar] = useState(false);
  const [mealsArray, setMealsArray] = useState([]);
  const [drinksArray, setDrinksArray] = useState([]);
  const [foodCategoriesArray, setFoodCategoriesArray] = useState([]);
  const [drinkCategoriesArray, setDrinkCategoriesArray] = useState([]);
  const { children } = props;

  useEffect(() => {
    setMealsArray(fetchedFoods);
    setDrinksArray(fetchedDrinks);
    setFoodCategoriesArray(fetchFoodCategories);
    setDrinkCategoriesArray(fetchDrinkCategories);
  }, [fetchedDrinks, fetchedFoods, fetchFoodCategories, fetchDrinkCategories]);

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
