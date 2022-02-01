import React, { useEffect, useContext } from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import RecipeContext from '../Context/RecipeContext';

function ExploreFoodNaton() {
  const { setSearchBtn } = useContext(RecipeContext);
  useEffect(() => {
    setSearchBtn(true);
  });
  return (
    <>
      <Header pageName="Explore Nationalities" />
      <Footer />
    </>
  );
}

export default ExploreFoodNaton;
