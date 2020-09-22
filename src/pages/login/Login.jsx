import React from "react";
import "./Login.css";

import LoginForm from "../../components/loginForm/LoginForm";
import Footer from "../../components/footer/Footer";

export default function Login() {
  return (
    <div className="login-container">
      <div class="grid-login">
        <div class="imagem-conector">
          <img className="image-login" src='../../images/login-image.png' />
        </div>
        <div class="login-form">
          <LoginForm />
        </div>
      </div>
      <Footer />
    </div>
  );
}
