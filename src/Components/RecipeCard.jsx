import PropTypes from 'prop-types';
import React from 'react';

function RecipeCard({ recipeCardId, cardImgId, imgSrc, imgStr, cardName }) {
  return (
    <div data-testid={ recipeCardId }>
      <img src={ imgSrc } alt={ imgStr } data-testid={ cardImgId } />
      <span data-testid={ cardName }>{imgStr}</span>
    </div>
  );
}

RecipeCard.propTypes = {
  cardImgId: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  imgStr: PropTypes.string.isRequired,
  recipeCardId: PropTypes.string.isRequired,
  cardName: PropTypes.string.isRequired,
};

export default RecipeCard;