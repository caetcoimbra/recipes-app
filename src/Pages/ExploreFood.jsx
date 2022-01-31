import React, { useEffect, useContext } from 'react';
import Header from '../Components/Header';
import RecipeContext from '../Context/RecipeContext';

function ExploreFood() {
  const { setSearchBtn } = useContext(RecipeContext);
  useEffect(() => {
    setSearchBtn(false);
  });
  return (
    <Header pageName="Explore Foods" />
  );
}

export default ExploreFood;
