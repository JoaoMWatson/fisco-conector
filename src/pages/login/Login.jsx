import React from "react";
import "./Login.css";

import LoginForm from "../../components/loginForm/LoginForm";
import Footer from "../../components/footer/Footer";

export default function Login() {
  return (
    <div className="login-container">
      <div class="grid-login">
        <div class="imagem-conector">
          <img
            className="image-login"
            src="https://raw.githubusercontent.com/JoaoMWatson/fisco-conector/5820bb22f9b59f5604a0bd8281aab5ec8c9d8a15/src/images/login-image.png"
          />
        </div>
        <div class="login-form">
          <h1 className="login-title">Login</h1>
          <LoginForm />
        </div>
      </div>
      <Footer />
    </div>
  );
}
