import React from 'react';
import Input from '../Components/Input';
import Button from '../Components/Button';

function Login() {
  return (
    <section>
      <h1>Login</h1>

      {/* Input de Email */}
      <Input
        inputTestId="email-input"
        inputType="text"
        inputPlaceHolder="Email"
        inputValue="email"
        inputMethod={ () => {} }
      />
      {/* Input de Senha */}
      <Input
        inputTestId="password-input"
        inputType="text"
        inputPlaceHolder="Senha"
        inputValue="senha"
        inputMethod={ () => {} }
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
