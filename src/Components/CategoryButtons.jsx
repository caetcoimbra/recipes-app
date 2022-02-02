import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import Button from './Button';
import RecipeContext from '../Context/RecipeContext';

function CategoryButtons() {
  const {
    foodCategoriesArray,
    drinkCategoriesArray,
    setFilter,
  } = useContext(RecipeContext);

  const { pathname } = useLocation();

  const submitFilter = ({ target }) => {
    const { textContent } = target;
    setFilter(textContent);
  };

  function generateCategoriesButtons() {
    if (pathname === '/foods') {
      return (
        <div>
          {foodCategoriesArray.map((meal, index) => (
            <Button
              key={ index }
              btnType="button"
              btnMethod={ submitFilter }
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
              btnMethod={ submitFilter }
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
