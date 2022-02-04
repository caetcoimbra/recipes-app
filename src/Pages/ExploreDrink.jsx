import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Components/Header';
import SurpriseBtn from './SurpriseBtn';
import Footer from '../Components/Footer';
import RecipeContext from '../Context/RecipeContext';

function ExploreDrink() {
  const { setSearchBtn } = useContext(RecipeContext);
  useEffect(() => {
    setSearchBtn(false);
  });
  return (
    <>
      <Header pageName="Explore Drinks" />
      <div className="content">
        <Link to="/explore/drinks/ingredients">
          <button
            data-testid="explore-by-ingredient"
            type="button"
          >
            By Ingredient
          </button>
        </Link>
        <SurpriseBtn type="drink" />
      </div>
      <Footer />
      <Footer />
    </>
  );
}

export default ExploreDrink;
