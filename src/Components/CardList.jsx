import React, { useContext, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import RecipeContext from '../Context/RecipeContext';
import RecipeCard from './RecipeCard';
import useDrinks from '../Hooks/useDrinks';
import './CardList.css';

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
        <div className="container">
          <div className="container__meals">
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
        </div>
      );
    }

    if (pathname === '/drinks' && filteredIngredient !== true) {
      return (
        <div className="container">
          <div className="container__drinks">
            {drinksArray.map((drink, index) => (
              <Link
                to={ `/drinks/${drink.idDrink}` }
                key={ index }
              >
                <RecipeCard
                  recipeCardId={ `${index}-recipe-card` }
                  cardClass="recipe__card  shadow-sm"
                  cardImgId={ `${index}-card-img` }
                  imgSrc={ drink.strDrinkThumb }
                  imgStr={ drink.strDrink }
                  cardName={ `${index}-card-name` }
                />
              </Link>
            ))}
          </div>
        </div>
      );
    }
  }

  return (
    <div>
      {(renderList())}
    </div>
  );
}

// CardList.propTypes = {
//   history: PropTypes.objectOf(PropTypes.func).isRequired,
// };
export default CardList;
