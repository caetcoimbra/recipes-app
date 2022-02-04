import React, { useContext, useEffect } from 'react';
// import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import RecipeContext from '../Context/RecipeContext';
import RecipeCard from './RecipeCard';
import useDrinks from '../Hooks/useDrinks';

function CardList() {
  const {
    drinksArray,
    mealsArray,
    setDrinksArray,
  } = useContext(RecipeContext);
  const fetchedDrinks = useDrinks();
  const { pathname } = useLocation();

  useEffect(() => {
    setDrinksArray(fetchedDrinks);
  }, [setDrinksArray, fetchedDrinks]);

  function renderList() {
    if (pathname === '/foods') {
      return (
        <div>
          {mealsArray.map((meal, i) => (
            <Link
              to={ `/foods/${meal.idMeal}` }
              key={ i }
            >
              <RecipeCard
                recipeCardId={ `${i}-recipe-card` }
                cardClass="recipe__card"
                cardImgId={ `${i}-card-img` }
                imgSrc={ meal.strMealThumb }
                imgStr={ meal.strMeal }
                cardName={ `${i}-card-name` }
              />
            </Link>
          ))}
        </div>
      );
    }

    if (pathname === '/drinks') {
      return (
        <div>
          {drinksArray.map((drink, i) => (
            <Link
              to={ `/drinks/${drink.idDrink}` }
              key={ i }
            >
              <RecipeCard
                recipeCardId={ `${i}-recipe-card` }
                cardClass="recipe__card"
                cardImgId={ `${i}-card-img` }
                imgSrc={ drink.strDrinkThumb }
                imgStr={ drink.strDrink }
                cardName={ `${i}-card-name` }
              />
            </Link>
          ))}
        </div>
      );
    }
  }

  return (
    <div>
      {renderList()}
    </div>
  );
}

// CardList.propTypes = {
//   history: PropTypes.objectOf(PropTypes.func).isRequired,
// };
export default CardList;
