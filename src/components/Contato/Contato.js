import React from 'react';
import './contato.css'; 
const Contato = () => {
  return (
    <section>
      <header className="container">
        <div className="contactInfo">
          <div>
            <h2>Informações de Contato</h2>
            <ul className="info">
              <li>
                <span><img src="img/location.png" alt="Ícone de localização" /></span>
                <span>Rua dos Girassóis, 456,<br />Vila Olímpia, São Paulo-SP<br />CEP: 04578-123</span>
              </li>
              <li>
                <span><img src="img/mail.png" alt="Ícone de e-mail" /></span>
                <span><a href="mailto:KittyBlog@gmail.com">KittyBlog@gmail.com</a></span>
              </li>
              <li>
                <span><img src="img/call.png" alt="Ícone de telefone" /></span>
                <span>+55 (11) 94830-0356</span>
              </li>
            </ul>
          </div>
          <ul className="sci">
            <li><a href="https:///www.facebook.com/BlogKitty"><img src="img/1.png" alt="Ícone do Facebook" /></a></li>
            <li><a href="https://www.instagram.com/KittyBlog__"><img src="img/3.png" alt="Ícone do Instagram" /></a></li>
            <li><a href="https://www.twitter.com/KittyBlog_"><img src="img/2.png" alt="Ícone do Twitter" /></a></li>
          </ul>
        </div>
        <div className="contactForm">
          <h2>Envie-nos uma mensagem</h2>
          <div className="formBox">
            <div className="inputBox w50">
              <input type="text" name="firstName" required />
              <span>Primeiro Nome</span>
            </div>
            <div className="inputBox w50">
              <input type="text" name="lastName" required />
              <span>Último Nome</span>
            </div>
            <div className="inputBox w50">
              <input type="email" name="email" required />
              <span>Email</span>
            </div>
            <div className="inputBox w50">
              <input type="text" name="number" required />
              <span>Número</span>
            </div>
            <div className="inputBox w100">
              <textarea required></textarea>
              <span>Escreva sua mensagem aqui:</span>
            </div>
            <div className="inputBox w100">
              <input type="submit" value="Enviar" />
            </div>
          </div>
        </div>
      </header>
    </section>
  );
};

export default Contato;