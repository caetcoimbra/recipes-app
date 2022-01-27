import React from 'react';
import PropTypes from 'prop-types';

function Input({
  inputTestId,
  inputType,
  inputPlaceHolder,
  inputValue,
  inputMethod,
}) {
  return (
    <input
      data-testid={ inputTestId }
      type={ inputType }
      placeholder={ inputPlaceHolder }
      value={ inputValue }
      onChange={ inputMethod }
    />
  );
}

Input.defaultProps = {
  inputPlaceHolder: '',
  inputValue: '',
};

Input.propTypes = {
  inputTestId: PropTypes.string.isRequired,
  inputType: PropTypes.string.isRequired,
  inputPlaceHolder: PropTypes.string,
  inputValue: PropTypes.string,
  inputMethod: PropTypes.func.isRequired,
};

export default Input;
