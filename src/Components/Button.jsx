import React from 'react';
import PropTypes from 'prop-types';

function Button({ btnType, btnMethod, btnTestId, btnText, btnDisabled }) {
  return (
    <button
      type={ btnType ? 'submit' : 'button' }
      data-testid={ btnTestId }
      onClick={ btnMethod }
      disabled={ btnDisabled }
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
  btnDisabled: false,
};

Button.propTypes = {
  btnType: PropTypes.string,
  btnMethod: PropTypes.func,
  btnTestId: PropTypes.string,
  btnText: PropTypes.string,
  btnDisabled: PropTypes.bool,
};

export default Button;
