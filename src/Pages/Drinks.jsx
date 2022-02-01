import React, { useEffect, useContext } from 'react';
import CardList from '../Components/CardList';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import RecipeContext from '../Context/RecipeContext';

function Drinks() {
  const { setSearchBtn } = useContext(RecipeContext);
  useEffect(() => {
    setSearchBtn(true);
  });
  return (
    <div>
      <Header pageName="Drinks" />
      <CardList />
      <Footer />
    </div>
  );
}

export default Drinks;
