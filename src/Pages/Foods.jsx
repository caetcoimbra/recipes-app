import React, { useContext, useEffect } from 'react';
import CardList from '../Components/CardList';
import CategoryButtons from '../Components/CategoryButtons';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import RecipeContext from '../Context/RecipeContext';
import Filtered from '../Components/Filtered';

function Foods() {
  const { setSearchBtn } = useContext(RecipeContext);
  useEffect(() => {
    setSearchBtn(true);
  });

  return (
    <div>
      <Header pageName="Foods" />
      <CategoryButtons />
      <CardList />
      <Filtered />
      <Footer />
    </div>
  );
}

export default Foods;
