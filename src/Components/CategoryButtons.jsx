import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import Button from './Button';
import RecipeContext from '../Context/RecipeContext';

function CategoryButtons() {
  const { foodCategoriesArray, drinkCategoriesArray } = useContext(RecipeContext);
  const { pathname } = useLocation();

  function generateCategoriesButtons() {
    if (pathname === '/foods') {
      return (
        <div>
          {foodCategoriesArray.map((meal, index) => (
            <Button
              key={ index }
              btnType="button"
              btnMethod={ () => {} }
              btnTestId={ `${meal.strCategory}-category-filter` }
              btnText={ meal.strCategory }
              btnDisabled={ false }
            />
          ))}
        </div>
      );
    }
    if (pathname === '/drinks') {
      return (
        <div>
          {drinkCategoriesArray.map((drink, index) => (
            <Button
              key={ index }
              btnType="button"
              btnMethod={ () => {} }
              btnTestId={ `${drink.strCategory}-category-filter` }
              btnText={ drink.strCategory }
              btnDisabled={ false }
            />
          ))}
        </div>
      );
    }
  }

  return (
    <div>
      {generateCategoriesButtons()}
    </div>
  );
}

export default CategoryButtons;
