import React, { useState, useEffect, useContext } from 'react';
import PropType from 'prop-types';
import RecomendedCard from './RecomendedCard';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import fetchDetailsApi from '../Services/detailsApi';
import RecipeContext from '../Context/RecipeContext';
import './DetailsPage.css';

function FoodDetails({ match: { params: { id } } }) {
  const { drinksArray } = useContext(RecipeContext);
  const recomendedNumber = 6;
  const recomendedDrinks = drinksArray.slice(0, recomendedNumber);
  const [recipe, setRecipe] = useState({});
  const ingredientsKeys = [];
  const measurmentKey = [];

  useEffect(() => {
    function fetchRecipe() {
      fetchDetailsApi(id, 'food').then((response) => {
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
      <div>Food Details</div>
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
        <input
          data-testid="share-btn"
          type="image"
          src={ shareIcon }
          alt="share button"
        />
        <input
          data-testid="favorite-btn"
          type="image"
          src={ whiteHeartIcon }
          alt="fav button"
        />
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
      <button
        type="button"
        data-testid="start-recipe-btn"
        className="start-button"
      >
        Start Recipe
      </button>
    </>
  );
}

FoodDetails.propTypes = {
  match: PropType.shape({
    params: PropType.objectOf(PropType.string).isRequired,
  }).isRequired,
};

export default FoodDetails;
