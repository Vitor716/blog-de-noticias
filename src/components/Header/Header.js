import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav class="nav">
        <a href="home.html" class="logo"><img src={"./asses/logo.png"}/></a>
        <button class="hamburger"></button>
        <ul class="nav-list">
          <li><Link to="/post">Post</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/contato">Contato</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;