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
            src="https://raw.githubusercontent.com/JoaoMWatson/fisco-conector/99713b280abb24cccfd17935dd87d511a7f59cc1/src/images/fiscosys-banner.jpg"
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
