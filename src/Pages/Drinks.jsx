import React, { useEffect, useContext } from 'react';
import Header from '../Components/Header';
import RecipeContext from '../Context/RecipeContext';

function Drinks() {
  const { setSearchBtn } = useContext(RecipeContext);
  useEffect(() => {
    setSearchBtn(true);
  });
  return (
    <Header pageName="Drinks" />
  );
}

export default Drinks;
