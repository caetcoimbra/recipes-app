import React, { useContext } from 'react';
// import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import RecipeContext from '../Context/RecipeContext';
import RecipeCard from './RecipeCard';

function CardList() {
  const { drinksArray, mealsArray } = useContext(RecipeContext);
  const { pathname } = useLocation();
  console.log(drinksArray);

  function renderList() {
    if (pathname === '/foods') {
      return (
        <div>
          {mealsArray.map((meal, i) => (
            <RecipeCard
              key={ i + 1 }
              recipeCardId={ `${i}-recipe-card` }
              cardImgId={ `${i}-card-img` }
              imgSrc={ meal.strMealThumb }
              imgStr={ meal.strMeal }
              cardName={ `${i}-card-name` }
            />
          ))}
        </div>
      );
    }
    if (pathname === '/drinks') {
      return (
        <div>
          {drinksArray.map((drink, i) => (
            <RecipeCard
              key={ i }
              recipeCardId={ `${i}-recipe-card` }
              cardImgId={ `${i}-card-img` }
              imgSrc={ drink.strDrinkThumb }
              imgStr={ drink.strDrink }
              cardName={ `${i}-card-name` }
            />
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