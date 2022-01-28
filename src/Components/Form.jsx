import React from 'react';
import PropTypes from 'prop-types';

function Form({ formMethod, children }) {
  return (
    <form onSubmit={ formMethod }>
      { children }
    </form>
  );
}

Form.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  formMethod: PropTypes.func.isRequired,
};

export default Form;
