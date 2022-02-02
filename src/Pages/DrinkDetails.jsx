import React, { useState, useEffect } from 'react';
import PropType from 'prop-types';
import RecomendedCard from './RecomendedCard';
import StartRecipeButton from '../Components/StartRecipeButton';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import fetchDetailsApi from '../Services/detailsApi';
import useFoods from '../Hooks/useFoods';
import './DetailsPage.css';

function DrinkDetails({ match: { params: { id } } }) {
  const fetchFoods = useFoods();
  const recomendedNumber = 6;
  const recomendedMeals = fetchFoods.slice(0, recomendedNumber);
  const [recipe, setRecipe] = useState({});
  const [changeHeart, setHeart] = useState();
  const [favList, setFav] = useState();
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

  useEffect(() => {
    function checkFavoriteLS() {
      let favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
      if (!favoriteRecipes) {
        favoriteRecipes = [];
      }
      return ({
        checkFavorite: favoriteRecipes.some((element) => element.id === recipe.idDrink),
        favoriteRecipes,
      });
    }
    const { favoriteRecipes, checkFavorite } = checkFavoriteLS();
    setHeart(checkFavorite);
    setFav(favoriteRecipes);
  }, [recipe.idDrink]);

  function handleFavoriteClick() {
    const currentRecipe = {
      id: recipe.idDrink,
      type: 'drink',
      nationality: '',
      category: recipe.strCategory,
      alcoholicOrNot: recipe.strAlcoholic,
      name: recipe.strDrink,
      image: recipe.strDrinkThumb,
    };

    if (changeHeart) {
      const indexFav = favList.findIndex((element) => (
        element.id === currentRecipe.id));
      favList.splice(indexFav, 1);
      localStorage.setItem('favoriteRecipes', JSON.stringify(favList));
      setHeart(false);
    } else {
      favList.push(currentRecipe);
      localStorage.setItem('favoriteRecipes', JSON.stringify(favList));
      setHeart(true);
    }
  }

  return (
    <>
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
          src={ changeHeart ? blackHeartIcon : whiteHeartIcon }
          alt="fav button"
          onClick={ handleFavoriteClick }
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
      <StartRecipeButton />
    </>
  );
}

DrinkDetails.propTypes = {
  match: PropType.shape({
    params: PropType.objectOf(PropType.string).isRequired,
  }).isRequired,
};

export default DrinkDetails;
