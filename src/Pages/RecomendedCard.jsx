import React from 'react';
import PropType from 'prop-types';

function RecomendedCard({ foods, index, str, thumb }) {
  return (
    <div
      key={ index }
      data-testid={ `${index}-recomendation-card` }
    >
      <img
        src={ foods[thumb] }
        alt=""
        className="recomendedImg"
      />
      <span
        data-testid={ `${index}-recomendation-title` }
      >
        { foods[str] }
      </span>
    </div>
  );
}

RecomendedCard.propTypes = {
  foods: PropType.objectOf(PropType.string).isRequired,
  index: PropType.number.isRequired,
  str: PropType.string.isRequired,
  thumb: PropType.string.isRequired,
};

export default RecomendedCard;
