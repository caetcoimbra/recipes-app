import React, { useContext, useEffect } from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import RecipeContext from '../Context/RecipeContext';

function Foods() {
  const { setSearchBtn } = useContext(RecipeContext);
  useEffect(() => {
    setSearchBtn(true);
  });
  return (
    <>
      <Header pageName="Foods" />
      <Footer />
    </>
  );
}

export default Foods;
