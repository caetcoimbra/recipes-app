import React, { useEffect, useState, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import RecipeContext from '../Context/RecipeContext';
import RecipeCard from './RecipeCard';

function Filtered() {
  const [filtered, setFiltered] = useState([]);
  const { filter } = useContext(RecipeContext);
  const { pathname } = useLocation();
  useEffect(() => {
    if (filter !== '' && pathname === '/foods') {
      const TWELVE = 12;
      fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${filter}`)
        .then((response) => response.json())
        .then(({ meals }) => setFiltered(meals.slice(0, TWELVE)));
    }
    if (filter !== '' && pathname === '/drinks') {
      const TWELVE = 12;
      fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${filter}`)
        .then((response) => response.json())
        .then(({ drinks }) => setFiltered(drinks.slice(0, TWELVE)));
    }
  }, [filter, pathname]);

  const renderFiltered = () => {
    if (pathname === '/foods') {
      return (
        <div>
          {filtered.map((meal, index) => (
            <RecipeCard
              key={ index }
              recipeCardId={ `${index}-recipe-card` }
              cardImgId={ `${index}-card-img` }
              imgSrc={ meal.strMealThumb }
              imgStr={ meal.strMeal }
              cardName={ `${index}-card-name` }
            />
          ))}
        </div>
      );
    }
    if (pathname === '/drinks') {
      return (
        <div>
          {filtered.map((drink, index) => (
            <RecipeCard
              key={ index }
              recipeCardId={ `${index}-recipe-card` }
              cardImgId={ `${index}-card-img` }
              imgSrc={ drink.strDrinkThumb }
              imgStr={ drink.strDrink }
              cardName={ `${index}-card-name` }
            />
          ))}
        </div>
      );
    }
  };

  return (
    <div>
      {renderFiltered()}
    </div>
  );
}

export default Filtered;
