import React from "react";
import "./Login.css";

import LoginForm from "../../components/loginForm/LoginForm";
import Footer from "../../components/footer/Footer"

export default function Login() {
  return (
    <div className="login-container">
      <LoginForm />
      <Footer />
    </div>
  );
}
