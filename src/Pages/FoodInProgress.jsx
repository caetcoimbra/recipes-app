import React, { useEffect, useState } from 'react';
import PropType from 'prop-types';
import { useHistory } from 'react-router-dom';
import fetchFoodDetails from '../Services/foodDetailsApi';
import FavButton from '../Components/FavButton';
import ShareButton from '../Components/ShareButton';

function FoodInProgress({
  match: {
    params: { id },
  },
}) {
  const history = useHistory();
  const redirect = () => {
    history.push('/done-recipes');
  };
  const [recipe, setRecipe] = useState({});
  const ingredientsKeys = [];
  const measurmentKey = [];
  const urlShare = window.location.href;
  useEffect(() => {
    function fetchRecipe() {
      fetchFoodDetails(id, 'food').then((response) => {
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
        <input type="checkbox" />
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
        <ShareButton testId="share-btn" urlShare={ urlShare } />
        <FavButton testId="favorite-btn" recipe={ recipe } />
      </section>
      <section>
        <span data-testid="recipe-category">{recipe.strCategory}</span>
        <ul>
          <strong>Ingredients</strong>
          {renderIngredients()}
        </ul>
        <div data-testid="instructions">{recipe.strInstructions}</div>
      </section>
      <button
        type="button"
        data-testid="finish-recipe-btn"
        value="Finalizar"
        onClick={ redirect }
      >
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
