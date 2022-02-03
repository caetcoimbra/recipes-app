import React, { useState, useEffect } from 'react';
import PropType from 'prop-types';
import RecomendedCard from './RecomendedCard';
import StartRecipeButton from '../Components/StartRecipeButton';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import fetchDetailsApi from '../Services/detailsApi';
import useDrinks from '../Hooks/useDrinks';
import './DetailsPage.css';

function FoodDetails({ match: { params: { id } } }) {
  const fetchDrinks = useDrinks();
  const recomendedNumber = 6;
  const recomendedDrinks = fetchDrinks.slice(0, recomendedNumber);
  const [recipe, setRecipe] = useState({});
  const [changeHeart, setHeart] = useState();
  const [favList, setFav] = useState();
  const [copiedAlert, setAlert] = useState(false);
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

  function renderCopyMsg() {
    return (
      <div>
        Link copied!
      </div>
    );
  }

  function handleShareClick() {
    const TIMEOUT = 1000;
    navigator.clipboard.writeText(window.location.href);
    setAlert(true);
    setTimeout(() => { setAlert(false); }, TIMEOUT);
  }

  useEffect(() => {
    function checkFavoriteLS() {
      let favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
      if (!favoriteRecipes) {
        favoriteRecipes = [];
      }
      return ({
        checkFavorite: favoriteRecipes.some((element) => element.id === recipe.idMeal),
        favoriteRecipes,
      });
    }
    const { favoriteRecipes, checkFavorite } = checkFavoriteLS();
    setHeart(checkFavorite);
    setFav(favoriteRecipes);
  }, [recipe.idMeal]);

  function handleFavoriteClick() {
    const currentRecipe = {
      id: recipe.idMeal,
      type: 'food',
      nationality: recipe.strArea,
      category: recipe.strCategory,
      alcoholicOrNot: '',
      name: recipe.strMeal,
      image: recipe.strMealThumb,
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
          onClick={ handleShareClick }
        />
        <input
          data-testid="favorite-btn"
          type="image"
          src={ changeHeart ? blackHeartIcon : whiteHeartIcon }
          alt="fav button"
          onClick={ handleFavoriteClick }
        />
        { copiedAlert && renderCopyMsg() }
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
