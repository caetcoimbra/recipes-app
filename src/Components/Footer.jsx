import React from 'react';
import PropTypes from 'prop-types';
import { drinkIcon } from '../images/drinkIcon.svg';
import { exploreIcon } from '../images/exploreIcon.svg';
import { mealIcon } from '../images/mealIcon.svg';
import '../Styles/style.css';

/** Não botar nas seguintes telas:
 * Login
 * Detalhes de receita
 * Progresso de receita
 * Receitas feitas
 * Receitas favoritas
 */

function Footer() {
  const drinkRedirect = () => {
    const { history } = props;
    history.push('/drinks');
  };

  const mealRedirect = () => {
    const { history } = props;
    history.push('/foods');
  };

  const exploreRedirect = () => {
    const { history } = props;
    history.push('/explore');
  };
  return (
    <footer data-testid="footer" className="footer">
      <div>
        <span data-testid="drinks-bottom-btn">
          <object
            role="button"
            tabIndex={ 0 }
            type="image/svg+xml"
            data={ drinkIcon }
            onClick={ drinkRedirect }
            onKeyPress={ drinkRedirect }
          >
            Drink
          </object>
        </span>
        <span data-testid="explore-bottom-btn">
          <object
            type="image/svg+xml"
            data={ exploreIcon }
            role="button"
            tabIndex={ 0 }
            onClick={ exploreRedirect }
            onKeyPress={ exploreRedirect }
          >
            Explore
          </object>
        </span>
        <span data-testid="food-bottom-btn">
          <object
            type="image/svg+xml"
            data={ mealIcon }
            role="button"
            tabIndex={ 0 }
            onClick={ mealRedirect }
            onKeyPress={ mealRedirect }
          >
            Meal
          </object>
        </span>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  history: PropTypes.shape(PropTypes.object).isRequired,
};

export default Footer;
