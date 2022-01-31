import React, { useEffect, useContext } from 'react';
import Header from '../Components/Header';
import RecipeContext from '../Context/RecipeContext';

function RecipeDone() {
  const { setSearchBtn } = useContext(RecipeContext);
  useEffect(() => {
    setSearchBtn(false);
  });
  return (
    <Header pageName="Done Recipes" />
  );
}

export default RecipeDone;
