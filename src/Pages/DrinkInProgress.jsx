import React, { useEffect, useState } from 'react';
import PropType from 'prop-types';
import { useHistory } from 'react-router-dom';
import fetchDrinkDetails from '../Services/drinkDetailsApi';
import FavButton from '../Components/FavButton';
import ShareButton from '../Components/ShareButton';

function DrinkInProgress({
  match: {
    params: { id },
  },
}) {
  const history = useHistory();
  const urlShare = window.location.href;
  const [recipe, setRecipe] = useState({});
  const redirect = () => {
    let doneRecipe = JSON.parse(localStorage.getItem('doneRecipes'));
    if (!doneRecipe) {
      doneRecipe = [];
    }
    const date = new Date();
    const dateFunction = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    const currRecipe = {
      id: recipe.idDrink,
      type: 'drink',
      nationality: '',
      category: recipe.strCategory,
      alcoholicOrNot: recipe.strAlcoholic,
      name: recipe.strDrink,
      image: recipe.strDrinkThumb,
      doneDate: dateFunction,
      tags: [],
    };
    doneRecipe.push(currRecipe);
    localStorage.setItem('doneRecipes', JSON.stringify(doneRecipe));
    history.push('/done-recipes');
  };
  const ingredientsKeys = [];
  const measurmentKey = [];
  useEffect(() => {
    function fetchRecipe() {
      fetchDrinkDetails(id, 'drink').then((response) => {
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
      return (ingredientsKeys, measurmentKey);
    });
    return ingredientsKeys.map((ingredient, index) => (
      <li key={ index } data-testid={ `${index}-ingredient-step` }>
        <input type="checkbox" />
        {' '}
        {`${recipe[ingredient]} ${recipe[measurmentKey[index]]}`}
      </li>
    ));
  }
  return (
    <div>
      <img
        src={ recipe.strDrinkThumb }
        alt=""
        data-testid="recipe-photo"
        className="recipe-photo"
      />
      <section>
        <span data-testid="recipe-title">{recipe.strDrink}</span>
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

DrinkInProgress.propTypes = {
  match: PropType.shape({
    params: PropType.objectOf(PropType.string).isRequired,
  }).isRequired,
};

export default DrinkInProgress;
