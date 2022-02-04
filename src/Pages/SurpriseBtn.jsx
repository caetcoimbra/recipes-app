import React from 'react';
import PropType from 'prop-types';
import { useHistory } from 'react-router-dom';
import fetchRandomRecipe from '../Services/randomRecipeApi';

function SurpriseBtn({ type }) {
  const history = useHistory();
  function handleClick() {
    const randomRecipe = fetchRandomRecipe(type);
    randomRecipe.then((response) => {
      const recipeType = Object.keys(response);
      const recipeObj = response[recipeType][0];
      const idType = Object.keys(recipeObj)[0];
      console.log(recipeObj[idType]);
      history.push(`/${type}s/${recipeObj[idType]}`);
    });
  }
  return (
    <button
      data-testid="explore-surprise"
      type="button"
      onClick={ handleClick }
    >
      Surprise me!
    </button>
  );
}

SurpriseBtn.propTypes = {
  type: PropType.string.isRequired,
};

export default SurpriseBtn;
