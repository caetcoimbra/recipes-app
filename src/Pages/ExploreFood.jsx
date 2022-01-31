import React, { useEffect, useContext } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import RecipeContext from '../Context/RecipeContext';

function ExploreFood() {
  const { setSearchBtn } = useContext(RecipeContext);
  useEffect(() => {
    setSearchBtn(false);
  });
  return (
    <>
      <Header pageName="Explore Foods" />
      <Footer />
    </>
  );
}

export default ExploreFood;
