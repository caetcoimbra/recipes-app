import React, { useEffect, useState, useContext } from 'react';
import RecipeContext from '../Context/RecipeContext';
import RecipeCard from './RecipeCard';

function Filtered() {
  const [filteredMeals, setFilteredMeals] = useState([]);
  const { filter } = useContext(RecipeContext);
  useEffect(() => {
    if (filter !== '') {
      const TWELVE = 12;
      fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${filter}`)
        .then((response) => response.json())
        .then(({ meals }) => setFilteredMeals(meals.splice(0, TWELVE)));
    }
  }, [filter]);

  return (
    <div>
      {filteredMeals.map((meal, i) => (
        <RecipeCard
          key={ i }
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

export default Filtered;
