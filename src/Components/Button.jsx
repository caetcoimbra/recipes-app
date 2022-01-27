import React from 'react';
import PropTypes from 'prop-types';

function Button({ btnType, btnMethod, btnTestId, btnText }) {
  return (
    <button
      type={ btnType ? 'submit' : 'button' }
      data-testid={ btnTestId }
      onClick={ btnMethod }
    >
      { btnText }
    </button>
  );
}

Button.defaultProps = {
  btnType: 'button',
  btnMethod: () => {},
  btnTestId: '',
  btnText: '',
};

Button.propTypes = {
  btnType: PropTypes.string,
  btnMethod: PropTypes.func,
  btnTestId: PropTypes.string,
  btnText: PropTypes.string,
};

export default Button;
