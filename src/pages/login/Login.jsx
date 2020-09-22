import React, {useState} from "react";
import "./Login.css";

import isAuthenticated from "../../auth"
import LoginForm from "../../components/loginForm/LoginForm";
import Footer from "../../components/footer/Footer";

export default function Login(props) {
  const [callbackAuth, setCallbackAuth] = useState("");

  isAuthenticated(callbackAuth)

  return (
    <div className="login-container">
      <div class="grid-login">
        <div class="imagem-conector">
          <img
            className="image-login"
            src="https://raw.githubusercontent.com/JoaoMWatson/fisco-conector/92c39b0104b9786ef6a38c814d3b970ff203ec88/src/images/API%20e%20Softwares%20-%20Copia.png"
          />
        </div>
        <div class="login-form">
          <h1 className="login-title">Login</h1>
          <LoginForm setCallbackAuth={setCallbackAuth}/>
        </div>
        <div className="text-area-login">
          
        </div>
      </div>
      <Footer />
    </div>
  );
}
