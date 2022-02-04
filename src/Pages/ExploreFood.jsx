import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Components/Header';
import SurpriseBtn from './SurpriseBtn';
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
      <div className="content">
        <Link to="/explore/foods/ingredients">
          <button
            data-testid="explore-by-ingredient"
            type="button"
          >
            By Ingredient
          </button>
        </Link>
        <Link to="/explore/foods/nationalities">
          <button
            data-testid="explore-by-nationality"
            type="button"
          >
            By Nationality
          </button>
        </Link>
        <SurpriseBtn type="food" />
      </div>
      <Footer />
    </>
  );
}

export default ExploreFood;
