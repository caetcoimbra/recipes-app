import React from 'react';
import PropType from 'prop-types';
import { Link } from 'react-router-dom';
import ShareButton from './ShareButton';

function RecipeDoneCard({
  image, index, category, name, date, tags, urlShare, linkPath }) {
  function renderTags() {
    return (
      tags.map((tag, tagIndex) => (
        <span
          key={ tagIndex }
          data-testid={ `${index}-${tag}-horizontal-tag` }
        >
          { tag }
          &ensp;
        </span>
      ))
    );
  }

  return (
    <div>
      <Link to={ linkPath }>
        <img
          src={ image }
          alt={ name }
          data-testid={ `${index}-horizontal-image` }
        />
      </Link>
      <div>
        <div
          data-testid={ `${index}-horizontal-top-text` }
        >
          { category }
        </div>
        <Link to={ linkPath }>
          <h3
            data-testid={ `${index}-horizontal-name` }
          >
            { name }
          </h3>
        </Link>
        <div
          data-testid={ `${index}-horizontal-done-date` }
        >
          { date }
        </div>
        <ShareButton
          testId={ `${index}-horizontal-share-btn` }
          urlShare={ urlShare }
        />
        <div
          data-testid={ `${index}-horizontal-tag` }
        >
          { renderTags() }
        </div>
      </div>
    </div>
  );
}

RecipeDoneCard.propTypes = {
  image: PropType.string.isRequired,
  index: PropType.number.isRequired,
  category: PropType.string.isRequired,
  name: PropType.string.isRequired,
  date: PropType.string.isRequired,
  tags: PropType.arrayOf(PropType.string).isRequired,
  urlShare: PropType.string.isRequired,
  linkPath: PropType.string.isRequired,
};

export default RecipeDoneCard;
