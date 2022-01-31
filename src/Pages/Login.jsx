import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Input from '../Components/Input';
import Button from '../Components/Button';
import Form from '../Components/Form';

function Login({ history }) {
  const [user, setUser] = useState({
    email: '',
    senha: '',
  });
  const [isDisabled, setIsDisabled] = useState(true);
  const { email, senha } = user;
  const minLen = 6;

  useEffect(() => {
    if (email === 'email@mail.com' && senha.length > minLen) {
      setIsDisabled(false);
    }
  }, [email, senha]);

  const handleChange = ({ target }) => {
    const { value, name } = target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem('mealsToken', 1);
    localStorage.setItem('cocktailsToken', 1);
    localStorage.setItem('user', JSON.stringify({ email }));
    history.push('/foods');
  };

  return (
    <Form formMethod={ handleSubmit }>

      {/* Input de Email */}
      <Input
        inputTestId="email-input"
        inputType="email"
        inputName="email"
        inputPlaceHolder="Email"
        inputValue={ email }
        inputMethod={ handleChange }
      />

      {/* Input de Senha */}
      <Input
        inputTestId="password-input"
        inputType="text"
        inputName="senha"
        inputPlaceHolder="Senha"
        inputValue={ senha }
        inputMethod={ handleChange }
      />

      {/* Botao Enter */}
      <Button
        btnTestId="login-submit-btn"
        btnType="submit"
        btnText="Enter"
        btnDisabled={ isDisabled }
      />

    </Form>
  );
}

Login.defaultProps = {
  history: {},
};

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }),
};

export default Login;
