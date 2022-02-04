import React, { useState, useEffect } from 'react';
import PropType from 'prop-types';
import RecomendedCard from './RecomendedCard';
import StartRecipeButton from '../Components/StartRecipeButton';
import FavButton from '../Components/FavButton';
import ShareButton from '../Components/ShareButton';
import fetchFoodDetails from '../Services/foodDetailsApi';
import useDrinks from '../Hooks/useDrinks';
import './DetailsPage.css';

function FoodDetails({ match: { params: { id } } }) {
  const fetchDrinks = useDrinks();
  const recomendedNumber = 6;
  const recomendedDrinks = fetchDrinks.slice(0, recomendedNumber);
  const [recipe, setRecipe] = useState({});
  const ingredientsKeys = [];
  const measurmentKey = [];
  const urlShare = window.location.href;

  useEffect(() => {
    function fetchRecipe() {
      fetchFoodDetails(id).then((response) => {
        setRecipe(...response.meals);
      });
    }
    fetchRecipe();
  }, [id]);

  function renderIngredients() {
    Object.keys(recipe).map((key) => {
      if (key.includes('Ingredient') && recipe[key] && recipe[key] !== '') {
        ingredientsKeys.push(key);
      }
      if (key.includes('Measure')) {
        measurmentKey.push(key);
      }
      return (
        ingredientsKeys, measurmentKey
      );
    });
    return (
      ingredientsKeys.map((ingredient, index) => (
        <li
          key={ index }
          data-testid={ `${index}-ingredient-name-and-measure` }
        >
          { `${recipe[ingredient]} ${recipe[measurmentKey[index]]}`}
        </li>
      ))
    );
  }

  function renderRecomendation() {
    return (
      recomendedDrinks.map((drink, index) => (
        <RecomendedCard
          key={ index }
          foods={ drink }
          index={ index }
          str="strDrink"
          thumb="strDrinkThumb"
        />
      ))
    );
  }

  return (
    <>
      <img
        src={ recipe.strMealThumb }
        alt=""
        data-testid="recipe-photo"
        className="recipe-photo"
      />
      <section>
        <span data-testid="recipe-title">
          { recipe.strMeal}
        </span>
        <ShareButton testid="share-btn" urlShare={ urlShare } />
        <FavButton recipe={ recipe } testId="favorite-btn" />
      </section>
      <section>
        <span data-testid="recipe-category">{ recipe.strCategory }</span>
        <ul>
          <strong>Ingredients</strong>
          { renderIngredients() }
        </ul>
        <div data-testid="instructions">
          { recipe.strInstructions }
        </div>
      </section>
      <section>
        <iframe
          title="Recipe Video"
          data-testid="video"
          src={ recipe.strYoutube }
          frameBorder="0"
        />
      </section>
      <section className="recomended-conteiner">
        { renderRecomendation() }
      </section>
      <StartRecipeButton recipe={ recipe } idType="idMeal" />
    </>
  );
}

FoodDetails.propTypes = {
  match: PropType.shape({
    params: PropType.objectOf(PropType.string).isRequired,
  }).isRequired,
};

export default FoodDetails;
