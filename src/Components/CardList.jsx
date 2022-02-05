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
    filteredIngredient,
  } = useContext(RecipeContext);
  const fetchedDrinks = useDrinks();
  const { pathname } = useLocation();

  useEffect(() => {
    setDrinksArray(fetchedDrinks);
  }, [setDrinksArray, fetchedDrinks]);

  function renderList() {
    if (pathname === '/foods' && filteredIngredient !== true) {
      return (
        <div>
          {mealsArray.map((meal, index) => (
            <Link
              to={ `/foods/${meal.idMeal}` }
              key={ index }
            >
              <RecipeCard
                recipeCardId={ `${index}-recipe-card` }
                cardClass="recipe__card"
                cardImgId={ `${index}-card-img` }
                imgSrc={ meal.strMealThumb }
                imgStr={ meal.strMeal }
                cardName={ `${index}-card-name` }
              />
            </Link>
          ))}
        </div>
      );
    }

    if (pathname === '/drinks' && filteredIngredient !== true) {
      return (
        <div>
          {drinksArray.map((drink, index) => (
            <Link
              to={ `/drinks/${drink.idDrink}` }
              key={ index }
            >
              <RecipeCard
                recipeCardId={ `${index}-recipe-card` }
                cardClass="recipe__card"
                cardImgId={ `${index}-card-img` }
                imgSrc={ drink.strDrinkThumb }
                imgStr={ drink.strDrink }
                cardName={ `${index}-card-name` }
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
