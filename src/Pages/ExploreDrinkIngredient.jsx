import React, { useEffect, useContext } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import RecipeContext from '../Context/RecipeContext';

function ExploreDrinkIngredient() {
  const { setSearchBtn } = useContext(RecipeContext);
  useEffect(() => {
    setSearchBtn(false);
  });
  return (
    <>
      <Header pageName="Explore Ingredients" />
      <Footer />
    </>
  );
}

export default ExploreDrinkIngredient;
