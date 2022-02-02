import React, { useState, useEffect, useContext } from 'react';
import PropType from 'prop-types';
import RecomendedCard from './RecomendedCard';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import fetchDetailsApi from '../Services/detailsApi';
import RecipeContext from '../Context/RecipeContext';
import './DetailsPage.css';

function DrinkDetails({ match: { params: { id } } }) {
  const { mealsArray } = useContext(RecipeContext);
  const recomendedNumber = 6;
  const recomendedMeals = mealsArray.slice(0, recomendedNumber);
  const [recipe, setRecipe] = useState({});
  const ingredientsKeys = [];
  const measurmentKey = [];

  useEffect(() => {
    function fetchRecipe() {
      fetchDetailsApi(id, 'drink').then((response) => {
        setRecipe(...response.drinks);
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
      recomendedMeals.map((meal, index) => (
        <RecomendedCard
          key={ index }
          foods={ meal }
          index={ index }
          str="strMeal"
          thumb="strMealThumb"
        />
      ))
    );
  }

  return (
    <>
      <div>Drinks Details</div>
      <img
        src={ recipe.strDrinkThumb }
        alt="drink"
        data-testid="recipe-photo"
        className="recipe-photo"
      />
      <section>
        <span data-testid="recipe-title">{ recipe.strDrink }</span>
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
        <span data-testid="recipe-category">
          { `${recipe.strCategory} - ${recipe.strAlcoholic}` }
        </span>
        <ul>
          Ingredients
          { renderIngredients() }
        </ul>
        <div data-testid="instructions">
          { recipe.strInstructions }
        </div>
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

DrinkDetails.propTypes = {
  match: PropType.shape({
    params: PropType.objectOf(PropType.string).isRequired,
  }).isRequired,
};

export default DrinkDetails;
