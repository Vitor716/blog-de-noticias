import React from 'react';

const Login = () => {
  return (
    <div className="container">
    <div className="main">
      <input type="checkbox" id="chk" aria-hidden="true" />
      <div className="login">
        <form className="form">
          <label htmlFor="chk" aria-hidden="true">Login</label>
          <input className="input" type="email" name="email" placeholder="Email" required />
          <input className="input" type="password" name="pswd" placeholder="Senha" required />
          <button>Login</button>
        </form>
      </div>
      <div className="register">
        <form className="form">
          <label htmlFor="chk" aria-hidden="true">Registre-se</label>
          <input className="input" type="text" name="txt" placeholder="Nome" required />
          <input className="input" type="email" name="email" placeholder="Email" required />
          <input className="input" type="password" name="pswd" placeholder="Senha" required />
          <input className="input" type="password" name="pswd" placeholder="Confirmação de senha" required />
          <button>Registrar</button>
        </form>
      </div>
    </div>
  </div>
  );
};

export default Login;