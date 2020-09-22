import React, { useState } from "react";
import "./Login.css";

import isAuthenticated from "../../auth";
import LoginForm from "../../components/loginForm/LoginForm";
import Footer from "../../components/footer/Footer";

export default function Login(props) {
  const [callbackAuth, setCallbackAuth] = useState("");

  isAuthenticated(callbackAuth);

  return (
    <div className="login-container">
      <div class="grid-login">
        <div class="imagem-conector">
          <img
            className="image-login"
            src={require("../../images/image-login.png")}
          />
        </div>
        <div class="login-form">
          <h1 className="login-title">- Login -</h1>
          <LoginForm setCallbackAuth={setCallbackAuth} />
        </div>
        <div className="text-area-login">
          <h1 className="login-title about-login">- Sobre -</h1>
          <p className="paragrafer-login">
            A Fiscosys pode ajuda-los na Implementação de ERP`s e ferramentas
            fiscais, na entrega das obrigações acessórias ao Fisco, atendimento
            a Intimações e na otimização de ferramentas de apoio para facilitar
            o dia a dia.
          </p>
          <p className="paragrafer-login">
            A Fiscosys é uma empresa especializada em soluções fiscais,
            fornecendo soluções inteligentes, com profissionais altamente
            qualificados, garantindo máxima qualidade na prestação de serviços
            aos seus clientes e parceiros. Prezamos pela ética, honestidade e
            transparência no trato com seus colaboradores, parceiros e clientes.
            Nossa experiência está suportada na expertise legal e tributária de
            nossa equipe de profissionais e no uso intensivo de tecnologia,
            contando também com vivência em grandes corporações e nos principais
            ERP`s tais como, SAP, Microsoft Dynamics AX, BAAN, Oracle, entre
            outros.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
