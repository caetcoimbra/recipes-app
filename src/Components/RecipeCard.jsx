import PropTypes from 'prop-types';
import React from 'react';

function RecipeCard({ recipeCardId, cardImgId, imgSrc, imgStr, cardName, cardClass }) {
  return (
    <div data-testid={ recipeCardId } className={ cardClass }>
      <img data-testid={ cardImgId } src={ imgSrc } alt={ imgStr } />
      <span data-testid={ cardName }>{imgStr}</span>
    </div>
  );
}

RecipeCard.defaultProps = {
  recipeCardId: '',
  cardClass: '',
  cardImgId: '',
  imgStr: '',
  imgSrc: '',
};

RecipeCard.propTypes = {
  cardClass: PropTypes.string,
  cardImgId: PropTypes.string,
  imgSrc: PropTypes.string,
  imgStr: PropTypes.string,
  recipeCardId: PropTypes.string,
  cardName: PropTypes.string.isRequired,
};

export default RecipeCard;
