import React, { useState } from 'react';
import Input from '../Components/Input';
import Button from '../Components/Button';

function Login() {
  const [user, setUser] = useState({
    email: '',
    senha: '',
  });
  const { email, senha } = user;

  const handleChange = ({ target }) => {
    const { value, name } = target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  return (
    <section>
      <h1>Login</h1>

      {/* Input de Email */}
      <Input
        inputTestId="email-input"
        inputType="text"
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
        btnType="button"
        btnMethod={ () => {} }
        btnText="Enter"
      />

    </section>
  );
}

export default Login;
