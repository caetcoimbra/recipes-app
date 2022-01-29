import React, { useContext } from 'react';
import Header from '../Components/Header';
import RecipeContext from '../Context/RecipeContext';

function Foods() {
  const { setSearchBtn } = useContext(RecipeContext);
  setSearchBtn(true);
  return (
    <Header pageName="Foods" />
  );
}

export default Foods;
