import React, { useContext, useEffect } from 'react';
import CardList from '../Components/CardList';
import Header from '../Components/Header';
import RecipeContext from '../Context/RecipeContext';

function Foods() {
  const { setSearchBtn } = useContext(RecipeContext);
  useEffect(() => {
    setSearchBtn(true);
  });

  return (
    <div>
      <Header pageName="Foods" />
      <CardList />
    </div>
  );
}

export default Foods;
