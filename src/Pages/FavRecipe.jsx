import React, { useEffect, useContext } from 'react';
import Header from '../Components/Header';
import RecipeContext from '../Context/RecipeContext';

function FavRecipe() {
  const { setSearchBtn } = useContext(RecipeContext);
  useEffect(() => {
    setSearchBtn(false);
  });
  return (
    <Header pageName="Favorite Recipes" />
  );
}

export default FavRecipe;
