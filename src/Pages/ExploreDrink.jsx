import React, { useEffect, useContext } from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import RecipeContext from '../Context/RecipeContext';

function ExploreDrink() {
  const { setSearchBtn } = useContext(RecipeContext);
  useEffect(() => {
    setSearchBtn(false);
  });
  return (
    <>
      <Header pageName="Explore Drinks" />
      <Footer />
    </>
  );
}

export default ExploreDrink;
