import React, { useEffect, useState } from 'react';
import PropType from 'prop-types';
import fetchDetailsApi from '../Services/detailsApi';

function FoodInProgress({
  match: {
    params: { id },
  },
}) {
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
      return (ingredientsKeys, measurmentKey);
    });
    return ingredientsKeys.map((ingredient, index) => (
      <li key={ index } data-testid={ `${index}-ingredient-step` }>
        {`${recipe[ingredient]} ${recipe[measurmentKey[index]]}`}
      </li>
    ));
  }
  return (
    <div>
      <div>Food Details</div>
      <img
        src={ recipe.strMealThumb }
        alt=""
        data-testid="recipe-photo"
        className="recipe-photo"
      />
      <section>
        <span data-testid="recipe-title">{recipe.strMeal}</span>
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
        <span data-testid="recipe-category">{recipe.strCategory}</span>
        <ul>
          <strong>Ingredients</strong>
          {renderIngredients()}
        </ul>
        <div data-testid="instructions">{recipe.strInstructions}</div>
      </section>
      <button type="button" data-testid="finish-recipe-btn">
        Finalizar
      </button>
    </div>
  );
}

FoodInProgress.propTypes = {
  match: PropType.shape({
    params: PropType.objectOf(PropType.string).isRequired,
  }).isRequired,
};

export default FoodInProgress;
