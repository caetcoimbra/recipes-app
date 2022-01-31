import React, { useEffect, useContext } from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import RecipeContext from '../Context/RecipeContext';

function Drinks() {
  const { setSearchBtn } = useContext(RecipeContext);
  useEffect(() => {
    setSearchBtn(true);
  });
  return (
    <>
      <Header pageName="Drinks" />
      <Footer />
    </>
  );
}

export default Drinks;
